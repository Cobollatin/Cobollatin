import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Footer from './footer.svelte';

describe('Footer', () => {
  it('renders copyright text with current year', () => {
    render(Footer);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${currentYear} Your Name`);
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders social links when provided', () => {
    const socialLinks = [
      { name: 'GitHub', href: 'https://github.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
    ];
    render(Footer, { socialLinks });

    socialLinks.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', link.href);
    });
  });

  it('does not render social links section if no links are provided', () => {
    render(Footer, { socialLinks: [] });
    const listElement = screen.queryByRole('list'); // `ul` element
    expect(listElement).not.toBeInTheDocument();
  });
});
