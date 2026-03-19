import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  // 開発バーをプロジェクト全体で無効化
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
