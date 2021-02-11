import Head from "next/head";
import { getNumberOfPostPages, getPostsInRange } from "../lib/api/posts";
import { getOpenGraphTags, ROOT_LINK } from "lib/seo/meta-tags";
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
        <title>Programming Blog | Software With Sarah</title>
        <meta
          content="A programming blog to guide aspiring and established developers through the jungle of technology through simple programming tutorials and projects for your free time."
          name="description"
        />
        <meta
          content="best programming blog 2021, software with sarah, programming, blog, software, tutorials, next.js, typescript, java"
          name="keywords"
        />
        {getOpenGraphTags(
          "Programming Blog | Software With Sarah",
          "A programming blog to guide aspiring and established developers through the jungle of technology through simple programming tutorials and projects for your free time."
        )}
        <link rel="canonical" href={ROOT_LINK} />
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
