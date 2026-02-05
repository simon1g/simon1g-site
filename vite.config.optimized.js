import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpg|jpeg|png|tiff|webp|avif)$/i,
      exclude: undefined,
      include: undefined,
      includePublic: true,
      // Optimizations for Cloudflare Pages
      png: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
      gif: {},
    })
  ],
  
  // Build optimizations
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor code for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    
    // Asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    
    // Enable source maps for debugging (remove in production)
    sourcemap: false,
  },
  
  // Server configuration for development
  server: {
    // Enable HTTP/2 in dev
    https: false,
    
    // Optimize HMR
    hmr: {
      overlay: true,
    },
  },
  
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
  
  // Image optimization for Cloudflare Pages
  publicDir: 'public',
  assetsInclude: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
})
