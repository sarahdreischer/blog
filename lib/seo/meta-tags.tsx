export const ROOT_LINK = "https://softwarewithsarah.com";

export const getOpenGraphTags = (
  title: string,
  description: string,
  subRoute: string = "",
  type: string = "blog"
) => {
  const route = subRoute === "" ? ROOT_LINK : `${ROOT_LINK}/${subRoute}`;
  return (
    <>
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={route} property="og:url" />
      <meta content={type} property="og:type" />
    </>
  );
};
