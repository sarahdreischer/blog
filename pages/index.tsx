import { getNumberOfPostPages, getPostsInRange } from "../lib/api/posts";
import { Homepage } from "../containers/home";
import { FeaturedSection } from "lib/types/featured-section";
import Head from "next/head";
import { getOGTags, DefaultBlogMeta, PageTitle } from "lib/seo/meta-tags";

export const getStaticProps = async () => {
  return {
    props: {
      activePage: 1,
      posts: getPostsInRange(0, 3),
      numberOfPages: getNumberOfPostPages(4),
    },
  };
};

const featuredSections: FeaturedSection[] = [
  {
    title: "Create a blog with Next.JS",
    imageUrl: "/featured-sections/image-1.jpeg",
  },
  {
    title: "Tutorials",
    imageUrl: "/featured-sections/image-2.jpeg",
  },
  {
    title: "Projects",
    imageUrl: "/featured-sections/image-3.jpeg",
  },
];

const Home = ({ posts, activePage, numberOfPages }) => {
  return (
    <>
      <Head>
        {getOGTags(
          PageTitle.HOME,
          DefaultBlogMeta.DESCRIPTION,
          DefaultBlogMeta.URL
        )}
      </Head>
      <Homepage
        activePage={activePage}
        featuredSections={featuredSections}
        posts={posts}
        numberOfPages={numberOfPages}
      />
    </>
  );
};

export default Home;
