/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {NextPage} from "next";
import Router from "next/router";
import * as React from "react";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import {includeDefaultNamespaces, useTranslation} from "@sentrei/common/i18n";
import {analytics} from "@sentrei/common/utils/firebase";
import Loader from "@sentrei/ui/components/Loader";
import SpaceDashboard from "@sentrei/ui/components/SpaceDashboard";

import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const Dashboard: NextPage = () => {
  const {user} = React.useContext(GlobalContext);
  const {t} = useTranslation();

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
      <SpaceDashboard userId={user!.uid} />
    </>
  );
};

Dashboard.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(["index"]),
  };
};

export default Dashboard;
