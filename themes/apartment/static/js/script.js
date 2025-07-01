// Custom JavaScript for apartment showcase

// Image gallery modal functionality
function showImage(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
}

// Private access functionality
function checkPrivateAccess() {
    const password = document.getElementById('privatePassword').value;
    const correctPassword = 'apartment2024'; // В реальном проекте это должно быть на сервере
    
    if (password === correctPassword) {
        document.querySelector('.private-access').style.display = 'none';
        document.querySelector('.private-content').style.display = 'block';
        
        // Сохраняем в sessionStorage для текущей сессии
        sessionStorage.setItem('privateAccess', 'granted');
        
        return false; // Предотвращаем отправку формы
    } else {
        alert('Неверный пароль доступа');
        return false;
    }
}

// Проверяем доступ при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, есть ли доступ к приватной секции
    if (sessionStorage.getItem('privateAccess') === 'granted') {
        const privateAccess = document.querySelector('.private-access');
        const privateContent = document.querySelector('.private-content');
        
        if (privateAccess && privateContent) {
            privateAccess.style.display = 'none';
            privateContent.style.display = 'block';
        }
    }
    
    // Lazy loading для изображений
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Функция для URL-based приватного доступа
function checkUrlAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('access');
    
    if (accessToken === 'private-apartment-view') {
        sessionStorage.setItem('privateAccess', 'granted');
        
        // Удаляем параметр из URL для безопасности
        const url = new URL(window.location);
        url.searchParams.delete('access');
        window.history.replaceState({}, document.title, url);
        
        // Показываем приватный контент
        const privateAccess = document.querySelector('.private-access');
        const privateContent = document.querySelector('.private-content');
        
        if (privateAccess && privateContent) {
            privateAccess.style.display = 'none';
            privateContent.style.display = 'block';
        }
    }
}

// Проверяем URL при загрузке
checkUrlAccess();