import {NextPage} from "next";
import dynamic from "next/dynamic";
import Router from "next/router";
import React from "react";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import {includeDefaultNamespaces} from "@sentrei/common/i18n";
import authType from "@sentrei/common/types/authType";
import {analytics} from "@sentrei/common/utils/firebase";
import Loader from "@sentrei/ui/components/Loader";

const Auth = dynamic(() => import("@sentrei/ui/components/Auth"), {
  loading: () => <Loader />,
  ssr: false,
});

const SentreiHeader = dynamic(
  () => import("@sentrei/web/components/SentreiHeader"),
  {
    loading: () => <Loader />,
    ssr: false,
  },
);

const Signup: NextPage = () => {
  const {user} = React.useContext(GlobalContext);

  React.useEffect(() => {
    analytics().setCurrentScreen("signup");
  }, []);

  if (user === undefined) {
    return <Loader />;
  }

  if (user) {
    Router.push("/dashboard");
  }

  return (
    <>
      <SentreiHeader sign={false} spy={false} />
      <Auth type={authType.signup} />;
    </>
  );
};

Signup.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default Signup;
