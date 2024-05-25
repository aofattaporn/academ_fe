import moment from "moment";
import AvatarProject from "../../../../components/AvatarProject/AvatarProject";
import { ProjectProfile, Size } from "../../../../types/ProjectType";

type ProjectBoxItemProps = {
  projectProfile: ProjectProfile;
  endDate: string;
};

const ProjectBoxItem = ({ projectProfile, endDate }: ProjectBoxItemProps) => {
  return (
    <div className="flex align-middle gap-4 p-2 cursor-pointer">
      <AvatarProject
        isLoading={false}
        size={Size.medium}
        color={projectProfile.avatarColor}
        projectName={projectProfile.projectName}
      />

      <div>
        <h4 className="font-semibold">{projectProfile.projectName}</h4>
        {endDate ? (
          moment(endDate).isSame(moment(), "day") ? (
            <div className="my-1 text-center col-span-1 text-red-500 font-semibold">
              <p>Today</p>
            </div>
          ) : (
            <div className="my-1 text-center col-span-1 text-gray-300">
              {moment(endDate).format("ll")}
            </div>
          )
        ) : (
          <div className="my-1 text-center col-span-1"></div>
        )}
      </div>
    </div>
  );
};

export default ProjectBoxItem;
