/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-throw-literal */

import firebase from "firebase/app";
import {get} from "lodash";

import Router from "next/router";
import PropTypes from "prop-types";
import React from "react";

import Link from "@sentrei/ui/components/Link";

import withAuthUser from "@sentrei/web/components/HOC/withAuthUser";
import withAuthUserInfo from "@sentrei/web/components/HOC/withAuthUserInfo";

type Inputs = {
  spaceId: string;
  title: string;
};

const SpacesCreate = (props: any): any => {
  const {AuthUserInfo} = props;
  const authUser = get(AuthUserInfo, "AuthUser");
  let firstInput: HTMLInputElement | null = null;

  const initial: Inputs = {
    spaceId: "",
    title: "",
  };

  const [inputs, setInputs] = React.useState(initial);

  const handleSubmit = async (e: React.ChangeEvent<any>): Promise<void> => {
    e.preventDefault();
    try {
      if (inputs.spaceId.length === 0) {
        throw `space ID can't be empty`;
      } else if (inputs.title.length === 0) {
        throw `title can't be empty`;
      }

      // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
      const match = inputs.spaceId.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      if (!match || match.length > 1) {
        throw `space ID can only contain letters, numbers and hyphens`;
      }
      const db = firebase.firestore();
      const ref = db.collection("spaces").doc(inputs.spaceId);
      const snap = await ref.get();
      if (snap.exists) {
        throw `a space with that ID already exists`;
      }
      await ref.set({
        spaceId: inputs.spaceId,
        title: inputs.title,
        uid: authUser.id,
      });
      Router.push("/spaces");
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<any>): void => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    if (!authUser) {
      Router.push("/");
    } else {
      firstInput?.focus();
    }
  }, []);

  return (
    <>
      {!authUser ? (
        <></>
      ) : (
        <div>
          <div>create a new space</div>
          <form onSubmit={handleSubmit}>
            <p>
              <input
                type="text"
                id="spaceId"
                name="spaceId"
                onChange={handleInputChange}
                value={inputs.spaceId}
                // eslint-disable-next-line no-return-assign
                ref={(r): HTMLInputElement | null => (firstInput = r)}
              />
            </p>
            <p>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleInputChange}
                value={inputs.title}
              />
            </p>
            <p>
              <button type="submit">[ create ]</button>
            </p>
          </form>
          <p>
            <Link href="/spaces">back to spaces</Link>
          </p>
        </div>
      )}
    </>
  );
};

SpacesCreate.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired,
    }),
    token: PropTypes.string,
  }),
};

SpacesCreate.defaultProps = {
  AuthUserInfo: null,
};

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(SpacesCreate));
