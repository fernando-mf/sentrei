import React from "react";

import {i18n} from "@sentrei/common/i18n";

import Props from "@sentrei/common/types/components/Profile";
import Profile from "@sentrei/ui/components/Profile";

export default function SentreiProfile({userEmail}: Props): JSX.Element {
  return <Profile key={i18n.language} userEmail={userEmail} />;
}
