import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blogs";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/products",
    "/about",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/shipping-policy",
    "/refund-policy",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productPages = products.map((p) => ({
    url: `${site.url}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
