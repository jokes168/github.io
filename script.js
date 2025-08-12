document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 在點擊導覽連結後，自動收起漢堡選單（適用於行動裝置）
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
});