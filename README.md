# Сайт квартиры на Hugo

Этот проект представляет собой веб-сайт для презентации квартиры на продажу, построенный на Hugo и развертываемый на Cloudflare Pages.

## Особенности

- **Публичная часть**: Общая информация о квартире, фотографии, контакты
- **Приватная часть**: Детальная информация, доступная по специальной ссылке с токеном
- **Автоматический деплой**: При коммите в ветку `main` сайт автоматически обновляется на Cloudflare Pages
- **Современный дизайн**: Адаптивная верстка, красивый интерфейс

## Структура проекта

```
.
├── content/              # Контент сайта
│   ├── about.md         # Страница "О квартире"
│   ├── gallery.md       # Галерея
│   ├── contact.md       # Контакты
│   └── private/         # Приватная секция
├── themes/apartment/     # Тема сайта
├── functions/           # Cloudflare Functions для защиты
├── .github/workflows/   # GitHub Actions для деплоя
└── hugo.toml           # Конфигурация Hugo
```

## Локальная разработка

1. Установите Hugo (версия 0.120.4 или выше):
   ```bash
   # macOS
   brew install hugo

   # Linux
   sudo snap install hugo --channel=extended

   # Или скачайте с https://gohugo.io/
   ```

2. Запустите локальный сервер:
   ```bash
   hugo server -D
   ```

3. Откройте http://localhost:1313 в браузере

## Настройка деплоя на Cloudflare Pages

### 1. Создайте проект на Cloudflare Pages

1. Зайдите в [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Перейдите в Pages
3. Создайте новый проект, подключив GitHub репозиторий

### 2. Настройте переменные окружения в GitHub

В настройках репозитория добавьте секреты:
- `CLOUDFLARE_API_TOKEN` - API токен Cloudflare
- `CLOUDFLARE_ACCOUNT_ID` - ID вашего аккаунта Cloudflare

### 3. Настройте build команды в Cloudflare Pages

- Build command: `hugo --minify`
- Build output directory: `public`
- Environment variables:
  - `HUGO_VERSION`: `0.120.4`

## Использование приватной секции

Приватная секция доступна по адресу `/private/` с добавлением токена в URL:

```
https://your-site.pages.dev/private/?token=apartment-secret-2024
```

Для изменения токена отредактируйте файл `functions/private/[[path]].js`.

## Настройка контента

### Изменение основной информации

Отредактируйте файл `hugo.toml`:
- `baseURL` - адрес вашего сайта
- `title` - заголовок сайта
- `params.description` - описание

### Добавление контента

1. Отредактируйте файлы в папке `content/`
2. Добавьте изображения в `static/images/`
3. Для приватного контента используйте папку `content/private/`

## Безопасность

- Токен для приватной секции хранится в Cloudflare Function
- Рекомендуется использовать переменные окружения для токенов
- Регулярно меняйте токены доступа

## Поддержка

При возникновении вопросов создайте issue в репозитории.
