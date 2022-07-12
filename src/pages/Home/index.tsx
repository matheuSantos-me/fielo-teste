import React, { useEffect } from "react";
import { HeaderComponent } from "../../components/common";
import {
  CardListMembers,
  CardProfileMember,
  CardActivityFeedMember,
} from "../../components/Home";

import "./styles.css";

const HomePage = () => {
  return (
    <div className="container-home">
      <HeaderComponent />

      <div className="container-cards-home">
        <div className="content-cards-home">
          <CardListMembers />

          <CardProfileMember />

          <CardActivityFeedMember />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
