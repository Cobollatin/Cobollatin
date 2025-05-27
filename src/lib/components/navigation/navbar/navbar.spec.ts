import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Navbar from './navbar.svelte';

describe('Navbar', () => {
  it('renders navigation links correctly', () => {
    const navItems = [
      { text: 'Home', href: '/' },
      { text: 'Blog', href: '/blog' },
      { text: 'Portfolio', href: '/portfolio' },
      { text: 'CV', href: '/cv' },
    ];

    render(Navbar, { navItems });

    navItems.forEach((item) => {
      const linkElement = screen.getByText(item.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', item.href);
    });
  });
});
