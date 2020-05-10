/* eslint-disable @typescript-eslint/no-explicit-any */
import {ServerStyleSheets as MaterialUiServerStyleSheets} from "@material-ui/core/styles";
import {DocumentInitialProps} from "next/dist/next-server/lib/utils";
import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import {ServerStyleSheet as StyledComponentSheets} from "styled-components";

import Theme from "@sentrei/ui/containers/Theme";
import "@sentrei/web/utils/registerExceptionHandler";

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): any =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any): any =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={Theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Helvetica:300,400,500,700&display=swap"
          />
          <script src="https://cdn.jsdelivr.net/npm/first-input-delay@0.1.3/dist/first-input-delay.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
