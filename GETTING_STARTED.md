# Быстрый старт

## 🚀 Первый запуск

1. **Установите Hugo** (если не установлен):
   ```bash
   # macOS
   brew install hugo
   
   # Linux (Ubuntu/Debian)
   sudo apt install hugo
   ```

2. **Клонируйте репозиторий**:
   ```bash
   git clone <your-repository-url>
   cd <repository-name>
   ```

3. **Запустите локальный сервер**:
   ```bash
   ./scripts/dev.sh
   # или
   hugo server -D
   ```

4. **Откройте сайт**: http://localhost:1313

## 📝 Настройка контента

### Основная информация
Откройте `hugo.toml` и измените:
- `title` - название сайта
- `params.description` - описание квартиры
- `params.author` - ваше имя

### Добавление фотографий
1. Поместите фото в `static/images/`
2. Обновите список в `content/gallery.md`
3. Замените `main-photo.jpg` на главное фото

### Приватная информация
В файле `content/layout.md`:
- Обновите цены, контакты, условия
- Измените пароль в `themes/apartment/static/js/script.js`

## 🌐 Деплой на Cloudflare Pages

### Простой способ:
1. Подключите репозиторий в [Cloudflare Pages](https://pages.cloudflare.com)
2. Настройки сборки:
   - **Build command**: `hugo --minify`
   - **Build output directory**: `public`
3. Переменные окружения:
   - `HUGO_VERSION`: `0.120.4`
   - `HUGO_EXTENDED`: `true`

### Результат:
Сайт будет доступен по адресу: `https://ваш-проект.pages.dev`

## 🔒 Приватный доступ

Два способа доступа к приватной информации:

1. **Пароль на сайте**: `apartment2024`
2. **Прямая ссылка**: `https://ваш-сайт.com/private`

## 📱 Возможности сайта

- ✅ Адаптивный дизайн (мобильные, планшеты, ПК)
- ✅ Фотогалерея с увеличением
- ✅ Приватная секция для цен и контактов
- ✅ SEO оптимизация
- ✅ Быстрая загрузка
- ✅ Автоматический деплой

## 🛠 Скрипты

- `./scripts/dev.sh` - запуск для разработки
- `./scripts/build.sh` - сборка для продакшена

## 📞 Поддержка

Если возникли вопросы:
1. Проверьте [DEPLOYMENT.md](DEPLOYMENT.md) для деталей
2. Посмотрите [README.md](README.md) для полной документации
3. Создайте Issue в репозитории