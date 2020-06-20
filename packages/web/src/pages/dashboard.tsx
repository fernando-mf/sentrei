/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {NextPage} from "next";
import Router from "next/router";
import * as React from "react";
import useSWR from "swr";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import {includeDefaultNamespaces} from "@sentrei/common/i18n";
import {listUserSpaces} from "@sentrei/common/services/spaces";
import {analytics} from "@sentrei/common/utils/firebase";
import Loader from "@sentrei/ui/components/Loader";
import SpaceDashboard from "@sentrei/ui/components/SpaceDashboard";
import SentreiAppHeader from "@sentrei/web/components/SentreiAppHeader";

const Dashboard: NextPage = () => {
  const {user} = React.useContext(GlobalContext);
  const {data, error} = useSWR(() => user!.uid, listUserSpaces);

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
      <SpaceDashboard data={data} error={error} userId={user!.uid} />
    </>
  );
};

Dashboard.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(),
  };
};

export default Dashboard;
