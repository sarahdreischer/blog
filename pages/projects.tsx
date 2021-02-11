import Head from "next/head";
import { getOpenGraphTags, ROOT_LINK } from "lib/seo/meta-tags";

const Projects = (props) => {
  return (
    <>
      <Head>
        <title>Software With Sarah | Projects</title>
        {getOpenGraphTags(
          "Software With Sarah | Projects",
          "A programming blog to guide aspiring and established developers through the jungle of technology through simple programming tutorials and projects for your free time.",
          "projects"
        )}
        <link rel="canonical" href={`${ROOT_LINK}/projects`} />
      </Head>
      <h1 className="text-center coming-soon">Coming Soon!</h1>
    </>
  );
};

export default Projects;
