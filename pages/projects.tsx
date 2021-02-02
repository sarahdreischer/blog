import { getOGTags, PageTitle, DefaultBlogMeta } from "lib/seo/meta-tags";
import Head from "next/head";

const Projects = (props) => {
  return (
    <>
      <Head>
        <title>{PageTitle.PROJECTS}</title>
        {getOGTags(
          PageTitle.PROJECTS,
          DefaultBlogMeta.DESCRIPTION,
          DefaultBlogMeta.URL + "/projects"
        )}
      </Head>
      <h1 className="text-center coming-soon">Coming Soon!</h1>
    </>
  );
};

export default Projects;
