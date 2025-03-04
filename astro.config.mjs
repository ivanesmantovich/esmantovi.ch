// @ts-check
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true,
  },
  experimental: {
    svg: true,
  },
})
