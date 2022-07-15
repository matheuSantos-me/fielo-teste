import { FC } from "react";

import { IMemberProps } from "@interfaces/IMemberProps";
import { IMemberProgramsProps } from "@interfaces/IMemberProgramsProps";
import { ILevelMemberProps } from "@interfaces/ILevelMemberProps";

import "./styles.css";

interface ICardProfileMemberProps {
  memberActive?: IMemberProps | null;
  memberPrograms?: IMemberProgramsProps;
  levelMember?: ILevelMemberProps;
  nextLevel?: ILevelMemberProps;
}

const CardProfileMember: FC<ICardProfileMemberProps> = ({
  memberActive,
  memberPrograms,
  levelMember,
  nextLevel,
}) => {
  return (
    <div className="container-card-profile-member">
      <div className="content-card-profile-member">
        {memberActive?.image ? (
          <img src={memberActive?.image} className="avatar" />
        ) : (
          <div className="avatar-text">
            <p className="text-avatar-profile">
              {memberActive?.name.slice(0, 1)}
            </p>
          </div>
        )}

        <h3 className="name-member">{memberActive?.name}</h3>

        <p className="text-type-program">{memberPrograms?.name}</p>

        <div className="divider" />

        <div className="container-values">
          <div className="content-value">
            <div>
              <span className="text-value">{memberActive?.balance.points}</span>
            </div>

            <p className="label-value">Points</p>
          </div>

          <div className="content-value">
            <span className="text-value">{memberActive?.balance.miles}</span>

            <p className="label-value">Miles</p>
          </div>

          <div className="content-value">
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="icon-value">$</span>

              <span className="text-value">
                {memberActive?.balance.currency.toLocaleString("en-US", {
                  currency: "USD",
                })}
              </span>
            </div>

            <p className="label-value">Currency</p>
          </div>
        </div>

        <div className="divider" />

        <div className="container-level">
          <div className="content-lavel">
            <h3 className="title-level">{levelMember?.name}</h3>

            {levelMember && levelMember?.order < 3 && (
              <>
                <p className="text-next-level">
                  Next Tier{" "}
                  <p style={{ marginLeft: "4px", color: "#16325C" }}>
                    {nextLevel?.name}
                  </p>
                </p>
              </>
            )}
          </div>

          <div className="content-steps">
            <div
              className={
                levelMember && levelMember?.order < 1
                  ? "border-step-active"
                  : "border-step"
              }
            >
              {levelMember && levelMember?.order < 1 && (
                <div className="step-active" />
              )}
            </div>

            <div className="divider-step" />

            <div
              className={
                levelMember?.order === 1 ? "border-step-active" : "border-step"
              }
            >
              {levelMember?.order === 1 && <div className="step-active" />}
            </div>

            <div className="divider-step" />

            <div
              className={
                levelMember?.order === 2 ? "border-step-active" : "border-step"
              }
            >
              {levelMember?.order === 2 && <div className="step-active" />}
            </div>

            <div className="divider-step" />

            <div
              className={
                levelMember?.order === 3 ? "border-step-active" : "border-step"
              }
            >
              {levelMember?.order === 3 && <div className="step-active" />}
            </div>
          </div>
        </div>

        <div className="divider" />
      </div>
    </div>
  );
};

export default CardProfileMember;
