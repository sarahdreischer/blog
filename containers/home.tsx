import { Divider } from "@material-ui/core";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import { FeaturedSections } from "./components/featured-sections/featured-sections";
import { Body } from "./components/layout/body";
import { CustomPagination } from "./components/pagination/custom-pagination";
import { PostSummaries } from "./components/posts/post-summary";
import styles from "./styles/home.module.css";

interface HomepageProps {
  posts: Array<any>;
  activePage: number;
  numberOfPages: number;
}

export const Homepage = ({
  posts,
  activePage,
  numberOfPages: maxNumberOfPages,
}: HomepageProps) => {
  return (
    <Body
      main={
        <>
          <FeaturedSections />
          <Divider />
          <PostSummaries posts={posts} />
          <Row className="float-right mr-1">
            <CustomPagination
              activePage={activePage}
              maxNumber={maxNumberOfPages}
              visibleRange={5}
            />
          </Row>
        </>
      }
      sidebar={
        <Container className={styles.homeSidebar}>
          <Row className="justify-content-center">
            <Image
              className="round-image"
              width={50}
              height={50}
              objectFit="cover"
              src="/profile.jpeg"
              alt="Programming Blog, Simple Software Tutorials"
              priority
            />
          </Row>
          <Row className="p-3">
            <span>
              <div className="text-center">
                <b className="heading-color">Hello!</b>
              </div>
              <br />
              <div className="text-justify">
                Welcome to my personal blog in which I am sharing with you all I
                have learned so far as a Full-Stack Software Developer through
                simple tutorials. Enjoy!
              </div>
            </span>
          </Row>
        </Container>
      }
    />
  );
};
