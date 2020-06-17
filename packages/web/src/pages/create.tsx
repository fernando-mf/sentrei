import {NextPage} from "next";
import Router from "next/router";
import * as React from "react";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import {includeDefaultNamespaces} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Loader from "@sentrei/ui/components/Loader";

import SpaceCreate from "@sentrei/ui/components/SpaceCreate";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const Create: NextPage = () => {
  const {user} = React.useContext(GlobalContext);

  React.useEffect(() => {
    analytics().setCurrentScreen("dashboard");
  }, []);

  if (user === undefined) {
    return <Loader />;
  }

  if (!user) {
    Router.push("/");
  }

  return (
    <>
      <SentreiAppHeader />
      <SpaceCreate />
    </>
  );
};

Create.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(),
  };
};

export default Create;
