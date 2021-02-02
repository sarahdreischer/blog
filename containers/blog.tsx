import Link from "next/link";
import Image from "next/image";
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import { Body } from "./components/layout/body";
import { Post } from "../lib/types/post";

interface BlogPageProps {
  posts: Post[];
}

export const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <Body
      main={
        <Container>
          <Row>
            {posts.map((post) => (
              <Col key={post.title} md={4} className="d-flex flex-grow pb-3">
                <Card>
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={80}
                    height={50}
                    objectFit="cover"
                    layout="responsive"
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.summary}</Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{ backgroundColor: "white", borderTop: "0" }}
                  >
                    <Link as={`/blog/${post.id}`} href={"/blog/[id]"}>
                      <Button variant="outline-info">Read more...</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      }
    />
  );
};
