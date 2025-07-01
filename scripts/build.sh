#!/bin/bash

# Скрипт для производственной сборки Hugo сайта

echo "🔨 Начинаем сборку сайта для продакшена..."

# Проверяем, установлен ли Hugo
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo не установлен. Установите Hugo для продолжения."
    echo "Инструкции: https://gohugo.io/installation/"
    exit 1
fi

# Очищаем предыдущую сборку
echo "🧹 Очищаем папку public..."
rm -rf public

# Собираем сайт с минификацией
echo "📦 Собираем сайт с оптимизациями..."
hugo --minify --gc --cleanDestinationDir

# Проверяем результат
if [ $? -eq 0 ]; then
    echo "✅ Сборка завершена успешно!"
    echo "📁 Файлы находятся в папке 'public/'"
    
    # Показываем размер
    echo "📊 Размер собранного сайта:"
    du -sh public/
else
    echo "❌ Ошибка при сборке сайта!"
    exit 1
fi