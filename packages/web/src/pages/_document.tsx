/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import NextDocument from "next/document";
import {ServerStyleSheet as StyledComponentSheets} from "styled-components";
import {ServerStyleSheets as MaterialUiServerStyleSheets} from "@material-ui/core/styles";

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: any,
  ): Promise<{
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
          enhanceApp: (App: any) => (props: any) =>
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
}
