import { PageTitle, DefaultBlogMeta, getOGTags } from "lib/seo/meta-tags";
import Head from "next/head";
import { AboutPage } from "../containers/about";

const About = () => {
  return (
    <>
      <Head>
        <title>{PageTitle.ABOUT}</title>
        {getOGTags(
          PageTitle.ABOUT,
          DefaultBlogMeta.DESCRIPTION,
          DefaultBlogMeta.URL + "/projects"
        )}
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
