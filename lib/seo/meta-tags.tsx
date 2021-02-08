export const ROOT_LINK = "https://softwarewithsarah.com";

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
