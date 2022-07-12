import React, { useEffect } from "react";
import { HeaderComponent } from '../../components/common'

import "./styles.css";

const HomePage = () => {
  return (
    <div className="container-home">
      <HeaderComponent />

      <div className="content-cards-home"></div>
    </div>
  );
};

export default HomePage;
