import { getPostsInRange } from "../lib/api/posts";
import { Homepage } from "../containers/home";
import { FeaturedSection } from "lib/types/featured-section";

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPostsInRange(0, 3),
    },
  };
};

const featuredSections: FeaturedSection[] = [
  {
    title: "Create A Blog From Scratch",
    imageUrl: "/featured-image-1.jpeg",
  },
  {
    title: "React and NodeJS Tutorials",
    imageUrl: "/featured-image-2.jpeg",
  },
  {
    title: "Personal Projects",
    imageUrl: "/featured-image-3.jpeg",
  },
];

const Main = ({ posts }) => {
  return (
    <Homepage
      activePage={1}
      featuredSections={featuredSections}
      posts={posts}
      maxNumberOfPages={2}
    />
  );
};

export default Main;
