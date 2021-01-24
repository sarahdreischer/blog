import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";
import Image from "next/image";

interface SummarizedPostsProp {
  posts: Array<any>;
}

interface PostSummaryProps {
  id: string;
  title: string;
  imageUrl: string;
  paragraph: string;
}

export const PostSummaries = ({ posts }: SummarizedPostsProp) => {
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
          <Image
            src={imageUrl}
            width={100}
            height={65}
            objectFit="cover"
            layout="responsive"
          />
        </Col>
        <Col md={7}>
          <h4 className="pb-2">{title}</h4>
          <p style={{ lineHeight: 1.5 }}>{paragraph}</p>
          <Link as={`/blog/${id}`} href={"/blog/[id]"}>
            <Button variant="outline-info">Read on...</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
