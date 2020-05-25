/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint react/jsx-props-no-spreading: 0 */

import {get, set} from "lodash";
import {NextPageContext} from "next";
import PropTypes from "prop-types";
import React from "react";

import createAuthUserInfo, {
  createAuthUser,
} from "@sentrei/common/utils/auth/createAuthUserInfo";
import useAuthUserInfo, {
  AuthUserInfoContext,
} from "@sentrei/ui/hooks/useAuthUserInfo";

// Gets the authenticated user from the Firebase JS SDK, when client-side,
// or from the request object, when server-side. Add the AuthUserInfo to
// context.
export default function WithAuthUser(ComposedComponent: any): any {
  const WithAuthUserComp = (props: any): any => {
    const {AuthUserInfo, ...otherProps} = props;

    const {user: firebaseUser} = useAuthUserInfo();
    const AuthUserFromClient = createAuthUser(firebaseUser);
    const {AuthUser: AuthUserFromSession, token} = AuthUserInfo;
    const AuthUser = AuthUserFromClient || AuthUserFromSession || null;

    return (
      <AuthUserInfoContext.Provider value={{AuthUser, token}}>
        <ComposedComponent {...otherProps} />
      </AuthUserInfoContext.Provider>
    );
  };

  WithAuthUserComp.getInitialProps = async (
    ctx: NextPageContext,
  ): Promise<{
    AuthUserInfo: any;
  }> => {
    const {req, res} = ctx;

    // Get the AuthUserInfo object.
    let AuthUserInfo;
    if (typeof window === "undefined") {
      // If server-side, get AuthUserInfo from the session in the request.
      // Don't include server middleware in the client JS bundle. See:
      // https://arunoda.me/blog/ssr-and-server-only-modules

      // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
      const {addSession} = require("@sentrei/web/middleware/cookieSession");
      addSession(req, res);
      AuthUserInfo = createAuthUserInfo({
        firebaseUser: get(req, "session.decodedToken", null),
        token: get(req, "session.token", null),
      });
    } else {
      // If client-side, get AuthUserInfo from stored data. We store it
      // in _document.js. See:
      // https://github.com/zeit/next.js/issues/2252#issuecomment-353992669
      try {
        let jsonData = null;
        const document = window?.document;
        const textContent = document?.getElementById("__MY_AUTH_USER_INFO")
          ?.textContent;
        if (textContent) {
          jsonData = JSON.parse(textContent);
        }
        if (jsonData) {
          AuthUserInfo = jsonData;
        } else {
          // Use the default (unauthed) user info if there's no data.
          AuthUserInfo = createAuthUserInfo();
        }
      } catch (e) {
        // If there's some error, use the default (unauthed) user info.
        AuthUserInfo = createAuthUserInfo();
      }
    }

    // Explicitly add the user to a custom prop in the getInitialProps
    // context for ease of use in child components.
    set(ctx, "myCustomData.AuthUserInfo", AuthUserInfo);

    // Evaluate the composed component's getInitialProps().
    let composedInitialProps = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }

    return {
      ...composedInitialProps,
      AuthUserInfo,
    };
  };

  WithAuthUserComp.displayName = `WithAuthUser(${ComposedComponent.displayName})`;

  WithAuthUserComp.propTypes = {
    AuthUserInfo: PropTypes.shape({
      AuthUser: PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        emailVerified: PropTypes.bool.isRequired,
      }),
      token: PropTypes.string,
    }).isRequired,
  };

  WithAuthUserComp.defaultProps = {};

  return WithAuthUserComp;
}