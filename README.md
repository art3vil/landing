# Landing (Vite + React + Tailwind)

Лендинг для автоматизации бизнеса через Telegram-ботов и AI агентов.

## Локальная разработка

Требования:
- Node.js (16+ рекомендовано)

Установка и запуск:

```powershell
npm install
npm run dev
```

Открыть в браузере: http://localhost:5173

## Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

### Настройка:

1. **Создайте репозиторий на GitHub** (если ещё не создан)

2. **Включите GitHub Pages в настройках репозитория:**
   - Перейдите в Settings → Pages
   - Source: выберите "GitHub Actions"

3. **Если репозиторий называется `username.github.io`:**
   - Откройте `vite.config.js`
   - Измените `getBase()` чтобы возвращать `'/'` вместо `/${repoName}/`

4. **Закоммитьте и запушьте код:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages"
   git push origin main
   ```

5. **Автоматический деплой:**
   - После каждого push в ветку `main` или `master` автоматически запустится деплой
   - Проверить статус можно в разделе Actions на GitHub
   - После успешного деплоя сайт будет доступен по адресу:
     - `https://username.github.io/landing/` (если репозиторий называется `landing`)
     - `https://username.github.io/` (если репозиторий называется `username.github.io`)

### Ручной запуск деплоя:

Можно запустить деплой вручную через GitHub Actions:
- Перейдите в раздел Actions
- Выберите workflow "Deploy to GitHub Pages"
- Нажмите "Run workflow"
