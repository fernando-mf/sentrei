import * as React from "react";

import Theme from "@sentrei/ui/containers/Theme";

const Meta = (): JSX.Element => {
  return (
    <>
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
        href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:300,400,500,700&display=swap"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="images/favicon-16x16.png"
      />
      <link rel="manifest" href="images/site.webmanifest" />
      <link
        rel="mask-icon"
        href="images/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content={Theme.palette.primary.main} />
      {/* <link rel="canonical" href={data.canonical_url} />

      <meta name="description" content={data.description} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content={Theme.palette.primary.main} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta property="og:url" content={data.canonical_url} />
      <meta property="og:site_name" content={data.title} />

      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.image} />
      <meta name="twitter:site" content={data.twitter_user} />
      <meta name="twitter:creator" content={data.twitter_user} /> */}
    </>
  );
};

export default Meta;
