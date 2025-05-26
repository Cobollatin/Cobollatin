#!/usr/bin/env node

// This will be deleted when Svelte releases this fix https://github.com/sveltejs/kit/issues/13376

import fs from 'fs';
import path from 'path';

// Path to the file we need to modify
const filePath = path.join(
  process.cwd(),
  'node_modules',
  '@sveltejs',
  'kit',
  'src',
  'exports',
  'vite',
  'index.js'
);

console.log(`Checking for SvelteKit file at: ${filePath}`);

// Check if the file exists
if (!fs.existsSync(filePath)) {
  console.log('SvelteKit file not found. The patch was not applied.');
  process.exit(0);
}

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// Look for the line we need to change
const searchString = 'root: cwd,';
const replaceString = 'root: posixify(cwd),';

// Check if the file already contains the fix
if (content.includes(replaceString)) {
  console.log('The SvelteKit file is already patched.');
  process.exit(0);
}

// Check if the line to change exists
if (!content.includes(searchString)) {
  console.log('The line to patch was not found. Structure may have changed. Please check manually.');
  process.exit(1);
}

// Apply the change
const patchedContent = content.replace(searchString, replaceString);

// Write the file back
fs.writeFileSync(filePath, patchedContent, 'utf8');

console.log('Successfully patched SvelteKit vite/index.js to use posixify(cwd).');