import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { getAllSortedPosts, getPostById } from '../../lib/api/posts';
import { MDXProvider } from '@mdx-js/react';
import { ROOT_LINK } from 'lib/seo/meta-tags';
import { jsonLdScriptProps } from 'react-schemaorg';
import { BlogPosting } from 'schema-dts';
import { serialize } from 'next-mdx-remote/serialize';
import { StylingComponents } from '@components';
import { BlogPostScreen } from '@screens';
import moment from 'moment';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Post } from '@types';

export const getStaticPaths = async () => {
  const posts = getAllSortedPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = getPostById(params.id);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      post,
      mdxSource,
    },
  };
};

interface BlogPostProps {
  post: Post;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const BlogPost = ({ post, mdxSource }: BlogPostProps) => {
  const router = useRouter();
  const pagePath = `${ROOT_LINK}${router.pathname.replace('[id]', post.id)}`;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta content={post.summary} name='description' />
        <meta content={post.keywords} name='keywords' />
        <meta content='article' property='og:type' />
        <meta content={`${post.title} | Software With Sarah`} property='og:title' />
        <meta content={post.summary} property='og:description' />
        <meta content={pagePath} property='og:url' />
        <link rel='canonical' href={pagePath} />
        <script
          {...jsonLdScriptProps<BlogPosting>({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            image: post.allImages.length === 1 ? post.allImages[0] : post.allImages,
            url: pagePath,
            headline: post.title,
            datePublished: moment(new Date(post.datePublished)).format('YYYY-MM-DD').toString(),
            dateModified: moment(new Date(post.dateModified)).format('YYYY-MM-DD').toString(),
            inLanguage: 'en-GB',
            isFamilyFriendly: true,
            author: {
              '@type': 'Person',
              name: 'Sarah Dreischer',
              url: 'https://softwarewithsarah.com/about',
            },
            creator: {
              '@type': 'Person',
              name: 'Sarah Dreischer',
              url: 'https://softwarewithsarah.comm/about',
            },
            publisher: {
              '@type': 'Person',
              name: 'Sarah Dreischer',
              url: 'https://softwarewithsarah.com/about',
            },
            keywords: post.keywords,
            description: post.summary,
          })}
        />
      </Head>
      <MDXProvider components={StylingComponents}>
        <BlogPostScreen post={post} mdxSource={mdxSource} />
      </MDXProvider>
    </>
  );
};

export default BlogPost;
