import React from "react";
import {GlobalStyle} from "../styles/global";
import PrimaryNav from "../components/primary-nav";

const Page = () => {
  return(
    <React.Fragment>
      <GlobalStyle/>
      <PrimaryNav/>
      <div>
        Hello!
      </div>
    </React.Fragment>
  )
};

export default Page;
