import Head from "next/head";

const Projects = (props) => {
  const pageTitle = "Software With Sarah | Projects";
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
      <h1 className="text-center coming-soon">Coming Soon!</h1>
    </>
  );
};

export default Projects;
