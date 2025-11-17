import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Определяем base path для GitHub Pages
// Если репозиторий называется username.github.io, используйте '/'
// Если репозиторий называется иначе (например, 'landing'), используйте '/landing/'
const getBase = () => {
  if (process.env.GITHUB_PAGES) {
    // Можно задать через переменную окружения REPO_NAME
    const repoName = process.env.REPO_NAME || 'landing'
    return `/${repoName}/`
  }
  return '/'
}

export default defineConfig({
  plugins: [react()],
  base: getBase(),
  server: {
    port: 5173,
    hmr: {
      overlay: true
    }
  },
  optimizeDeps: {
    force: true
  }
})
