/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint react/jsx-props-no-spreading: 0 */
import {get} from "lodash";
import {NextPageContext} from "next";
import PropTypes from "prop-types";
import React from "react";

import AuthUserInfoContext from "@sentrei/ui/context/AuthUserInfoContext";

// Provides an AuthUserInfo prop to the composed component.
export default (ComposedComponent: any) => {
  const WithAuthUserInfoComp = (props: any) => {
    const {AuthUserInfo: AuthUserInfoFromSession, ...otherProps} = props;
    return (
      <AuthUserInfoContext.Consumer>
        {(AuthUserInfo: any) => (
          <ComposedComponent
            {...otherProps}
            AuthUserInfo={AuthUserInfo || AuthUserInfoFromSession}
          />
        )}
      </AuthUserInfoContext.Consumer>
    );
  };

  WithAuthUserInfoComp.getInitialProps = async (ctx: NextPageContext) => {
    const AuthUserInfo = get(ctx, "myCustomData.AuthUserInfo", null);

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

  WithAuthUserInfoComp.displayName = `WithAuthUserInfo(${ComposedComponent.displayName})`;

  WithAuthUserInfoComp.propTypes = {
    // eslint-disable-next-line react/require-default-props
    AuthUserInfo: PropTypes.shape({
      AuthUser: PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        emailVerified: PropTypes.bool.isRequired,
      }),
      token: PropTypes.string,
    }),
  };

  WithAuthUserInfoComp.defaultProps = {};

  return WithAuthUserInfoComp;
};
