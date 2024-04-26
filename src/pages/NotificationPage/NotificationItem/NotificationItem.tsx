import moment from "moment";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { Size } from "../../../types/ProjectType";

const NotificationItem = () => {
  return (
    <div className="px-12 bg-primary-subtle py-4">
      <div className="mb-2 flex items-center gap-4">
        <AvatarProject
          isLoading={false}
          size={Size.small}
          projectName="Echo Echo"
          color="#AF8AE2"
        ></AvatarProject>
        <p className="font-bold">Echo Echo</p>
      </div>
      <h3 className="font-bold  text-lg">
        Please connect project in Software Testing
      </h3>
      <p className="text-gray-400">{moment().format("LLL")}</p>
    </div>
  );
};

export default NotificationItem;
