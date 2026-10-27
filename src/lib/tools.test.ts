import { describe, expect, it } from 'vitest';
import { toolHref, tools, type Tool } from './tools';

describe('tool links', () => {
  it('uses the localized live CorpusLens URL', () => {
    const corpuslens = tools.find((tool) => tool.id === 'corpuslens');
    expect(corpuslens).toBeDefined();
    expect(corpuslens?.authors).toContain('adrian-marquina');
    expect(toolHref(corpuslens!, 'en')).toBe('https://corpuslens.cobollatin.com/en');
    expect(toolHref(corpuslens!, 'es')).toBe('https://corpuslens.cobollatin.com/es');
  });

  it.each([
    ['nash-calculator', 'https://github.com/Cobollatin/Nash-Calculator'],
    ['python-to-mips-compiler', 'https://github.com/Cobollatin/python-to-mips-compiler'],
  ])('links %s to its repository in both locales', (id, url) => {
    const tool = tools.find((entry) => entry.id === id);
    expect(tool).toBeDefined();
    expect(tool?.authors).toContain('adrian-marquina');
    expect(toolHref(tool!, 'en')).toBe(url);
    expect(toolHref(tool!, 'es')).toBe(url);
  });

  it('keeps local routes available for hosted tools', () => {
    const localTool: Tool = { id: 'local', path: 'local', title: { en: 'Local', es: 'Local' } };
    expect(toolHref(localTool, 'es')).toBe('/es/tools/local/');
  });
});
