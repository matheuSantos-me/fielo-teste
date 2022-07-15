import { FC, useState, useEffect } from "react";

import HTTPClient from "@config/request";

import { HeaderComponent } from "@components/common";
import {
  CardListMembers,
  CardProfileMember,
  CardActivityFeedMember,
} from "@components/Home";

import { IMemberProps } from "@interfaces/IMemberProps";

import "./styles.css";

const HomePage: FC = () => {
  const [listMembers, setListMembers] = useState<IMemberProps[]>();
  const [memberActive, setMemberActive] = useState<IMemberProps | null>();
  const [cardsDetailsMember, setCardsDetailsMember] = useState<boolean>(true);

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

  const handleSelectMember = (member: IMemberProps) => {
    if (memberActive && member === memberActive) {
      setMemberActive(null);
      setCardsDetailsMember(false);
    } else {
      setMemberActive(member);
      setCardsDetailsMember(true);
    }
  };

  return (
    <div className="container-home">
      <HeaderComponent />

      <div className="container-cards-home">
        <div className="content-cards-home">
          <CardListMembers
            listMembers={listMembers}
            actionsSelectMember={(member) => handleSelectMember(member)}
            active={memberActive?.id}
          />

          {cardsDetailsMember && <CardProfileMember />}

          {cardsDetailsMember && <CardActivityFeedMember />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
