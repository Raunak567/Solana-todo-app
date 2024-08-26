import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import buffer from 'buffer'; // Import buffer for polyfill

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Provide a polyfill for `buffer` if needed
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
  define: {
    // Define global variables if needed
    'process.env': {},
  },
});
