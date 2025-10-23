import { XMLParser } from "fast-xml-parser";

export interface BlogPost {
  title: string;
  link: string;
  guid: string;
  description: string;
  pubDate: string;
  image: string;
  author: string;
}

const blogRssUrl = import.meta.env.BLOG_RSS_URL || "https://blog.codedimension.com.br/rss.xml";

export async function getBlogPosts(): Promise<BlogPost[]> {
  return fetch(blogRssUrl)
    .then((response) => response.text())
    .then((text) => new XMLParser().parse(text))
    .then((json) => json.rss.channel.item);
}
