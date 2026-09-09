const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  root: 'src',
  base: './',
  resolve: {
    preserveSymlinks: true
  },
  build: { outDir: '../dist', emptyOutDir: true }
});
