# Инструкция по деплою на Cloudflare Pages

## Автоматический деплой через GitHub

### 1. Подключение репозитория к Cloudflare Pages

1. Войдите в [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Перейдите в раздел "Pages"
3. Нажмите "Connect to Git"
4. Выберите ваш GitHub репозиторий
5. Настройте параметры сборки:
   - **Build command:** `hugo --minify`
   - **Build output directory:** `public`
   - **Root directory:** (оставить пустым)

### 2. Переменные окружения

В настройках проекта в Cloudflare Pages добавьте:
- `HUGO_VERSION`: `0.120.4`
- `HUGO_EXTENDED`: `true`

### 3. Пользовательский домен (опционально)

В настройках проекта можете добавить свой домен:
1. Перейдите в "Custom domains"
2. Добавьте ваш домен
3. Настройте DNS записи согласно инструкциям

## Альтернативный способ через GitHub Actions

Если хотите использовать GitHub Actions (файл уже создан в `.github/workflows/deploy.yml`):

### 1. Получите токены API

В Cloudflare Dashboard:
1. Перейдите в "My Profile" → "API Tokens"
2. Создайте токен с правами:
   - Zone: Zone Settings: Read
   - Zone: Zone: Read
   - Account: Cloudflare Pages: Edit

### 2. Настройте секреты в GitHub

В настройках репозитория GitHub добавьте секреты:
- `CLOUDFLARE_API_TOKEN`: полученный API токен
- `CLOUDFLARE_ACCOUNT_ID`: ID аккаунта из Cloudflare Dashboard

## Приватный доступ

Сайт поддерживает два способа доступа к приватной информации:

### 1. Пароль на странице
- Пароль: `apartment2024`
- Можно изменить в файле `themes/apartment/static/js/script.js`

### 2. Специальная ссылка
- URL: `https://your-domain.com/private`
- Автоматически перенаправляет на страницу с открытой приватной информацией

## Настройка контента

### Изображения
- Добавьте фотографии в папку `static/images/`
- Следуйте именованию из `static/images/README.md`

### Изменение информации
- Основная информация: `content/_index.md`
- Галерея: `content/gallery.md`
- Планировка и приватная информация: `content/layout.md`
- Настройки сайта: `hugo.toml`

## Домен по умолчанию

После деплоя сайт будет доступен по адресу:
`https://apartment-showcase.pages.dev`

Или по вашему кастомному домену, если настроите его в Cloudflare Pages.