import React, { FC } from "react";

import "./styles.css";

interface ICardListMembersProps {
  listMembers?: any;
}

const CardListMembers: FC<ICardListMembersProps> = ({ listMembers }) => {
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
        {listMembers.map((item: any) => (
          <div className="container-profile">
            <div className="content-profile">
              <p style={{ margin: "0 6px" }} className="text-member">
                1
              </p>

              <img
                src="https://www.bing.com//th?id=OHR.SpiralHill_PT-BR3566517069_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
                className="picture-profile"
              />

              <p className="text-member">Cameron Williamson</p>
            </div>

            <p style={{ margin: '0 16px 0 0' }} className="text-member">20</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListMembers;
