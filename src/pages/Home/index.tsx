import { FC, useState, useEffect } from "react";

import HTTPClient from "../../config/request";

import { HeaderComponent } from "../../components/common";
import {
  CardListMembers,
  CardProfileMember,
  CardActivityFeedMember,
} from "../../components/Home";

import "./styles.css";

interface IListMembersProps {
  balance: {
    currency: number;
    miles: number;
    points: number;
  };
  id: string;
  image: any;
  name: string;
}

const HomePage: FC = () => {
  const [listMembers, setListMembers] = useState<IListMembersProps[]>();

  const getListMembers = async () => {
    try {
      const { data } = await HTTPClient.get("/users");
      setListMembers(data);
    } catch (e) {
      console.log(e, "error de list");
    }
  };

  useEffect(() => {
    getListMembers();
  }, []);

  return (
    <div className="container-home">
      <HeaderComponent />

      <div className="container-cards-home">
        <div className="content-cards-home">
          <CardListMembers listMembers={listMembers} />

          <CardProfileMember />

          <CardActivityFeedMember />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
