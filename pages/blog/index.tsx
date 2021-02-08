import Head from "next/head";
import { getOGTags, ROOT_LINK } from "lib/seo/meta-tags";
import { getAllSortedPosts } from "../../lib/api/posts";
import { BlogPage } from "../../containers/blog";

export const getStaticProps = async () => {
  const posts = getAllSortedPosts();
  return {
    props: {
      posts: posts.slice(0, 12),
    },
  };
};

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Software With Sarah | Blog</title>
        {getOGTags(
          "Software With Sarah | Blog",
          "A programming blog to guide aspiring and established developers through the jungle of technology through simple programming tutorials and projects for your free time.",
          `${ROOT_LINK}/blog`
        )}
        <link rel="canonical" href={`${ROOT_LINK}/blog`} />
      </Head>
      <BlogPage posts={posts} />
    </>
  );
};

export default Blog;
