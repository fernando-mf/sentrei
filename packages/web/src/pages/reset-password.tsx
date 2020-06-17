import {NextPage} from "next";
import dynamic from "next/dynamic";
import React from "react";

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

const ResetPassword: NextPage = () => {
  React.useEffect(() => {
    analytics().setCurrentScreen("reset-password");
  }, []);

  return (
    <>
      <SentreiHeader sign={false} spy={false} /> <Auth type={authType.reset} />;
    </>
  );
};

ResetPassword.getInitialProps = (): {
  namespacesRequired: string[];
} => {
  return {
    namespacesRequired: includeDefaultNamespaces(),
  };
};

export default ResetPassword;
