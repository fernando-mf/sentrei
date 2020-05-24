/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint react/jsx-props-no-spreading: 0 */
import {get} from "lodash";
import {NextPageContext} from "next";
import PropTypes from "prop-types";
import React from "react";

import {AuthUserInfoContext} from "@sentrei/ui/hooks/useAuthUserInfo";

// Provides an AuthUserInfo prop to the composed component.
export default (ComposedComponent: any): any => {
  const WithAuthUserInfoComp = (props: any): any => {
    const {AuthUserInfo: AuthUserInfoFromSession, ...otherProps} = props;
    return (
      <AuthUserInfoContext.Consumer>
        {(AuthUserInfo: any): JSX.Element => (
          <ComposedComponent
            {...otherProps}
            AuthUserInfo={AuthUserInfo || AuthUserInfoFromSession}
          />
        )}
      </AuthUserInfoContext.Consumer>
    );
  };

  WithAuthUserInfoComp.getInitialProps = async (
    ctx: NextPageContext,
  ): Promise<{
    AuthUserInfo: any;
  }> => {
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
    AuthUserInfo: PropTypes.shape({
      AuthUser: PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        emailVerified: PropTypes.bool.isRequired,
      }),
      token: PropTypes.string,
    }),
  };

  WithAuthUserInfoComp.defaultProps = {
    AuthUserInfo: null,
  };

  return WithAuthUserInfoComp;
};
