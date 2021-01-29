import { getAllSortedPosts, getPostById } from "../../lib/api/posts";
import { BlogPostPage } from "../../containers/blog-post";
import renderToString from "next-mdx-remote/render-to-string";
import {
  PostComponents,
  PostStylingComponents,
} from "containers/components/posts/post-components";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

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
  const router = useRouter();
  const path = `https://softwarewithsarah.com${router.pathname.replace(
    "[id]",
    post.id
  )}`;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={post.summary} name="description" />
        <meta content={post.keywords} name="keywords" />
        <meta content="follow, index" name="robots" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-config" />
        <meta content={post.title} property="og:title" />
        <meta content={post.summary} property="og:description" />
        <meta content={path} property="og:url" />
        <meta content="68063a32bf98d316" name="yandex-verification" />
      </Head>
      <MDXProvider components={PostStylingComponents}>
        <BlogPostPage post={post} />
      </MDXProvider>
    </>
  );
};

export default BlogPost;
