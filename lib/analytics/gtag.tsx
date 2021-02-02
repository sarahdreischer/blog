export const enableGoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-HMK8RHT141`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HMK8RHT141');
    `,
        }}
      />
    </>
  );
};
