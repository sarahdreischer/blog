export interface Post {
  id: string;
  url?: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageWidth: string;
  imageHeight: string;
  content: string;
  datePublished: Date;
  dateModified: Date;
  keywords: string[];
  summary: string[];
}
