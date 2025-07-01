export async function onRequest(context) {
  const { request, env } = context;
  
  // Получаем токен из URL параметров
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  
  // Проверяем токен (в реальном проекте используйте переменную окружения)
  const validToken = 'apartment-secret-2024';
  
  if (token !== validToken) {
    // Если токен неверный, показываем страницу с формой входа
    return new Response(`
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Доступ запрещен</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f8f9fa;
          }
          .auth-box {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 400px;
          }
          h1 {
            color: #333;
            margin-bottom: 1rem;
          }
          p {
            color: #666;
            margin-bottom: 2rem;
          }
          .btn {
            display: inline-block;
            padding: 0.75rem 2rem;
            background-color: #0066cc;
            color: white;
            text-decoration: none;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="auth-box">
          <h1>Доступ запрещен</h1>
          <p>Эта страница доступна только по специальной ссылке. Пожалуйста, обратитесь к владельцу для получения доступа.</p>
          <a href="/" class="btn">На главную</a>
        </div>
      </body>
      </html>
    `, {
      status: 403,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }
  
  // Если токен верный, пропускаем запрос дальше
  return context.next();
}