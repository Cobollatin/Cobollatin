module.exports = {
  target: (name, semver) => {
    // Only allow minor updates for tailwind packages
    if (name === 'tailwindcss' || name.startsWith('@tailwindcss/')) {
      return 'minor';
    }

    // Only allow minor updates for storybook packages
    if (name.includes('storybook') || name.startsWith('@storybook/')) {
      return 'minor';
    }

    // Use latest for all other packages
    return 'latest';
  },
};
