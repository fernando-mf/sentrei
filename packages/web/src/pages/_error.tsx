import {NextPageContext} from "next/dist/next-server/lib/utils";
import React from "react";

function CustomError({
  statusCode,
}: {
  statusCode: number | null | undefined;
}): JSX.Element {
  return (
    <figure>
      <img
        alt="Showing a properly cat according the status code"
        width="100%"
        src={`https://http.cat/${statusCode}`}
      />
      <figcaption>
        <h1>{statusCode}</h1>
      </figcaption>
    </figure>
  );
}

function getInitialProps({
  res,
  err,
}: NextPageContext): {
  namespacesRequired: string[];
  statusCode: number | null | undefined;
} {
  const namespacesRequired = ["common"];
  let statusCode;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = null;
  }
  return {namespacesRequired, statusCode};
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;
