import React, { FC } from "react";

import "./styles.css";

const CardProfileMember: FC = () => {
  return (
    <div className="container-card-profile-member">
      <img />

      <div className="divider" />

      <div>
        <div>
          <div>
            <span>$1540</span>
          </div>
          <p>Points</p>
        </div>

        <div>
          <span>10540</span>
          <p>Miles</p>
        </div>

        <div>
          <div>
            <span>1540</span>
          </div>
          <p>Currency</p>
        </div>
      </div>

      <div className="divider" />
    </div>
  );
};

export default CardProfileMember;
