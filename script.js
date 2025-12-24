document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('colorscheme-dark')) {
            body.classList.replace('colorscheme-dark', 'colorscheme-light');
            localStorage.setItem('theme', 'colorscheme-light');
            updateIcon('colorscheme-light');
        } else {
            body.classList.replace('colorscheme-light', 'colorscheme-dark');
            localStorage.setItem('theme', 'colorscheme-dark');
            updateIcon('colorscheme-dark');
        }
    });

    function updateIcon(theme) {
        if (theme === 'colorscheme-light') {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    const startYear = 2025;
    const currentYear = new Date().getFullYear();

    const displayYear = (currentYear > startYear) 
        ? `${startYear}–${currentYear}` 
        : `${startYear}`;

    document.getElementById("copyright-year").textContent = displayYear;
});