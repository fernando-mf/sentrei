/* eslint-disable @typescript-eslint/no-explicit-any */
import {ServerStyleSheets as MaterialUiServerStyleSheets} from "@material-ui/core/styles";
import {get} from "lodash/object";
import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import {ServerStyleSheet as StyledComponentSheets} from "styled-components";

import Props from "@sentrei/common/interfaces/Document";
import SentreiMeta from "@sentrei/web/components/SentreiMeta";
import "@sentrei/common/utils/sentry";
import "@sentrei/common/utils/registerExceptionHandler";

// TODO: Generic type 'NextDocument<P>' requires between 0 and 1 type arguments.ts(2707)
// @ts-ignore
export default class Document extends NextDocument<Props, {}> {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<{
    AuthUserInfo: any;
    styles: JSX.Element[];
    html: string;
    head?: (JSX.Element | null)[] | undefined;
  }> {
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

      const AuthUserInfo = get(ctx, "myCustomData.AuthUserInfo", null);

      return {
        ...initialProps,
        AuthUserInfo,
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
    // @ts-ignore
    const {AuthUserInfo} = this.props;

    return (
      <Html lang="en">
        <Head>
          <SentreiMeta />
          <script src="https://cdn.jsdelivr.net/npm/first-input-delay@0.1.3/dist/first-input-delay.min.js" />
          <script
            id="__MY_AUTH_USER_INFO"
            type="application/json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(AuthUserInfo, null, 2),
            }}
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
