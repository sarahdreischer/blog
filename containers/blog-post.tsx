import { Container, Image } from "react-bootstrap";
import { BodyWrapper } from "./components/layout/body-wrapper";
import { Post } from "../lib/types/post";
import hydrate from "next-mdx-remote/hydrate";
import PostComponents from "./components/posts/post-components";

interface BlogPostPageProps {
  post: Post;
}

export const BlogPostPage = ({ post }: BlogPostPageProps) => {
  const content = hydrate(post.content, { components: PostComponents });

  return (
    <BodyWrapper
      header={
        <Image
          className="w-100"
          style={{ maxHeight: 400, objectFit: "cover" }}
          src={post.imageUrl}
        />
      }
      main={
        <Container fluid className="text-left pt-5">
          <h1 className="display-4">{post.title}</h1>
          <div className="pt-3">{content}</div>
        </Container>
      }
      sidebar={
        //TODO add small image of me here
        <span className="pt-5">
          Published by Sarah Dreischer, Software Engineer from London, UK on{" "}
          {new Date(post.createdAt).toDateString()}.
        </span>
      }
    />
  );
};
