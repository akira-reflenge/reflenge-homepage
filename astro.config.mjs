import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 開発バーをプロジェクト全体で無効化
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
