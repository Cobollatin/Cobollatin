<script lang="ts">
  import { formatDate } from '$lib/utils/date/date.utils';
  import { Tag, Tile } from 'carbon-components-svelte';
  import { Calendar, Clock, User } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    date: Date;
    author: string;
    readTime?: number;
    tags?: string[];
    imageUrl?: string;
    children?: Snippet;
  };

  const { title, date, author, readTime, tags = [], imageUrl, children }: Props = $props();
  const formattedDate = $derived(formatDate(date));
</script>

<Tile
  class="group mx-auto max-w-4xl transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:transform hover:shadow-lg"
>
  {#if imageUrl}
    <div class="mb-4 overflow-hidden rounded-lg">
      <img
        src={imageUrl}
        alt={title}
        class="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  {/if}

  <article class="space-y-4">
    <header class="space-y-3">
      <h1 class="text-3xl leading-tight font-bold">
        {title}
      </h1>

      <div class="flex flex-wrap items-center gap-4 text-sm">
        <div class="flex items-center gap-1">
          <User size={16} />
          <span>{author}</span>
        </div>

        <div class="flex items-center gap-1">
          <Calendar size={16} />
          <time datetime={date.toISOString()}>{formattedDate}</time>
        </div>

        {#if readTime}
          <div class="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime} min read</span>
          </div>
        {/if}
      </div>

      {#if tags.length > 0}
        <div class="flex flex-wrap gap-2">
          {#each tags as tag (tag)}
            <Tag type="gray" size="sm" class="cursor-pointer transition-colors hover:bg-gray-200">
              {tag}
            </Tag>
          {/each}
        </div>
      {/if}
    </header>

    <div class="max-w-none">
      <div>
        {#if children}
          {@render children()}
        {:else}
          <p>This is a placeholder for the blog post content. Replace this with the actual content of the blog post.</p>
        {/if}
      </div>
    </div>
  </article>
</Tile>
