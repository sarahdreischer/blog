import Head from 'next/head';
import { getOpenGraphTags, ROOT_LINK } from 'lib/seo/meta-tags';
import { jsonLdScriptProps } from 'react-schemaorg';
import { Person } from 'schema-dts';
import { AboutScreen } from '@screens';

const About = () => {
  return (
    <>
      <Head>
        <title>Software With Sarah | About</title>
        {getOpenGraphTags(
          'Software With Sarah | About',
          'A programming blog to guide aspiring and established developers through the jungle of technology through simple programming tutorials and projects for your free time.',
          'about',
        )}
        <link rel='canonical' href={`${ROOT_LINK}/about`} />
        <script
          {...jsonLdScriptProps<Person>({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sarah Dreischer',
            url: 'https://softwarewithsarah.com/about',
          })}
        />
      </Head>
      <AboutScreen />
    </>
  );
};

export default About;
