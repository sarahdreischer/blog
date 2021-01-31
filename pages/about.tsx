import Head from "next/head";
import { AboutPage } from "../containers/about";

const About = () => {
  const pageTitle = "Software With Sarah | About";
  const pagePath = "https://softwarewithsarah.com/projects";
  const pageDescription =
    "A blog to guide aspiring developers through the jungle of technology through easy tutorials and projects for your free time.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content={pagePath} property="og:url" />
        <meta content="blog" property="og:type" />
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
