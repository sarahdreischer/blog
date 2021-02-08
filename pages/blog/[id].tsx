import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { getAllSortedPosts, getPostById } from "../../lib/api/posts";
import { BlogPostPage } from "../../containers/blog-post";
import renderToString from "next-mdx-remote/render-to-string";
import {
  WrappedComponents,
  StylingComponents,
} from "containers/components/posts/post-components";
import { MDXProvider } from "@mdx-js/react";

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
    components: WrappedComponents,
  });
  return {
    props: {
      post: { ...post, content: mdxContent },
    },
  };
};

const BlogPost = ({ post }) => {
  const router = useRouter();
  const pagePath = `https://softwarewithsarah.com${router.pathname.replace(
    "[id]",
    post.id
  )}`;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta content={post.summary} name="description" />
        <meta content={post.keywords} name="keywords" />
        <meta content="article" property="og:type" />
        <meta
          content={`${post.title} | Software With Sarah`}
          property="og:title"
        />
        <meta content={post.summary} property="og:description" />
        <meta content={pagePath} property="og:url" />
        <link rel="canonical" href={pagePath} />
      </Head>
      <MDXProvider components={StylingComponents}>
        <BlogPostPage post={post} />
      </MDXProvider>
    </>
  );
};

export default BlogPost;
