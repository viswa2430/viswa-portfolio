// Dark mode toggle + persistence
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
    setToggleText();
}

// set toggle button text for all pages
function setToggleText() {
    const buttons = document.querySelectorAll('.toggle-btn');
    const isDark = document.body.classList.contains('dark');
    buttons.forEach(btn => btn.textContent = isDark ? 'Light' : 'Dark');
}

// load saved theme on page load
(function loadTheme() {
    const theme = localStorage.getItem('site-theme');
    if (theme === 'dark') document.body.classList.add('dark');
    setToggleText();
})();

// set year in footers
(function setYears() {
    const y = new Date().getFullYear();
    const ids = ['year', 'year2', 'year3', 'year4'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = y;
    });
})();
