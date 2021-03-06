import { FC, useState, useEffect } from "react";
import Axios from "axios";

import HTTPClient from "@config/request";

import { HeaderComponent } from "@components/common";
import {
  CardListMembers,
  CardProfileMember,
  CardActivityFeedMember,
} from "@components/Home";

import { IMemberProps } from "@interfaces/IMemberProps";
import { IMemberProgramsProps } from "@interfaces/IMemberProgramsProps";
import { ILevelMemberProps } from "@interfaces/ILevelMemberProps";
import { IActivityProps } from "@interfaces/IActivityProps";

import "./styles.css";

const HomePage: FC = () => {
  const [listMembers, setListMembers] = useState<IMemberProps[]>();
  const [listActivitiesMember, setListActivitiesMember] =
    useState<IActivityProps[]>();
  const [memberActive, setMemberActive] = useState<IMemberProps | null>();
  const [memberPrograms, setMemberPrograms] = useState<IMemberProgramsProps>();
  const [levelMember, setLevelMember] = useState<ILevelMemberProps>();
  const [nextLevel, setNextLevel] = useState<ILevelMemberProps>();
  const [cardsDetailsMember, setCardsDetailsMember] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string>();

  const getImageBackground = async () => {
    try {
      const { data } = await Axios.get(
        "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"
      );
      setImageURL(`https://www.bing.com${data.images[0].url}`)
    } catch (e) {
      console.log(e);
    }
  };

  const getListMembers = async () => {
    try {
      const { data } = await HTTPClient.get("/users");
      setListMembers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getImageBackground();
    getListMembers();
  }, []);

  const getMemberByID = async (id: string) => {
    try {
      const { data } = await HTTPClient.get(`/users/${id}`);
      setMemberActive(data);
      getProgramsMemberByProgramID(data.programId);
      getLevelMemberByID(data.levelId);
    } catch (e) {
      console.log(e);
    }
  };

  const getProgramsMemberByProgramID = async (programId: string) => {
    try {
      const { data } = await HTTPClient.get(`/programs/${programId}`);
      setMemberPrograms(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getLevelMemberByID = async (levelId: string) => {
    try {
      const { data } = await HTTPClient.get(`/levels/${levelId}`);
      getProgramsMemberByID(data, data.programId);
    } catch (e) {
      console.log(e);
    }
  };

  const getProgramsMemberByID = async (
    dataLevelMember: ILevelMemberProps,
    id: string
  ) => {
    try {
      const { data } = await HTTPClient.get(`/programs/${id}/levels`);
      if (dataLevelMember) {
        setLevelMember(dataLevelMember);
        const dataNextLevel = data.filter(
          (item: any) => item.order > dataLevelMember.order
        );
        setNextLevel(dataNextLevel[0]);
        setCardsDetailsMember(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getActivitiesMemberByID = async (id: string) => {
    try {
      const { data } = await HTTPClient.get(`/users/${id}/activities`);
      console.log(data, "activities");
      setListActivitiesMember(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelectMember = (member: IMemberProps) => {
    if (memberActive && member.id === memberActive.id) {
      setMemberActive(null);
      setCardsDetailsMember(false);
    } else {
      getMemberByID(member.id);
      getActivitiesMemberByID(member.id);
    }
  };

  return (
    <div className="container-home">
      <HeaderComponent />

      <div
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
        className="container-cards-home"
      >
        <div className="content-cards-home">
          <CardListMembers
            listMembers={listMembers}
            actionsSelectMember={(member) => handleSelectMember(member)}
            active={memberActive?.id}
          />

          {cardsDetailsMember && (
            <CardProfileMember
              memberActive={memberActive}
              memberPrograms={memberPrograms}
              levelMember={levelMember}
              nextLevel={nextLevel}
            />
          )}

          {cardsDetailsMember && (
            <CardActivityFeedMember
              listActivitiesMember={listActivitiesMember}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
