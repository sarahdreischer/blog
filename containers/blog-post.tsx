import { Container, Row } from "react-bootstrap";
import { BodyWrapper } from "./components/layout/body-wrapper";
import { Post } from "../lib/types/post";
import hydrate from "next-mdx-remote/hydrate";
import { PostComponents } from "./components/posts/post-components";
import Image from "next/image";

interface BlogPostPageProps {
  post: Post;
}

export const BlogPostPage = ({ post }: BlogPostPageProps) => {
  const content = hydrate(post.content, { components: PostComponents });

  return (
    <BodyWrapper
      header={
        <Image
          className="w-100 summary-img"
          objectFit="cover"
          height={120}
          width={400}
          layout="responsive"
          src={post.imageUrl}
        />
      }
      main={
        <Container fluid className="pt-5">
          <h1 className="display-4">{post.title}</h1>
          {post.subtitle ? <i>{post.subtitle}</i> : null}
          <div className="pt-3">{content}</div>
        </Container>
      }
      sidebar={
        <Container>
          <Row className="justify-content-center">
            <Image
              className="round-img"
              width={50}
              height={50}
              objectFit="cover"
              layout="fixed"
              src="/profile.jpeg"
              alt="Sarah Dreischer"
              priority
            />
          </Row>
          <Row className="text-left pt-3">
            <span>
              Published by{" "}
              <b>Sarah Dreischer, Software Engineer from London, UK</b> on{" "}
              <b>{new Date(post.createdAt).toDateString()}</b>.
            </span>
          </Row>
        </Container>
      }
    />
  );
};
