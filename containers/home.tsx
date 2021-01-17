import { Divider } from "@material-ui/core";
import { Row } from "react-bootstrap";
import { Featured } from "./components/featured-sections/featured";
import { BodyWrapper } from "./components/layout/body-wrapper";
import { DefaultPagination } from "./components/layout/default-pagination";
import { SummarizedPosts } from "./components/posts/summarized";

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
          <Featured sections={featuredSections} />
          <Divider />
          <SummarizedPosts posts={posts} />
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
          <h6 className="text-justify">Welcome to Software with Sarah!</h6>
        </div>
      }
    />
  );
};
