import { getAllSortedPosts, getPostById } from "../../lib/api/posts";
import { BlogPostPage } from "../../containers/blog-post";
import renderToString from "next-mdx-remote/render-to-string";
import PostComponents from "containers/components/posts/post-components";

export const getStaticPaths = async () => {
  const posts = getAllSortedPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = getPostById(params.id);
  const mdxContent = await renderToString(post.content, {
    components: PostComponents,
  });
  return {
    props: {
      post: { ...post, content: mdxContent },
    },
  };
};

const BlogPost = ({ post }) => {
  return <BlogPostPage post={post} />;
};

export default BlogPost;
