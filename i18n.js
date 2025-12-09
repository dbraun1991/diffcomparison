// i18n.js - Internationalization System

const i18n = {
    currentLang: 'en',
    translations: {},

    init: function() {
        // Load translations from translations.js
        if (typeof TRANSLATIONS !== 'undefined') {
            this.translations = TRANSLATIONS;
        }

        // Load saved language preference or detect browser language
        const savedLang = localStorage.getItem('preferred_language');
        const browserLang = navigator.language.split('-')[0];
        
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }

        // Apply translations on page load
        this.translatePage();
        this.updateLanguageSwitcher();
    },

    changeLanguage: function(langCode) {
        if (!this.translations[langCode]) {
            console.error(`Language ${langCode} not found`);
            return;
        }

        this.currentLang = langCode;
        localStorage.setItem('preferred_language', langCode);
        
        // Translate the page
        this.translatePage();
        this.updateLanguageSwitcher();

        // Track language change
        const sessionId = sessionStorage.getItem('session_uuid');
        if (sessionId) {
            const pixelUrl = `https://backendcontent.d-braun1991.workers.dev/pixel?session=${sessionId}&action=language_change&lang=${langCode}`;
            const img = new Image(1, 1);
            img.src = pixelUrl;
            img.style.display = 'none';
            document.body.appendChild(img);
        }
    },

    translatePage: function() {
        const lang = this.translations[this.currentLang];
        
        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedValue(lang, key);
            
            if (translation) {
                element.textContent = translation;
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getNestedValue(lang, key);
            
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Translate titles/tooltips
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = this.getNestedValue(lang, key);
            
            if (translation) {
                element.title = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    },

    getNestedValue: function(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    },

    updateLanguageSwitcher: function() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}

// Setup language switcher event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            i18n.changeLanguage(lang);
        });
    });
});