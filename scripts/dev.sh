#!/bin/bash

# Скрипт для локальной разработки Hugo сайта

echo "🚀 Запуск Hugo сервера для разработки..."

# Проверяем, установлен ли Hugo
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo не установлен. Установите Hugo для продолжения."
    echo "Инструкции: https://gohugo.io/installation/"
    exit 1
fi

# Запускаем Hugo server с live reload
hugo server \
    --buildDrafts \
    --buildFuture \
    --disableFastRender \
    --navigateToChanged \
    --port 1313 \
    --bind 0.0.0.0

echo "🎉 Сайт доступен по адресу: http://localhost:1313"