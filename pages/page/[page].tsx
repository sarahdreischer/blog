import { getNumberOfPostPages, getPostsInRange } from "lib/api/posts";
import Home from "pages";

export const getStaticPaths = async () => {
  const numberOfPages = getNumberOfPostPages(4);
  const paths = Array(numberOfPages)
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
  return {
    props: {
      posts: getPostsInRange(+params.page - 1, +params.page + 2),
      activePage: +params.page,
      numberOfPages: getNumberOfPostPages(4),
    },
  };
};

const PaginatedHome = ({ posts, activePage, numberOfPages }) => {
  return (
    <Home posts={posts} activePage={activePage} numberOfPages={numberOfPages} />
  );
};

export default PaginatedHome;
