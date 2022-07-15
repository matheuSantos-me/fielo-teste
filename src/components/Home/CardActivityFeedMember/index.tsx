import { FC } from "react";

import { IActivityProps } from "@interfaces/IActivityProps";
import "./styles.css";

interface ICardActivityFeedMemberProps {
  listActivitiesMember?: Array<IActivityProps>;
}

const CardActivityFeedMember: FC<ICardActivityFeedMemberProps> = ({
  listActivitiesMember,
}) => {
  return (
    <div className="container-card-activity-feed-member">
      <div className="content-header">
        <h3 className="title-feed">Activity Feed</h3>

        <p className="description-feed">Show Filters</p>
      </div>

      <div className="container-list-activities">
        {listActivitiesMember?.map((activity: IActivityProps) => (
          <div className="container-activity">
            <p className="date-activity">{activity.date}</p>

            <p className="description-activity">{activity.description}</p>

            <div className="divider-feed" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardActivityFeedMember;
