import Link from "next/link";
import { Button, Col, Image, Row } from "react-bootstrap";

interface SummarizedPostsProp {
  posts: Array<any>;
}

interface PostSummaryProps {
  id: string;
  title: string;
  imageUrl: string;
  paragraph: string;
}

export const SummarizedPosts = ({ posts }: SummarizedPostsProp) => {
  return (
    <div className="d-flex flex-column p-3">
      <h4 className="text-left pb-2">Recent Blog Posts</h4>
      <div className="px-2">
        {posts.map((post) => (
          <PostSummary
            id={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            paragraph={post.summary}
            key={post.title}
          />
        ))}
      </div>
    </div>
  );
};

export const PostSummary = ({
  id,
  title,
  imageUrl,
  paragraph,
}: PostSummaryProps) => {
  return (
    <div className="text-left pb-3">
      <Row>
        <Col md={5}>
          <Image src={imageUrl} fluid />
        </Col>
        <Col md={7}>
          <h5>{title}</h5>
          <p>{paragraph}</p>
          <Link as={`/blog/${id}`} href={"/blog/[id]"}>
            <Button variant="outline-info">Read on...</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
