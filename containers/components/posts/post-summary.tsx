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
      <h1 className="h4 text-left pb-2">Recent Blog Posts</h1>
      <div className="px-1">
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
        <Col md={4}>
          <Link as={`/blog/${id}`} href={"/blog/[id]"}>
            <a>
              <Image
                alt={title}
                src={imageUrl}
                width={60}
                height={40}
                objectFit="cover"
                layout="responsive"
              />
            </a>
          </Link>
        </Col>
        <Col md={8}>
          <h1 className="h4 pb-2">{title}</h1>
          <p style={{ lineHeight: 1.5 }}>{paragraph}</p>
          <Link as={`/blog/${id}`} href={"/blog/[id]"}>
            <Button variant="outline-info">Read more...</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
