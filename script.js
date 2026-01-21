/**
 * THEME MANAGEMENT
 * Handles dark mode toggle and persistence via localStorage.
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
    updateToggleUI();
}

function updateToggleUI() {
    const buttons = document.querySelectorAll('.toggle-btn');
    const isDark = document.body.classList.contains('dark');

    buttons.forEach(btn => {
        // Accessibility: Adding aria-label for screen readers
        btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
}

/**
 * FOOTER DATE
 * Automatically updates the copyright year across all pages using a class selector.
 */
function setAutoYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
}

/**
 * UX ENHANCEMENT: SCROLL MONITOR
 * Shows/Hides a 'Back to Top' button or adds header shadow on scroll.
 */
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled-shadow');
    } else {
        header.classList.remove('scrolled-shadow');
    }
}

/**
 * INITIALIZATION
 * Runs when the script loads to set the environment.
 */
(function init() {
    // 1. Load Theme
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
    updateToggleUI();

    // 2. Set Year
    setAutoYear();

    // 3. Add Event Listeners
    window.addEventListener('scroll', handleScroll);

    // 4. Smooth Scrolling for internal links (UX Focus)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
})();