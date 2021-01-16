import { getNumberOfPostPages, getPostsInRange } from "../lib/api/posts";
import { Homepage } from "../containers/home";
import { FeaturedSection } from "lib/types/featured-section";

export const getStaticProps = async () => {
  return {
    props: {
      activePage: 1,
      posts: getPostsInRange(0, 3),
      numberOfPages: getNumberOfPostPages(4),
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

const Home = ({ posts, activePage, numberOfPages }) => {
  return (
    <Homepage
      activePage={activePage}
      featuredSections={featuredSections}
      posts={posts}
      numberOfPages={numberOfPages}
    />
  );
};

export default Home;
