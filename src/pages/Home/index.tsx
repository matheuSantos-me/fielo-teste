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
          <CardListMembers listMembers={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]} />

          <CardProfileMember />

          <CardActivityFeedMember />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
