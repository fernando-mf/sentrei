import React, {FunctionComponent} from "react";

import Footer from "@sentrei/ui/components/Footer";
import NavBar from "@sentrei/ui/components/NavBar";

const Landing: FunctionComponent = ({children}) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Landing;
