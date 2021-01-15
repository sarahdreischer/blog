import { getAllSortedPosts, getPostById } from "../../lib/api/posts";
import { BlogPostPage } from "../../containers/blog-post";

export const getStaticPaths = async () => {
  const posts = getAllSortedPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = getPostById(params.id);
  return {
    props: {
      post: post,
    },
  };
};

const BlogPost = ({ post }) => {
  return <BlogPostPage post={post} />;
};

export default BlogPost;
