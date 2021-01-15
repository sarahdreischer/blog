import { Divider } from "@material-ui/core";
// import { Post, Section } from '@software-with-sarah/api-interfaces';
import { Featured } from "../components/featured/featured";
import { BodyWrapper } from "../components/layout/body-wrapper";
import { SummarizedPosts } from "../components/posts/summarized";

interface HomepageProps {
  featuredSections: Array<any>;
  posts: Array<any>;
}

export const Homepage = ({ featuredSections, posts }: HomepageProps) => {
  return (
    <BodyWrapper
      main={
        <>
          <Featured sections={featuredSections} />
          <Divider />
          <SummarizedPosts posts={posts} />
        </>
      }
      sidebar={
        <div className="flex-column justify-content-center">
          <h6 className="text-justify pt-3">
            All Blog Posts written by Sarah Dreischer, Software Developer in
            London, UK.
          </h6>
        </div>
      }
    />
  );
};
