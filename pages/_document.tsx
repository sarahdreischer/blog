import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "lib/analytics/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `,
            }}
          />
          <link
            rel="icon"
            href="/favicons/favicon-48x48.ico"
            sizes="48x48"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="/favicons/favicon-32x32.ico"
            sizes="32x32"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="/favicons/favicon-16x16.ico"
            sizes="16x16"
            type="image/x-icon"
          />
          <meta content="68063a32bf98d316" name="yandex-verification" />
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
