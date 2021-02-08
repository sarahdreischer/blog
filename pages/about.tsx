import Head from "next/head";
import { getOGTags, ROOT_LINK } from "lib/seo/meta-tags";
import { AboutPage } from "../containers/about";

const About = () => {
  return (
    <>
      <Head>
        <title>Software With Sarah | About</title>
        {getOGTags(
          "Software With Sarah | About",
          "A programming blog to guide aspiring and established developers through the jungle of technology through simple programming tutorials and projects for your free time.",
          `${ROOT_LINK}/about`
        )}
        <link rel="canonical" href={`${ROOT_LINK}/about`} />
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
