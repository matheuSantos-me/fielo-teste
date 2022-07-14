import { FC } from "react";

import { IMemberProps } from "@interfaces/IMemberProps";

import "./styles.css";

interface ICardListMembersProps {
  listMembers: Array<IMemberProps> | undefined;
  actionsSelectMember: (member: IMemberProps) => void;
  active?: string;
}

const CardListMembers: FC<ICardListMembersProps> = ({
  listMembers,
  actionsSelectMember,
  active,
}) => {
  return (
    <div className="container-card-list-members">
      <div className="content-labels">
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0 8px 0 0" }} className="label">
            Pos.
          </p>
          <p className="label">Member</p>
        </div>

        <p style={{ margin: "0 6px 0 0" }} className="label">
          Points
        </p>
      </div>

      <div className="container-list-member">
        {listMembers?.map((member: IMemberProps, index: number) => (
          <div
            className={
              active === member.id
                ? "container-profile-active"
                : "container-profile"
            }
            key={index}
            onClick={() => actionsSelectMember(member)}
          >
            <div className="content-profile">
              <p style={{ margin: "0 6px" }} className="text-member">
                {index + 1}
              </p>

              {member.image ? (
                <img src={member.image} className="picture-profile" />
              ) : (
                <div className="avatar-profile">
                  <p className="text-avatar-profile">
                    {member.name.slice(0, 1)}
                  </p>
                </div>
              )}

                <p className="text-member">{member.name}</p>
            </div>

            <p style={{ margin: "0 16px 0 0", width: '9%' }} className="text-member">
              {member.balance.points}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListMembers;
