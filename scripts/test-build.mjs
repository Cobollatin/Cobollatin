import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

const root = process.cwd();
const fixtures = new Map([
  ['src/content/authors/fixture-author.json', '{"name":"Fixture Author","picture":"/authors/fixture.svg","links":[{"label":"Portfolio","url":"https://example.org"}]}\n'],
  ['public/authors/fixture.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="40" fill="#525252"/></svg>\n'],
  ['src/content/posts/en/route-fixture.mdx', `---\ntitle: Route fixture\ndescription: Synthetic route test.\npublishedAt: 2026-01-01\nlocale: en\nauthors: [fixture-author]\ntranslationKey: route-fixture\n---\n\nPublished **MDX** fixture.\n`],
  ['src/content/posts/es/ruta-fixture.mdx', `---\ntitle: Prueba de ruta\ndescription: Prueba sintética.\npublishedAt: 2026-01-01\nlocale: es\nauthors: [fixture-author]\ntranslationKey: route-fixture\n---\n\nContenido **MDX** publicado.\n`],
  ['src/content/posts/en/english-only-fixture.mdx', `---\ntitle: English only fixture\ndescription: Fallback test.\npublishedAt: 2026-01-02\nlocale: en\nauthors: [fixture-author]\n---\n\nEnglish fallback fixture.\n`],
  ['src/content/pages/en/page-fixture.mdx', `---\ntitle: Page fixture\ndescription: Synthetic page test.\nlocale: en\nauthors: [fixture-author]\n---\n\nPublished **page** fixture.\n`],
  ['src/content/posts/en/draft-fixture.mdx', `---\ntitle: Draft fixture\ndescription: Exclusion test.\npublishedAt: 2026-01-01\nlocale: en\nauthors: [sample]\ndraft: true\n---\n\nThis must stay unpublished.\n`],
]);

function build() {
  return spawnSync(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build'], {
    cwd: root, encoding: 'utf8', timeout: 120_000,
  });
}
function page(path) { return readFileSync(join(root, 'dist', path, 'index.html'), 'utf8'); }

try {
  for (const [path, body] of fixtures) {
    const target = join(root, path);
    assert(!existsSync(target), `Refusing to replace ${path}`);
    mkdirSync(join(target, '..'), { recursive: true });
    writeFileSync(target, body, { flag: 'wx' });
  }
  const result = build();
  assert.equal(result.status, 0, `fixture build failed:\n${result.stdout}\n${result.stderr}`);
  assert.match(page('en/blog/route-fixture'), /Published <strong>MDX<\/strong> fixture/);
  assert.match(page('es/blog/ruta-fixture'), /Contenido <strong>MDX<\/strong> publicado/);
  assert.match(page('en/blog/route-fixture'), /value="\/es\/blog\/ruta-fixture\/"/);
  assert.match(page('en/pages/page-fixture'), /value="\/es\/"/);
  assert.match(page('en/pages/page-fixture'), /No translation; opens the home page/);
  assert.match(page('en/blog'), /Route fixture/);
  assert.match(page('en/pages'), /Page fixture/);
  assert.match(page('en'), /Route fixture/);
  assert.match(page('en'), /Page fixture/);
  assert.match(page('en'), /href="\/en\/authors\/"[^>]*><span>Authors<\/span>/);
  assert.match(page('es'), /href="\/es\/authors\/"[^>]*><span>Autores<\/span>/);
  assert.match(page('en/authors'), /Fixture Author/);
  assert.match(page('es/authors'), /Fixture Author/);
  assert.match(page('en/authors'), /src="\/authors\/fixture\.svg"/);
  assert.match(page('en/authors'), /href="https:\/\/example\.org"[^>]*>Portfolio<\/a>/);
  assert.match(page('en/authors'), /Adrian Marquina/);
  assert.match(page('es/authors'), /Adrian Marquina/);
  assert.doesNotMatch(page('en/authors'), /Example Author \(sample\)/);
  assert.match(page('en/authors/adrian-marquina'), /Adrian Marquina/);
  assert.match(page('es/authors/adrian-marquina'), /Adrian Marquina/);
  assert.doesNotMatch(page('en/authors/adrian-marquina'), /class="author-avatar/);
  assert(!existsSync(join(root, 'dist/en/authors/sample/index.html')));
  assert.match(page('en/authors/fixture-author'), /href="\/en\/blog\/route-fixture\/"/);
  assert.match(page('en/authors/fixture-author'), /src="\/authors\/fixture\.svg"/);
  assert.match(page('en/authors/fixture-author'), /href="https:\/\/example\.org"[^>]*>Portfolio<\/a>/);
  assert.match(page('es/authors/fixture-author'), /href="\/es\/blog\/ruta-fixture\/"/);
  assert.match(page('es/authors/fixture-author'), /href="\/en\/blog\/english-only-fixture\/"/);
  assert.doesNotMatch(page('es/authors/fixture-author'), /href="\/en\/blog\/route-fixture\/"/);
  assert.match(page('es/authors/fixture-author'), /href="\/en\/pages\/page-fixture\/"/);
  assert.match(page('en/authors/fixture-author'), /value="\/es\/authors\/fixture-author\/"/);
  assert.match(page('en/blog/route-fixture'), /href="\/en\/authors\/"[^>]*>Authors<\/a>/);
  assert.doesNotMatch(page('en'), /Curious work|Find your way in|first piece is still/);
  assert.doesNotMatch(page('en/tools'), /word-counter|Word counter/);
  assert(!existsSync(join(root, 'dist/en/tools/word-counter/index.html')));
  assert(!existsSync(join(root, 'dist/en/blog/draft-fixture/index.html')));
  assert.doesNotMatch(page('en/blog'), /Draft fixture/);
  assert.doesNotMatch(page('en'), /Draft fixture/);
  console.log('Static fixture build: published MDX post/page, author routes, counterpart, home fallback, and draft exclusion passed.');
  const invalid = join(root, 'src/content/posts/en/invalid-author-fixture.mdx');
  assert(!existsSync(invalid), 'Refusing to replace invalid author fixture');
  fixtures.set('src/content/posts/en/invalid-author-fixture.mdx', '---\ntitle: Invalid author fixture\ndescription: Validation test.\npublishedAt: 2026-01-01\nlocale: en\nauthors: [missing-fixture-author]\n---\n\nInvalid reference.\n');
  writeFileSync(invalid, fixtures.get('src/content/posts/en/invalid-author-fixture.mdx'), { flag: 'wx' });
  const rejected = build();
  assert.notEqual(rejected.status, 0, 'Build accepted a missing author reference');
  assert.match(`${rejected.stdout}\n${rejected.stderr}`, /missing-fixture-author|unknown author/);
  console.log('Static fixture build: missing author reference rejected.');
} finally {
  for (const path of fixtures.keys()) {
    const target = join(root, path);
    if (existsSync(target)) unlinkSync(target);
  }
}
