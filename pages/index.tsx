import Head from "next/head";
import { getNumberOfPostPages, getPostsInRange } from "../lib/api/posts";
import { getOGTags, DefaultBlogMeta, PageTitle } from "lib/seo/meta-tags";
import { Homepage } from "../containers/home";

export const getStaticProps = async () => {
  return {
    props: {
      activePage: 1,
      posts: getPostsInRange(0, 3),
      numberOfPages: getNumberOfPostPages(4),
    },
  };
};

const Home = ({ posts, activePage, numberOfPages }) => {
  return (
    <>
      <Head>
        {getOGTags(
          PageTitle.HOME,
          DefaultBlogMeta.DESCRIPTION,
          DefaultBlogMeta.URL
        )}
      </Head>
      <Homepage
        activePage={activePage}
        posts={posts}
        numberOfPages={numberOfPages}
      />
    </>
  );
};

export default Home;
