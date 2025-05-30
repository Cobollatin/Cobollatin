# Contributing to this Project

First off, thank you for considering contributing! This is a personal portfolio and website, and I welcome contributions in the form of blog posts, feedback, and suggestions.

## Contributing Blog Posts

**I actively welcome blog post contributions!** If you'd like to write a guest post for my website, please follow these guidelines:

### Blog Post Guidelines

- **Topics**: Content should be relevant to web development, programming, technology, or professional insights
- **Quality**: Well-written, original content with proper grammar and structure
- **Length**: Typically 800-2000 words, but quality matters more than length
- **Format**: Svelte component with proper metadata

### How to Submit a Blog Post

1. **Fork the repository** and create a new branch for your blog post
2. **Create your blog post** as a Svelte file in `src/routes/blog/posts/[your-post-slug]/+page.svelte`
3. **Include a page metadata file** at `src/routes/blog/posts/[your-post-slug]/+page.ts`
4. **Follow the existing structure** - look at other posts in the `src/routes/blog/posts/` directory for examples
5. **Include proper frontmatter** (title, date, author, tags, description, etc.) in your metadata file
6. **Submit a pull request** using our PR template
7. **Be patient** - I'll review and provide feedback as time permits

### Technical Requirements

- Use SvelteKit's file-based routing structure
- Include proper TypeScript types if using `.ts` files
- Follow existing component patterns and styling
- Ensure responsive design and accessibility
- Test locally before submitting

## Reporting Issues or Suggesting Enhancements

If you've found a bug, have a suggestion for a new feature, or simply spotted a typo, please let me know by creating an issue on GitHub.

- **Check Existing Issues**: Before creating a new issue, please quickly check if a similar one already exists.
- **Use Issue Templates**: We have templates for bug reports and feature requests. Please use them as they help provide all the necessary information. You can find them when you click the "New Issue" button on the repository's "Issues" tab.
  - [Submit a Bug Report](../../issues/new?template=bug_report.md)
  - [Suggest an Enhancement](../../issues/new?template=feature_request.md)
- **Be Clear and Specific**: Provide a clear and concise description of the issue or suggestion. For bugs, include steps to reproduce if possible.

## How the Site is Built (Optional)

For those interested, this site is built using SvelteKit, TypeScript, and Node.js. Blog posts are created as Svelte components in the `src/routes/blog/posts/` directory using SvelteKit's file-based routing system.

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing to ensure our community remains welcoming and respectful for everyone.

Thank you for your interest in improving this project!
