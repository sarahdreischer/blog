export enum PageTitle {
  HOME = "Software With Sarah | Simple Software Tutorials",
  PROJECTS = "Software With Sarah | Projects",
  BLOG = "Software With Sarah | Blog",
  ABOUT = "Software With Sarah | About",
}

export enum DefaultBlogMeta {
  DESCRIPTION = "A blog to guide aspiring developers through the jungle of technology through easy tutorials and projects for your free time.",
  URL = "https://softwarewithsarah.com",
  TITLE_PREFIX = "Software With Sarah | ",
}

export const getOGTags = (
  title: string,
  description: string,
  route: string,
  type: string = "blog"
) => {
  return (
    <>
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={route} property="og:url" />
      <meta content={type} property="og:type" />
    </>
  );
};
