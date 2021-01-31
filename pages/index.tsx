import { getNumberOfPostPages, getPostsInRange } from "../lib/api/posts";
import { Homepage } from "../containers/home";
import { FeaturedSection } from "lib/types/featured-section";
import Head from "next/head";

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
    imageUrl: "/featured-image-1.jpeg",
  },
  {
    title: "Tutorials",
    imageUrl: "/featured-image-2.jpeg",
  },
  {
    title: "Projects",
    imageUrl: "/featured-image-3.jpeg",
  },
];

const Home = ({ posts, activePage, numberOfPages }) => {
  const pageTitle = "Software With Sarah | Simple Software Tutorials";
  const pagePath = "https://softwarewithsarah.com";
  const pageDescription =
    "A blog to guide aspiring developers through the jungle of technology through easy tutorials and projects for your free time.";

  return (
    <>
      <Head>
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content={pagePath} property="og:url" />
        <meta content="blog" property="og:type" />
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
