import { Button, Divider } from "@material-ui/core";
import Link from "next/link";
import { Row } from "react-bootstrap";
import { Featured } from "./components/featured-sections/featured";
import { BodyWrapper } from "./components/layout/body-wrapper";
import { DefaultPagination } from "./components/layout/default-pagination";
import { SummarizedPosts } from "./components/posts/summarized";

interface HomepageProps {
  featuredSections: Array<any>;
  posts: Array<any>;
  activePage: number;
  maxNumberOfPages: number;
}

export const Homepage = ({
  featuredSections,
  posts,
  activePage,
  maxNumberOfPages,
}: HomepageProps) => {
  return (
    <BodyWrapper
      main={
        <>
          <Featured sections={featuredSections} />
          <Divider />
          <SummarizedPosts posts={posts} />
          <Row className="float-right">
            <div>
              <DefaultPagination
                activePage={activePage}
                maxNumber={maxNumberOfPages}
                visibleRange={5}
              />
            </div>
            <div className="pl-2">
              <Link as={`/page/${activePage + 1}`} href="/page/[page]">
                <Button
                  size="small"
                  variant="outlined"
                  disabled={activePage >= maxNumberOfPages}
                >
                  Next
                </Button>
              </Link>
            </div>
          </Row>
        </>
      }
      sidebar={
        <div className="flex-column justify-content-center">
          <h6 className="text-justify">
            All Blog Posts written by Sarah Dreischer, Software Developer in
            London, UK.
          </h6>
        </div>
      }
    />
  );
};
