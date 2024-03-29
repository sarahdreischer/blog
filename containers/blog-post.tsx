import { Container, Row } from "react-bootstrap";
import { Body } from "./components/layout/body";
import { Post } from "../lib/types/post";
import hydrate from "next-mdx-remote/hydrate";
import { WrappedComponents } from "./components/posts/post-components/post-components";
import styles from "./styles/blog-post.module.css";
import Image from "next/image";
import moment from "moment";
import { ShareButtons } from "./components/social-media/share-buttons";

interface BlogPostPageProps {
  post: Post;
}

export const BlogPostPage = ({ post }: BlogPostPageProps) => {
  const content = hydrate(post.content, { components: WrappedComponents });
  const postDate = moment(new Date(post.datePublished)).format("DD/MM/YYYY");

  return (
    <Body
      header={
        <Image
          height={120}
          width={400}
          objectFit="cover"
          layout="responsive"
          alt={`${post.title} Header image`}
          src={post.headerImage}
          priority
        />
      }
      main={
        <Container fluid className="pt-5">
          <article>
            <h1 className={styles.title}>{post.title}</h1>
            <p className="pt-3" style={{ fontSize: 18, lineHeight: 2 }}>
              <em>{post.subtitle || null}</em>
            </p>
            <div className="pt-2">{content}</div>
          </article>
        </Container>
      }
      sidebar={
        <Container className={styles.postSidebar}>
          <Row className="justify-content-center">
            <Image
              className="round-image"
              width={50}
              height={50}
              objectFit="cover"
              src="/profile.jpeg"
              alt={`Published by Sarah Dreischer, ${post.title}`}
              priority
            />
          </Row>
          <Row className="text-left pt-3">
            <span>
              Published by{" "}
              <b>Sarah Dreischer, Software Engineer from London, UK</b> on{" "}
              <b>{postDate}</b>.
            </span>
          </Row>
          <Row className="pt-5 justify-content-center">
            <b>Share this Post</b>
          </Row>
          <Row className="pt-4">
            <ShareButtons title={post.title} />
          </Row>
        </Container>
      }
    />
  );
};
