import React, {ReactElement} from "react";
import Document, {Html, Main, NextScript} from "next/document";
import Head from "next/head";
import {
  DocumentInitialProps,
  RenderPageResult,
} from "next/dist/next-server/lib/utils";
import {ServerStyleSheets} from "@material-ui/core/styles";
import Theme from "@sentrei/ui/containers/Theme";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={Theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
    originalRenderPage({
      enhanceApp: App => (props): ReactElement =>
        sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
