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

export async function getBlogPosts(): Promise<BlogPost[]> {
  return fetch("https://blog.codedimension.com.br/rss.xml")
    .then((response) => response.text())
    .then((text) => new XMLParser().parse(text))
    .then((json) => json.rss.channel.item);
}
