import { FC } from "react";

import { IListMembersProps } from "@interfaces/IListMembersProps";

import "./styles.css";

interface ICardListMembersProps {
  listMembers: Array<IListMembersProps> | undefined
  actionsSelectMember?: () => void
}

const CardListMembers: FC<ICardListMembersProps> = ({ listMembers, actionsSelectMember }) => {
  return (
    <div className="container-card-list-members">
      <div className="content-labels">
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0 8px 0 0" }} className="label">
            Pos.
          </p>
          <p className="label">Member</p>
        </div>

        <p style={{ margin: '0 6px 0 0'}} className="label">Points</p>
      </div>

      <div className="container-list-member">
        {listMembers?.map((member: IListMembersProps, index: number) => (
          <div className="container-profile" key={index} onClick={actionsSelectMember}>
            <div className="content-profile">
              <p style={{ margin: "0 6px" }} className="text-member">
                {index + 1}
              </p>

              <img
                src={member.image}
                className="picture-profile"
              />

              <p className="text-member">{member.name}</p>
            </div>

            <p style={{ margin: '0 16px 0 0' }} className="text-member">{member.balance.points}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListMembers;
