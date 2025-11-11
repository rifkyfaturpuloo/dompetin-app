/**
 * Theme Management
 * Handles dark/light mode toggle and system preference detection
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('i');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    const html = document.documentElement;

    // Set theme based on user preference or system preference
    function setTheme(theme) {
        // Set the theme attribute on the html element
        html.setAttribute('data-theme', theme);
        
        // Save the theme preference to localStorage
        localStorage.setItem('theme', theme);
        
        // Update the theme toggle icon
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                themeToggle.setAttribute('aria-label', 'Switch to light mode');
                themeToggle.setAttribute('title', 'Switch to light mode');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                themeToggle.setAttribute('aria-label', 'Switch to dark mode');
                themeToggle.setAttribute('title', 'Switch to dark mode');
            }
        }
        
        // Dispatch a custom event for other scripts to listen to
        document.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
    }

    // Toggle between dark and light theme
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        
        // Show a brief feedback for screen readers
        const status = document.createElement('div');
        status.setAttribute('role', 'status');
        status.className = 'sr-only';
        status.textContent = `Switched to ${newTheme} mode`;
        document.body.appendChild(status);
        
        // Remove the status message after a short delay
        setTimeout(() => {
            status.remove();
        }, 2000);
    }

    // Initialize theme
    function initTheme() {
        // Check for saved theme preference, if none, use system preference
        if (currentTheme) {
            setTheme(currentTheme);
        } else if (prefersDarkScheme.matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        
        // Add event listener for theme toggle if it exists
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
            
            // Add keyboard support
            themeToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTheme();
                }
            });
        }
    }

    // Listen for system theme changes
    function handleSystemThemeChange(e) {
        // Only update if user hasn't set a preference
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    }
    
    // Initialize theme
    initTheme();
    
    // Add event listener for system theme changes
    prefersDarkScheme.addEventListener('change', handleSystemThemeChange);
    
    // Make functions available globally if needed
    window.toggleTheme = toggleTheme;
    window.setTheme = setTheme;
    
    // Add a class to the body when JS is loaded to prevent FOUC (Flash of Unstyled Content)
    document.body.classList.add('js-loaded');
});

// Add a class to the html element when JavaScript is enabled
// This helps with progressive enhancement
document.documentElement.classList.add('js-enabled');
