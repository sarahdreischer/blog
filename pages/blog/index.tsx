import { getAllSortedPosts } from "../../lib/api/posts";
import { BlogPage } from "../../containers/blog";
import Head from "next/head";

export const getStaticProps = async () => {
  const posts = getAllSortedPosts();
  return {
    props: {
      posts: posts.slice(0, 12),
    },
  };
};

const Blog = ({ posts }) => {
  const pageTitle = "Software With Sarah | Blog";
  const pagePath = "https://softwarewithsarah.com/blog";
  const pageDescription =
    "A blog to guide aspiring developers through the jungle of technology through easy tutorials and projects for your free time.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content={pagePath} property="og:url" />
        <meta content="blog" property="og:type" />
      </Head>
      <BlogPage posts={posts} />
    </>
  );
};

export default Blog;
