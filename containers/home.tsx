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
}

export const Homepage = ({
  featuredSections,
  posts,
  activePage,
}: HomepageProps) => {
  console.log("Current Page is: " + activePage);
  return (
    <BodyWrapper
      main={
        <>
          <Featured sections={featuredSections} />
          <Divider />
          <SummarizedPosts posts={posts} />
          <Row className="float-right">
            <DefaultPagination activePage={activePage} maxNumber={5} />
            <Button size="small" variant="outlined" className="ml-2">
              Next
            </Button>
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
