import { FC } from "react";

import "./styles.css";

interface iProps {}

const CardProfileMember: FC<iProps> = ({}) => {
  return (
    <div className="container-card-profile-member">
      <div className="content-card-profile-member">
        <img
          src="https://www.bing.com/th?id=OHR.BabyLemons_PT-BR4233780559_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
          className="avatar"
        />
        <h3>Cameron Williamson</h3>
        <p></p>

        <div className="divider" />

        <div className="container-values">
          <div className="content-value">
            <div>
              <span className="text-value">1540</span>
            </div>

            <p className="label-value">Points</p>
          </div>

          <div className="content-value">
            <span className="text-value">10540</span>

            <p className="label-value">Miles</p>
          </div>

          <div className="content-value">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="icon-value">$</span>
              <span className="text-value">1540</span>
            </div>

            <p className="label-value">Currency</p>
          </div>
        </div>

        <div className="divider" />

        <div>
          <h3>Gold</h3>

          <p>Next Tier <p>Platinum</p></p>
        </div>

        <div className="divider" />
      </div>
    </div>
  );
};

export default CardProfileMember;
