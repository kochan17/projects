// Language switching functionality
function switchLanguage(lang) {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();
    
    // Define page mappings between Japanese and English
    const pageMapping = {
        // Japanese to English
        'index.html': 'index-en.html',
        'sign-in-form.html': 'sign-in-form-en.html',
        'sign-up-form.html': 'sign-up-form-en.html',
        
        // English to Japanese
        'index-en.html': 'index.html',
        'sign-in-form-en.html': 'sign-in-form.html',
        'sign-up-form-en.html': 'sign-up-form.html'
    };
    
    if (lang === 'en') {
        // Switch to English
        if (currentFile in pageMapping && currentFile.includes('-en.html')) {
            // Already on English page, no need to switch
            return;
        } else if (currentFile in pageMapping) {
            window.location.href = pageMapping[currentFile];
        } else {
            // Default to English homepage
            window.location.href = 'index-en.html';
        }
    } else if (lang === 'ja') {
        // Switch to Japanese
        if (currentFile in pageMapping && !currentFile.includes('-en.html')) {
            // Already on Japanese page, no need to switch
            return;
        } else if (currentFile in pageMapping) {
            window.location.href = pageMapping[currentFile];
        } else {
            // Default to Japanese homepage
            window.location.href = 'index.html';
        }
    }
}

// Set current language indicator
function setCurrentLanguage() {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        if (currentFile.includes('-en.html') || currentFile === 'index-en.html') {
            btn.innerHTML = '<i class="fas fa-globe"></i> English <i class="fas fa-angle-down"></i>';
        } else {
            btn.innerHTML = '<i class="fas fa-globe"></i> 日本語 <i class="fas fa-angle-down"></i>';
        }
    });
}

// Initialize language setting on page load
document.addEventListener('DOMContentLoaded', function() {
    setCurrentLanguage();
});

// Export function for global use
window.switchLanguage = switchLanguage; 