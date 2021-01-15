export interface Post {
  id: string;
  createdAt: Date;
  title: string;
  subtitle?: string;
  imageUrl: string;
  content: string;
  summary: string;
}
