/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase/app";
import "firebase/firestore";
import {get} from "lodash";

import Router from "next/router";
import PropTypes from "prop-types";
import React from "react";

import Loader from "@sentrei/ui/components/Loader";
import usePagination from "@sentrei/ui/hooks/usePagination";

import withAuthUser from "../utils/pageWrappers/withAuthUser";
import withAuthUserInfo from "../utils/pageWrappers/withAuthUserInfo";

const Spaces = (props: any): any => {
  const {AuthUserInfo} = props;
  const authUser = get(AuthUserInfo, "AuthUser");

  React.useEffect(() => {
    if (!authUser) {
      Router.push("/");
    }
  });

  const db = firebase.firestore();
  const {loading, loadingMore, hasMore, items, loadMore} = usePagination(
    db
      .collection("spaces")
      .where("uid", "==", authUser?.id || "")
      .orderBy("spaceId", "asc"),
    {
      limit: 10,
    },
  );

  return (
    <>
      {!authUser ? (
        <Loader />
      ) : (
        <>
          <div>
            <Typography>Spaces</Typography>
            {loading && <Loader />}
            {items.map((item: any) => (
              <p key={item.index}>
                {JSON.stringify(item.data() || {}, null, 2)}
              </p>
            ))}
            {hasMore && !loadingMore && (
              <Button onClick={loadMore}>more</Button>
            )}
          </div>
        </>
      )}
    </>
  );
};

Spaces.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired,
    }),
    token: PropTypes.string,
  }),
};

Spaces.defaultProps = {
  AuthUserInfo: null,
};

export default withAuthUser(withAuthUserInfo(Spaces));
