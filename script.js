// Global variables
let currentI18n = null;
let currentLogger = null;

// Initialize i18n and logger when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for i18n.js to load
    if (typeof i18n !== 'undefined' && typeof logger !== 'undefined') {
        currentI18n = i18n;
        currentLogger = logger;
        
        // Initialize i18n
        currentI18n.updateDOM();
        currentLogger.info('Website initialized with i18n support');
        
        // Log page load
        currentLogger.info('Page loaded', {
            url: window.location.href,
            language: currentI18n.getCurrentLanguage(),
            timestamp: new Date().toISOString()
        });
    }
});

// Language toggle function
function toggleLanguage() {
    if (!currentI18n) return;
    
    const currentLang = currentI18n.getCurrentLanguage();
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    
    currentI18n.setLanguage(newLang);
    currentLogger.info(`Language switched from ${currentLang} to ${newLang}`);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Log navigation
            if (currentLogger) {
                currentLogger.info('Navigation clicked', {
                    target: this.getAttribute('href'),
                    text: this.textContent
                });
            }
        }
    });
});

// Header background opacity on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and doc cards for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .doc-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Helper function to extract clean code text from highlighted HTML
function getCleanCodeText(codeElement) {
    // Create a temporary element to process the code
    const temp = document.createElement('div');
    temp.innerHTML = codeElement.innerHTML;
    
    // Remove all syntax highlighting spans but keep their text content
    const spans = temp.querySelectorAll('span');
    spans.forEach(span => {
        const textNode = document.createTextNode(span.textContent);
        span.parentNode.replaceChild(textNode, span);
    });
    
    return temp.textContent || temp.innerText || '';
}

// Copy code functionality
document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '📋';
        copyButton.className = 'copy-button';
        copyButton.style.cssText = `
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: #e2e8f0;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.2s;
        `;
        
        copyButton.addEventListener('mouseenter', () => {
            copyButton.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        copyButton.addEventListener('mouseleave', () => {
            copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        copyButton.addEventListener('click', () => {
            // Get clean text content without syntax highlighting spans
            const code = getCleanCodeText(block.querySelector('code'));
            navigator.clipboard.writeText(code).then(() => {
                copyButton.innerHTML = '✓';
                copyButton.style.background = 'rgba(80, 250, 123, 0.2)';
                setTimeout(() => {
                    copyButton.innerHTML = '📋';
                    copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
                }, 2000);
                
                // Log copy action
                if (currentLogger) {
                    currentLogger.info('Code copied to clipboard', {
                        codeLength: code.length,
                        codePreview: code.substring(0, 50) + '...',
                        hasHighlighting: block.querySelector('.keyword') !== null
                    });
                }
            }).catch(err => {
                copyButton.innerHTML = '❌';
                copyButton.style.background = 'rgba(255, 121, 198, 0.2)';
                setTimeout(() => {
                    copyButton.innerHTML = '📋';
                    copyButton.style.background = 'rgba(255, 255, 255, 0.1)';
                }, 2000);
                
                if (currentLogger) {
                    currentLogger.error('Failed to copy code', err);
                }
            });
        });
        
        block.style.position = 'relative';
        block.appendChild(copyButton);
    });
});

// Mobile menu toggle function
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    navLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
    
    // Log mobile menu action
    if (currentLogger) {
        currentLogger.info('Mobile menu toggled', {
            isOpen: navLinks.classList.contains('active')
        });
    }
}

// Close mobile menu when clicking on a nav link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.getElementById('navLinks');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (toggleButton) {
                    toggleButton.classList.remove('active');
                }
                
                if (currentLogger) {
                    currentLogger.info('Mobile menu closed via navigation link');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideNav = e.target.closest('.nav-container');
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (toggleButton) {
                toggleButton.classList.remove('active');
            }
            
            if (currentLogger) {
                currentLogger.info('Mobile menu closed via outside click');
            }
        }
    });
});

// Performance optimization: Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu if window is resized to desktop size
        if (window.innerWidth > 768) {
            const navMenu = document.getElementById('navLinks');
            const toggleButton = document.querySelector('.mobile-menu-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (toggleButton) {
                    toggleButton.classList.remove('active');
                }
            }
        }
    }, 250);
});

// Add some interactive effects to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
    });
    
    btn.addEventListener('click', () => {
        // Log button clicks
        if (currentLogger) {
            currentLogger.info('Button clicked', {
                buttonText: btn.textContent,
                buttonHref: btn.href || 'no-href',
                buttonClass: btn.className
            });
        }
    });
});

// Add debug console functions
if (typeof window !== 'undefined') {
    window.webmagicDebug = {
        getLogs: () => currentLogger ? currentLogger.getLogs() : [],
        exportLogs: () => currentLogger ? currentLogger.exportLogs() : console.log('Logger not available'),
        setLogLevel: (level) => currentLogger ? currentLogger.setLevel(level) : console.log('Logger not available'),
        getCurrentLanguage: () => currentI18n ? currentI18n.getCurrentLanguage() : 'Unknown',
        switchLanguage: (lang) => currentI18n ? currentI18n.setLanguage(lang) : console.log('i18n not available')
    };
    
    console.log('WebMagic Debug Functions Available:');
    console.log('- webmagicDebug.getLogs()');
    console.log('- webmagicDebug.exportLogs()');
    console.log('- webmagicDebug.setLogLevel("DEBUG"|"INFO"|"WARN"|"ERROR")');
    console.log('- webmagicDebug.getCurrentLanguage()');
    console.log('- webmagicDebug.switchLanguage("zh"|"en")');
}

// Lazy loading for better performance
if ('IntersectionObserver' in window) {
    const lazyElements = document.querySelectorAll('[data-lazy]');
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.src = element.dataset.lazy;
                element.removeAttribute('data-lazy');
                lazyObserver.unobserve(element);
            }
        });
    });
    
    lazyElements.forEach(element => {
        lazyObserver.observe(element);
    });
}