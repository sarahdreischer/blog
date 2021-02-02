import Head from "next/head";
import { DefaultBlogMeta, getOGTags, PageTitle } from "lib/seo/meta-tags";
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
        <title>{PageTitle.BLOG}</title>
        {getOGTags(
          PageTitle.BLOG,
          DefaultBlogMeta.DESCRIPTION,
          DefaultBlogMeta.URL + "/blog"
        )}
      </Head>
      <BlogPage posts={posts} />
    </>
  );
};

export default Blog;
