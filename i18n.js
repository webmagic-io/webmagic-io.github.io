// i18n Language Configuration
const translations = {
    zh: {
        // Navigation
        nav: {
            features: "特性",
            quickstart: "快速开始",
            docs: "文档",
            github: "GitHub"
        },
        
        // Hero Section
        hero: {
            title: "灵活的Java爬虫框架",
            subtitle: "WebMagic是一个简单灵活的爬虫框架，涵盖爬虫的整个生命周期：下载、URL管理、内容提取和持久化",
            quickstart: "快速开始",
            viewSource: "查看源码"
        },
        
        // Features Section
        features: {
            title: "核心特性",
            simple: {
                title: "简单易用",
                desc: "提供简洁的API，快速上手，几行代码即可构建强大的爬虫程序"
            },
            flexible: {
                title: "高度灵活",
                desc: "模块化设计，易于扩展，支持自定义下载器、处理器和管道"
            },
            multithread: {
                title: "多线程支持",
                desc: "内置多线程支持，提高爬取效率，支持分布式部署"
            },
            annotation: {
                title: "注解驱动",
                desc: "支持注解方式配置POJO爬虫，让代码更加简洁优雅"
            },
            extraction: {
                title: "强大提取",
                desc: "支持XPath、CSS选择器、正则表达式等多种内容提取方式"
            },
            integration: {
                title: "易于集成",
                desc: "提供多种数据持久化方案"
            }
        },
        
        // Quick Start Section
        quickstart: {
            title: "快速开始",
            step1: "1. 添加Maven依赖",
            step2: "2. 编写PageProcessor",
            step3: "3. 启动爬虫"
        },
        
        // Docs Section
        docs: {
            title: "文档与资源",
            chineseDocs: {
                title: "📚 中文文档",
                desc: "完整的中文使用指南和API文档",
                link: "查看文档"
            },
            englishDocs: {
                title: "📖 English Docs",
                desc: "Complete English documentation and guides",
                link: "View Docs"
            },
            javadoc: {
                title: "🔍 JavaDoc",
                desc: "详细的API参考文档",
                link: "API文档"
            },
            community: {
                title: "💬 社区支持",
                desc: "GitHub Issues 和 QQ群讨论",
                link: "提交问题"
            }
        },
        
        // Footer
        footer: {
            description: "开源的Java爬虫框架",
            project: "项目",
            documentation: "文档",
            community: "社区",
            github: "GitHub",
            chineseDocs: "中文文档",
            english: "English",
            issues: "Issues",
            qqGroup: "QQ群",
            copyright: "© 2024 WebMagic. Licensed under Apache 2.0"
        }
    },
    
    en: {
        // Navigation
        nav: {
            features: "Features",
            quickstart: "Quick Start",
            docs: "Docs",
            github: "GitHub"
        },
        
        // Hero Section
        hero: {
            title: "Flexible Java Web Crawler Framework",
            subtitle: "WebMagic is a scalable crawler framework that covers the whole lifecycle of crawler: downloading, url management, content extraction and persistent",
            quickstart: "Quick Start",
            viewSource: "View Source"
        },
        
        // Features Section
        features: {
            title: "Core Features",
            simple: {
                title: "Simple & Easy",
                desc: "Simple core with high flexibility. Build powerful crawlers with just a few lines of code"
            },
            flexible: {
                title: "Highly Flexible",
                desc: "Modular design for easy extension. Support custom downloaders, processors and pipelines"
            },
            multithread: {
                title: "Multi-thread Support",
                desc: "Built-in multi-threading support for better performance and distributed deployment"
            },
            annotation: {
                title: "Annotation Driven",
                desc: "Annotation-based POJO crawler configuration for cleaner and more elegant code"
            },
            extraction: {
                title: "Powerful Extraction",
                desc: "Support XPath, CSS selectors, regex and more for content extraction"
            },
            integration: {
                title: "Easy Integration",
                desc: "multiple data persistence solutions"
            }
        },
        
        // Quick Start Section
        quickstart: {
            title: "Quick Start",
            step1: "1. Add Maven Dependency",
            step2: "2. Write PageProcessor",
            step3: "3. Start Spider"
        },
        
        // Docs Section
        docs: {
            title: "Documentation & Resources",
            chineseDocs: {
                title: "📚 中文文档",
                desc: "Complete Chinese documentation and API reference",
                link: "View Docs"
            },
            englishDocs: {
                title: "📖 English Docs",
                desc: "Complete English documentation and guides",
                link: "View Docs"
            },
            javadoc: {
                title: "🔍 JavaDoc",
                desc: "Detailed API reference documentation",
                link: "API Docs"
            },
            community: {
                title: "💬 Community Support",
                desc: "GitHub Issues and community discussions",
                link: "Submit Issues"
            }
        },
        
        // Footer
        footer: {
            description: "Open source Java web crawler framework",
            project: "Project",
            documentation: "Documentation",
            community: "Community",
            github: "GitHub",
            chineseDocs: "Chinese Docs",
            english: "English",
            issues: "Issues",
            qqGroup: "QQ Group",
            copyright: "© 2024 WebMagic. Licensed under Apache 2.0"
        }
    }
};

// Logger Class
class Logger {
    constructor() {
        this.logs = [];
        this.maxLogs = 1000;
        this.logLevels = {
            ERROR: 0,
            WARN: 1,
            INFO: 2,
            DEBUG: 3
        };
        this.currentLevel = this.logLevels.INFO;
    }
    
    log(level, message, data = null) {
        if (this.logLevels[level] <= this.currentLevel) {
            const timestamp = new Date().toISOString();
            const logEntry = {
                timestamp,
                level,
                message,
                data,
                url: window.location.href,
                userAgent: navigator.userAgent
            };
            
            this.logs.push(logEntry);
            
            // Keep only the latest logs
            if (this.logs.length > this.maxLogs) {
                this.logs = this.logs.slice(-this.maxLogs);
            }
            
            // Console output
            const consoleMessage = `[${timestamp}] ${level}: ${message}`;
            switch(level) {
                case 'ERROR':
                    console.error(consoleMessage, data);
                    break;
                case 'WARN':
                    console.warn(consoleMessage, data);
                    break;
                case 'INFO':
                    console.info(consoleMessage, data);
                    break;
                case 'DEBUG':
                    console.debug(consoleMessage, data);
                    break;
                default:
                    console.log(consoleMessage, data);
            }
        }
    }
    
    error(message, data) { this.log('ERROR', message, data); }
    warn(message, data) { this.log('WARN', message, data); }
    info(message, data) { this.log('INFO', message, data); }
    debug(message, data) { this.log('DEBUG', message, data); }
    
    getLogs() { return this.logs; }
    
    exportLogs() {
        const logsJson = JSON.stringify(this.logs, null, 2);
        const blob = new Blob([logsJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `webmagic-logs-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    setLevel(level) {
        if (this.logLevels.hasOwnProperty(level)) {
            this.currentLevel = this.logLevels[level];
            this.info(`Log level set to ${level}`);
        }
    }
}

// i18n Class
class I18n {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.translations = translations;
        this.logger = new Logger();
        this.logger.info('I18n system initialized', { language: this.currentLang });
    }
    
    detectLanguage() {
        // Check localStorage first
        const savedLang = localStorage.getItem('webmagic-lang');
        if (savedLang && ['zh', 'en'].includes(savedLang)) {
            return savedLang;
        }
        
        // Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) {
            return 'zh';
        }
        
        return 'en'; // Default to English
    }
    
    setLanguage(lang) {
        if (!this.translations[lang]) {
            this.logger.error(`Language ${lang} not supported`);
            return false;
        }
        
        this.currentLang = lang;
        localStorage.setItem('webmagic-lang', lang);
        this.logger.info(`Language changed to ${lang}`);
        this.updateDOM();
        return true;
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (value && typeof value === 'object' && value.hasOwnProperty(k)) {
                value = value[k];
            } else {
                this.logger.warn(`Translation key not found: ${key}`);
                return key;
            }
        }
        
        return value || key;
    }
    
    updateDOM() {
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';
        
        // Update page title and meta description
        document.title = this.currentLang === 'zh' 
            ? 'WebMagic - 灵活的Java爬虫框架' 
            : 'WebMagic - Flexible Java Web Crawler Framework';
            
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = this.currentLang === 'zh'
                ? 'WebMagic是一个简单灵活的Java爬虫框架，支持多线程、分布式爬虫，提供简洁的API和强大的扩展能力'
                : 'WebMagic is a scalable Java web crawler framework with simple core, high flexibility, multi-threading support and easy integration capabilities';
        }
            
        // Update language toggle button
        const langToggle = document.querySelector('.lang-toggle');
        if (langToggle) {
            langToggle.textContent = this.currentLang === 'zh' ? 'EN' : '中文';
        }
        
        this.logger.info('DOM updated for language change', {
            newLanguage: this.currentLang,
            title: document.title
        });
    }
    
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }
}

// Global instances
const logger = new Logger();
const i18n = new I18n();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { I18n, Logger, i18n, logger };
} else {
    window.i18n = i18n;
    window.logger = logger;
}