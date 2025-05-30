<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { formatDate } from '$lib/utils/date/date.utils';
  import { capitalize } from '$lib/utils/string.utils';
  import { Button, ClickableTile, Tag, Tile } from 'carbon-components-svelte';

  type Props = {
    title: string;
    excerpt: string;
    date: Date;
    author: string;
    href: string;
    tags?: string[];
  };

  const { title, excerpt, date, author, href, tags = [] }: Props = $props();
  const formattedDate = $derived(formatDate(date));
</script>

<Tile>
  <ClickableTile {href}>
    {title}
  </ClickableTile>

  <div class="flex flex-col space-y-2">
    <p class="mb-1 text-sm">
      {formattedDate}
    </p>
    <p class="text-base leading-relaxed">
      {excerpt}
    </p>
    <p class="text-sm">
      {capitalize(m['blog:by']())}
      {author}
    </p>

    {#if tags.length > 0}
      <div class="mt-3 flex flex-wrap gap-2">
        {#each tags as tag (tag)}
          <Tag type="gray" size="sm" class="cursor-pointer">
            {tag}
          </Tag>
        {/each}
      </div>
    {/if}
  </div>

  <div class="mt-4 flex justify-end">
    <Button
      kind="primary"
      {href}
      aria-label={capitalize(m['blog:Read more about']()) + ` ${title}`}
      title={capitalize(m['blog:Read more about']()) + ` ${title}`}>{capitalize(m['blog:Read more']())}</Button
    >
  </div>
</Tile>
