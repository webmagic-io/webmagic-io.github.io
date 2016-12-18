
![](/images/logo.jpeg)

WebMagic is a scalable crawler framework. It covers the whole lifecycle of crawler: downloading, url management, content extraction and persistent. It can simplify the development of a specific crawler.

## Features:

* Simple core with high flexibility.
* Simple API for html extracting.
* Annotation with POJO to customize a crawler, no configuration.
* Multi-thread and Distribution support.
* Easy to be integrated.

An example：

```java
public class GithubRepoPageProcessor implements PageProcessor {

    private Site site = Site.me().setRetryTimes(3).setSleepTime(1000).setTimeOut(10000);

    @Override
    public void process(Page page) {
        page.addTargetRequests(page.getHtml().links().regex("(https://github\\.com/[\\w\\-]+/[\\w\\-]+)").all());
        page.addTargetRequests(page.getHtml().links().regex("(https://github\\.com/[\\w\\-])").all());
        page.putField("author", page.getUrl().regex("https://github\\.com/(\\w+)/.*").toString());
        page.putField("name", page.getHtml().xpath("//h1[@class='entry-title public']/strong/a/text()").toString());
        if (page.getResultItems().get("name")==null){
            //skip this page
            page.setSkip(true);
        }
        page.putField("readme", page.getHtml().xpath("//div[@id='readme']/tidyText()"));
    }

    @Override
    public Site getSite() {
        return site;
    }

    public static void main(String[] args) {
        Spider.create(new GithubRepoPageProcessor()).addUrl("https://github.com/code4craft").thread(5).run();
    }
}
```

## Download：

Lastest Version：[WebMagic-0.6.0](https://github.com/code4craft/webmagic/releases/tag/WebMagic-0.6.0)

Maven：

```xml
<dependency>
    <groupId>us.codecraft</groupId>
    <artifactId>webmagic-core</artifactId>
    <version>0.6.0</version>
</dependency>
<dependency>
    <groupId>us.codecraft</groupId>
    <artifactId>webmagic-extension</artifactId>
    <version>0.6.0</version>
</dependency>
```

## Document：

* English: [http://webmagic.io/docs/en](http://webmagic.io/docs/en)

## SourceCode：

* [https://git.oschina.net/flashsword20/webmagic](https://git.oschina.net/flashsword20/webmagic)
* [https://github.com/code4craft/webmagic](https://github.com/code4craft/webmagic)

## Contribute：

* [https://github.com/code4craft/webmagic/issues](https://github.com/code4craft/webmagic/issues)
