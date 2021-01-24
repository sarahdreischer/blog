import { Divider } from "@material-ui/core";
import { Row } from "react-bootstrap";
import { FeaturedSections } from "./components/featured-sections/featured-sections";
import { BodyWrapper } from "./components/layout/body-wrapper";
import { DefaultPagination } from "./components/layout/default-pagination";
import { PostSummaries } from "./components/posts/post-summary";

interface HomepageProps {
  featuredSections: Array<any>;
  posts: Array<any>;
  activePage: number;
  numberOfPages: number;
}

export const Homepage = ({
  featuredSections,
  posts,
  activePage,
  numberOfPages: maxNumberOfPages,
}: HomepageProps) => {
  return (
    <BodyWrapper
      main={
        <>
          <FeaturedSections sections={featuredSections} />
          <Divider />
          <PostSummaries posts={posts} />
          <Row className="float-right pr-2">
            <DefaultPagination
              activePage={activePage}
              maxNumber={maxNumberOfPages}
              visibleRange={5}
            />
          </Row>
        </>
      }
      sidebar={
        <div className="flex-column justify-content-center">
          <h6 className="text-center">Welcome to Software with Sarah!</h6>
        </div>
      }
    />
  );
};
