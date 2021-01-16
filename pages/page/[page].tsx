import { Homepage } from "containers/home";
import { getAllSortedPosts, getPostsInRange } from "lib/api/posts";
import { FeaturedSection } from "lib/types/featured-section";
import { Post } from "lib/types/post";

export const getStaticPaths = async () => {
  const posts = getAllSortedPosts();
  const maxNumberOfPostsPerPage = 4; // Todo - add to env variables
  const maxNumberOfPages = Math.ceil(posts.length / maxNumberOfPostsPerPage);
  const paths = Array(maxNumberOfPages)
    .fill(0)
    .map((_, index) => {
      return {
        params: {
          page: (index + 1).toString(),
        },
      };
    });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const maxNumberOfPostsPerPage = 4; // Todo - add to env variables
  const maxNumberOfPages = Math.ceil(
    getAllSortedPosts().length / maxNumberOfPostsPerPage
  );
  return {
    props: {
      posts: getPostsInRange(+params.page - 1, +params.page + 2),
      activePage: +params.page,
      maxNumberOfPages,
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

const Home = ({ posts, activePage, maxNumberOfPages }) => {
  console.log("MaxNumber: " + maxNumberOfPages);
  return (
    <Homepage
      activePage={activePage}
      featuredSections={featuredSections}
      posts={posts}
      maxNumberOfPages={maxNumberOfPages}
    />
  );
};

export default Home;
