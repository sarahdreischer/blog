import Document, { Html, Head, Main, NextScript } from "next/document";
import { enableGoogleAnalytics } from "lib/analytics/gtag";
import { getFaviconLinks } from "lib/seo/favicon";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {getFaviconLinks()}
          {enableGoogleAnalytics()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
