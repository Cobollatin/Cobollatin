import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import PortfolioItem from './portfolio-item.svelte';

// Mock window.open for testing button clicks that open new tabs
global.window.open = vi.fn();

describe('PortfolioItem', () => {
  const defaultProps = {
    title: 'Test Project Title',
    description: 'A brief description of this amazing test project.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Test+Image',
    projectUrl: 'https://example.com/live-project',
    sourceUrl: 'https://github.com/user/test-project',
    technologies: ['Svelte', 'TypeScript', 'Vitest'],
  };

  afterEach(() => {
    // Clear mock call history after each test
    vi.clearAllMocks();
  });

  it('renders title, description, and image correctly', () => {
    render(PortfolioItem, { props: defaultProps });

    // Title (should be in the header, likely an h3 based on component structure)
    const titleElement = screen.getByText(defaultProps.title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H3'); // Based on current portfolio-item.svelte

    // Description
    const descriptionElement = screen.getByText(defaultProps.description);
    expect(descriptionElement).toBeInTheDocument();

    // Image
    const imageElement = screen.getByAltText(`Project: ${defaultProps.title}`);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', defaultProps.imageUrl);
  });

  it('renders "View Project" button if projectUrl is provided and it opens correct URL', async () => {
    render(PortfolioItem, { props: defaultProps });
    const viewProjectButton = screen.getByRole('button', { name: 'View Project' });
    expect(viewProjectButton).toBeInTheDocument();

    await fireEvent.click(viewProjectButton);
    expect(window.open).toHaveBeenCalledWith(defaultProps.projectUrl, '_blank');
  });

  it('does not render "View Project" button if projectUrl is not provided', () => {
    render(PortfolioItem, { props: { ...defaultProps, projectUrl: undefined } });
    const viewProjectButton = screen.queryByRole('button', { name: 'View Project' });
    expect(viewProjectButton).not.toBeInTheDocument();
  });

  it('renders "View Source" button if sourceUrl is provided and it opens correct URL', async () => {
    render(PortfolioItem, { props: defaultProps });
    const viewSourceButton = screen.getByRole('button', { name: 'View Source' });
    expect(viewSourceButton).toBeInTheDocument();

    await fireEvent.click(viewSourceButton);
    expect(window.open).toHaveBeenCalledWith(defaultProps.sourceUrl, '_blank');
  });

  it('does not render "View Source" button if sourceUrl is not provided', () => {
    render(PortfolioItem, { props: { ...defaultProps, sourceUrl: undefined } });
    const viewSourceButton = screen.queryByRole('button', { name: 'View Source' });
    expect(viewSourceButton).not.toBeInTheDocument();
  });

  it('renders technology tags if technologies array is provided', () => {
    render(PortfolioItem, { props: defaultProps });
    defaultProps.technologies.forEach(tech => {
      const tagElement = screen.getByText(tech);
      expect(tagElement).toBeInTheDocument();
      // Assuming Tag component has 'cds-tag' class from its implementation
      expect(tagElement).toHaveClass('cds-tag');
      expect(tagElement).toHaveClass('cds-tag--blue'); // As per portfolio-item.svelte
    });
  });

  it('does not render technologies container if technologies array is empty', () => {
    const { container } = render(PortfolioItem, { props: { ...defaultProps, technologies: [] } });
    // Assuming the container for tags has class 'technologies-container'
    const techContainer = container.querySelector('.technologies-container');
    expect(techContainer).not.toBeInTheDocument();
  });

  it('renders both buttons if both URLs are provided', () => {
    render(PortfolioItem, { props: defaultProps });
    expect(screen.getByRole('button', { name: 'View Project' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'View Source' })).toBeInTheDocument();
  });
});
