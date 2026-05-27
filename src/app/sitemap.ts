import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual domain when deploying
  const baseUrl = "https://maventech.id";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add more routes here as your application grows
  ];
}
