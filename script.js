document.addEventListener('DOMContentLoaded', () => {
    const translateBtn = document.getElementById('translate-btn');
    let currentLang = 'en'; // 默认语言为英文

    translateBtn.addEventListener('click', () => {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(el => {
            if (currentLang === 'en') {
                el.textContent = el.getAttribute('data-cn'); // 切换到中文
            } else {
                el.textContent = el.getAttribute('data-en'); // 切换到英文
            }
        });

        // 切换当前语言
        currentLang = currentLang === 'en' ? 'cn' : 'en';
    });
});
