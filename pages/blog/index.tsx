import { getAllSortedPosts } from '../../lib/posts';
import { BlogPage } from '../../containers/blog';

export const getStaticProps = async () => {
  const posts = getAllSortedPosts();
  // TODO add context ot static props args for pagination
  return {
    props: {
      posts: posts.slice(0, 12),
    },
  };
};

const Blog = ({ posts }) => {
  return <BlogPage posts={posts} />;
};

export default Blog;
