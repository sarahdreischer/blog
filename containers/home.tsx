import { Divider } from "@material-ui/core";
import { Row } from "react-bootstrap";
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
        <div
          className={`flex-column justify-content-center text-center ${styles.homeSidebar}`}
        >
          <span>Welcome to Software with Sarah!</span>
        </div>
      }
    />
  );
};
