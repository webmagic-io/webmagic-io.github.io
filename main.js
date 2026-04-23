const translations = {
  zh: {
    nav: {
      features: "特性",
      architecture: "架构",
      quickstart: "快速开始",
      resources: "资源",
      api: "API",
      github: "GitHub"
    },
    common: {
      copy: "Copy",
      copied: "Copied"
    },
    hero: {
      meta: {
        status: "Status · Operational",
        build: "Last build · stable"
      },
      titleLine1: "抓取即",
      titleLine2: "魔法",
      descriptionPrefix: "一个灵活、可扩展的 Java 爬虫框架。覆盖下载、URL 管理、内容抽取与持久化的完整生命周期，",
      descriptionEmphasis: "几行代码，一个爬虫。",
      primaryCta: "快速开始",
      secondaryCta: "查看源码 ↗",
      windowTitle: "crawl · live"
    },
    stats: {
      stars: "Stars",
      forks: "Forks",
      contributors: "Contributors",
      license: "License"
    },
    features: {
      title: "核心特性",
      items: {
        simple: {
          title: "简单易用",
          desc: "链式 API，十几行代码就能构建一个可工作的爬虫。"
        },
        flexible: {
          title: "高度灵活",
          desc: "四大组件彼此独立，任一层都可以替换、扩展与测试。"
        },
        thread: {
          title: "多线程与分布式",
          desc: "内置线程池；切换 Redis Scheduler 即可扩展为分布式抓取。"
        },
        annotation: {
          title: "注解驱动",
          desc: "@TargetUrl、@ExtractBy 让 POJO 既是模型也是爬虫描述。"
        },
        extract: {
          title: "强大提取",
          desc: "XPath、CSS、正则、JsonPath 可组合使用，适应复杂页面结构。"
        },
        integration: {
          title: "易于集成",
          desc: "结果可以流向 Console、文件、MySQL、Redis 或自定义 Pipeline。"
        }
      }
    },
    architecture: {
      title: "架构一览"
    },
    quickstart: {
      title: "快速开始"
    },
    resources: {
      title: "资源与生态",
      items: {
        zh: {
          title: "中文文档",
          desc: "完整的中文使用指南、概念说明与分章节教程。",
          link: "查看文档"
        },
        en: {
          title: "English Docs",
          desc: "English reference for setup, concepts, annotations and examples.",
          link: "View docs"
        },
        api: {
          title: "JavaDoc",
          desc: "按包、类与方法浏览 API 细节，适合查类型签名与扩展点。",
          link: "打开 API"
        },
        community: {
          title: "社区支持",
          desc: "在 GitHub Issues 中反馈问题、讨论实现细节或参与贡献。",
          link: "提交问题"
        }
      }
    },
    footer: {
      copy: "一个安静运行了很多年的开源 Java 爬虫框架。灵活、易用、可扩展。",
      project: "项目",
      releases: "版本发布",
      docs: "文档",
      zh: "中文文档",
      en: "English",
      community: "社区",
      source: "源码仓库",
      guide: "贡献入口",
      bottom: "© 2013–2024 WebMagic · Apache 2.0"
    }
  },
  en: {
    nav: {
      features: "Features",
      architecture: "Architecture",
      quickstart: "Quick Start",
      resources: "Resources",
      api: "API",
      github: "GitHub"
    },
    common: {
      copy: "Copy",
      copied: "Copied"
    },
    hero: {
      meta: {
        status: "Status · Operational",
        build: "Last build · stable"
      },
      titleLine1: "Crawl is",
      titleLine2: "Magic",
      descriptionPrefix: "A flexible, extensible Java crawler framework that covers downloading, URL management, content extraction and persistence across the full lifecycle.",
      descriptionEmphasis: "A crawler in just a few lines.",
      primaryCta: "Quick Start",
      secondaryCta: "View Source ↗",
      windowTitle: "crawl · live"
    },
    stats: {
      stars: "Stars",
      forks: "Forks",
      contributors: "Contributors",
      license: "License"
    },
    features: {
      title: "Core Features",
      items: {
        simple: {
          title: "Simple by Default",
          desc: "A fluent API lets you launch a working crawler in only a handful of lines."
        },
        flexible: {
          title: "Highly Composable",
          desc: "Downloader, Scheduler, Processor and Pipeline stay isolated and easy to replace."
        },
        thread: {
          title: "Multi-threaded and Distributed",
          desc: "Built-in threading scales locally, and Redis Scheduler extends to distributed jobs."
        },
        annotation: {
          title: "Annotation Driven",
          desc: "@TargetUrl and @ExtractBy make POJOs double as crawler declarations."
        },
        extract: {
          title: "Powerful Extraction",
          desc: "Mix XPath, CSS selectors, regex and JsonPath to handle uneven page structures."
        },
        integration: {
          title: "Easy to Integrate",
          desc: "Send results to Console, files, MySQL, Redis or your own custom pipeline."
        }
      }
    },
    architecture: {
      title: "Pipeline Overview"
    },
    quickstart: {
      title: "Quick Start"
    },
    resources: {
      title: "Resources and Ecosystem",
      items: {
        zh: {
          title: "Chinese Docs",
          desc: "Full Chinese guides, concepts and chapter-based tutorials.",
          link: "Open docs"
        },
        en: {
          title: "English Docs",
          desc: "English reference for setup, concepts, annotations and examples.",
          link: "View docs"
        },
        api: {
          title: "JavaDoc",
          desc: "Browse packages, classes and methods when you need exact API details.",
          link: "Open API"
        },
        community: {
          title: "Community Support",
          desc: "Use GitHub Issues to report bugs, discuss implementation details and contribute.",
          link: "Open issues"
        }
      }
    },
    footer: {
      copy: "An open source Java crawler framework that has stayed quiet, stable and extensible for years.",
      project: "Project",
      releases: "Releases",
      docs: "Docs",
      zh: "Chinese Docs",
      en: "English",
      community: "Community",
      source: "Source Repo",
      guide: "Contribution Guide",
      bottom: "© 2013–2024 WebMagic · Apache 2.0"
    }
  }
};

const quickstartSteps = {
  zh: [
    {
      id: "maven",
      label: "01 · 依赖管理",
      sub: "pom.xml",
      command: "cat pom.xml",
      path: "~/webmagic-demo",
      meta: "pom.xml",
      caption: "先加入核心依赖与扩展包。WebMagic 核心保持轻量，额外能力通过 extension 组合。",
      code: `<dependency>
    <groupId>us.codecraft</groupId>
    <artifactId>webmagic-core</artifactId>
    <version>1.0.3</version>
</dependency>
<dependency>
    <groupId>us.codecraft</groupId>
    <artifactId>webmagic-extension</artifactId>
    <version>1.0.3</version>
</dependency>`
    },
    {
      id: "processor",
      label: "02 · 编写爬虫",
      sub: "PageProcessor",
      command: "cat GithubRepoProcessor.java",
      path: "~/webmagic-demo/src/main/java/demo",
      meta: "GithubRepoProcessor.java",
      caption: "核心逻辑通常写在 PageProcessor 中：定义抓取规则、抽取字段、发现下一跳链接。",
      code: `public class GithubRepoProcessor implements PageProcessor {
    private final Site site = Site.me()
        .setRetryTimes(3)
        .setSleepTime(100);

    @Override
    public void process(Page page) {
        page.addTargetRequests(page.getHtml().links()
            .regex("(https://github\\\\.com/\\\\w+/\\\\w+)")
            .all());

        page.putField("author", page.getUrl()
            .regex("https://github\\\\.com/(\\\\w+)/.*")
            .toString());
        page.putField("name", page.getHtml()
            .xpath("//h1[@class='public']/strong/a/text()")
            .toString());
    }

    @Override
    public Site getSite() {
        return site;
    }
}`
    },
    {
      id: "run",
      label: "03 · 启动爬虫",
      sub: "Spider",
      command: "cat Main.java",
      path: "~/webmagic-demo/src/main/java/demo",
      meta: "Main.java",
      caption: "Spider 把调度、下载、处理与输出串成一条流水线，启动后即可开始抓取。",
      code: `public class Main {
    public static void main(String[] args) {
        Spider.create(new GithubRepoProcessor())
            .addUrl("https://github.com/code4craft")
            .addPipeline(new ConsolePipeline())
            .thread(5)
            .run();
    }
}`
    }
  ],
  en: [
    {
      id: "maven",
      label: "01 · Dependencies",
      sub: "pom.xml",
      command: "cat pom.xml",
      path: "~/webmagic-demo",
      meta: "pom.xml",
      caption: "Start with the core dependency and add extension modules only when you need them.",
      code: `<dependency>
    <groupId>us.codecraft</groupId>
    <artifactId>webmagic-core</artifactId>
    <version>1.0.3</version>
</dependency>
<dependency>
    <groupId>us.codecraft</groupId>
    <artifactId>webmagic-extension</artifactId>
    <version>1.0.3</version>
</dependency>`
    },
    {
      id: "processor",
      label: "02 · Processor",
      sub: "PageProcessor",
      command: "cat GithubRepoProcessor.java",
      path: "~/webmagic-demo/src/main/java/demo",
      meta: "GithubRepoProcessor.java",
      caption: "Most crawling logic lives in PageProcessor: discover links, extract fields and define selectors.",
      code: `public class GithubRepoProcessor implements PageProcessor {
    private final Site site = Site.me()
        .setRetryTimes(3)
        .setSleepTime(100);

    @Override
    public void process(Page page) {
        page.addTargetRequests(page.getHtml().links()
            .regex("(https://github\\\\.com/\\\\w+/\\\\w+)")
            .all());

        page.putField("author", page.getUrl()
            .regex("https://github\\\\.com/(\\\\w+)/.*")
            .toString());
        page.putField("name", page.getHtml()
            .xpath("//h1[@class='public']/strong/a/text()")
            .toString());
    }

    @Override
    public Site getSite() {
        return site;
    }
}`
    },
    {
      id: "run",
      label: "03 · Run Spider",
      sub: "Spider",
      command: "cat Main.java",
      path: "~/webmagic-demo/src/main/java/demo",
      meta: "Main.java",
      caption: "Spider connects scheduler, downloader, processor and output into a single crawl pipeline.",
      code: `public class Main {
    public static void main(String[] args) {
        Spider.create(new GithubRepoProcessor())
            .addUrl("https://github.com/code4craft")
            .addPipeline(new ConsolePipeline())
            .thread(5)
            .run();
    }
}`
    }
  ]
};

let currentLanguage = "zh";
let currentStepIndex = 0;

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);
}

function updateI18n() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.title = currentLanguage === "zh" ? "WebMagic · 抓取即魔法" : "WebMagic · Crawl is Magic";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getNestedValue(translations[currentLanguage], key);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.textContent = currentLanguage === "zh" ? "EN" : "中";
  }

  renderQuickstartTabs();
  renderQuickstartContent(currentStepIndex);
}

function renderQuickstartTabs() {
  const nav = document.getElementById("quickstartNav");
  if (!nav) return;

  const steps = quickstartSteps[currentLanguage];
  nav.innerHTML = "";

  steps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === currentStepIndex ? "is-active" : "";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(index === currentStepIndex));
    button.innerHTML = `${step.label}<span class="step-sub">${step.sub}</span>`;
    button.addEventListener("click", () => {
      currentStepIndex = index;
      renderQuickstartTabs();
      renderQuickstartContent(index);
    });
    nav.appendChild(button);
  });
}

function renderQuickstartContent(index) {
  const steps = quickstartSteps[currentLanguage];
  const step = steps[index] || steps[0];
  if (!step) return;

  const path = document.getElementById("quickstartPath");
  const command = document.getElementById("quickstartCommand");
  const meta = document.getElementById("quickstartMeta");
  const lines = document.getElementById("quickstartLines");
  const code = document.getElementById("quickstartCode");
  const caption = document.getElementById("quickstartCaption");

  if (!path || !command || !meta || !lines || !code || !caption) return;

  path.textContent = step.path;
  command.textContent = step.command;
  meta.textContent = step.meta;
  code.textContent = step.code;
  code.dataset.command = step.code;
  caption.textContent = step.caption;

  const lineCount = step.code.split("\n").length;
  lines.textContent = Array.from({ length: lineCount }, (_, i) => String(i + 1)).join("\n");
}

function setupTypewriter() {
  const source = document.getElementById("installCommand");
  const target = document.getElementById("typewriterText");
  if (!source || !target) return;

  const text = source.dataset.command || "";
  let index = 0;
  target.textContent = "";

  const tick = () => {
    if (index <= text.length) {
      target.textContent = text.slice(0, index);
      index += 1;
      window.setTimeout(tick, 26);
    }
  };

  tick();
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.copyTarget;
      const source = document.getElementById(targetId);
      if (!source) return;

      const text = source.dataset.command || source.textContent || "";
      try {
        await navigator.clipboard.writeText(text.trimEnd());
        button.classList.add("is-copied");
        button.textContent = getNestedValue(translations[currentLanguage], "common.copied");
        window.setTimeout(() => {
          button.classList.remove("is-copied");
          button.textContent = getNestedValue(translations[currentLanguage], "common.copy");
        }, 1600);
      } catch (error) {
        button.textContent = "Error";
        window.setTimeout(() => {
          button.textContent = getNestedValue(translations[currentLanguage], "common.copy");
        }, 1400);
      }
    });
  });
}

function setupHeaderState() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -48px 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

function setupMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  const navActions = document.getElementById("navActions");
  if (!toggle || !navLinks || !navActions) return;

  const setOpen = (open) => {
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("is-open", open);
    navActions.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    setOpen(!toggle.classList.contains("is-open"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 840) {
        setOpen(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 840) {
      setOpen(false);
    }
  });
}

function setupActiveNav() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".nav-link[href^='#']")];
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupLanguageToggle() {
  const button = document.getElementById("langToggle");
  if (!button) return;

  button.addEventListener("click", () => {
    currentLanguage = currentLanguage === "zh" ? "en" : "zh";
    updateI18n();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateI18n();
  setupTypewriter();
  setupCopyButtons();
  setupHeaderState();
  setupReveal();
  setupMobileNav();
  setupActiveNav();
  setupLanguageToggle();
});
