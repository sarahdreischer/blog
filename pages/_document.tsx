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
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="yandex-verification" content="68063a32bf98d316" />
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
