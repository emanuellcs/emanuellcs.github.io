document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sunIcon = document.getElementById('icon-sun');
    const moonIcon = document.getElementById('icon-moon');

    function setShow(el, show) {
        if (!el) return;
        if (show) {
            el.classList.add('show');
            el.classList.remove('hidden');
        } else {
            el.classList.remove('show');
            el.classList.add('hidden');
        }
    }

    function updateIcons(theme) {
        const light = (theme === 'colorscheme-light');
        setShow(sunIcon, !light);
        setShow(moonIcon, light);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateIcons(savedTheme);
    } else {
        updateIcons('colorscheme-dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('colorscheme-dark')) {
                body.classList.replace('colorscheme-dark', 'colorscheme-light');
                localStorage.setItem('theme', 'colorscheme-light');
                updateIcons('colorscheme-light');
            } else {
                body.classList.replace('colorscheme-light', 'colorscheme-dark');
                localStorage.setItem('theme', 'colorscheme-dark');
                updateIcons('colorscheme-dark');
            }
        });
    }

    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const displayYear = (currentYear > startYear) 
        ? `${startYear}–${currentYear}` 
        : `${startYear}`;

    const copyrightElement = document.getElementById("copyright-year");
    if (copyrightElement) {
        copyrightElement.textContent = displayYear;
    }
});