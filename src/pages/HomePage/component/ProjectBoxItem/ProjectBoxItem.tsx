import moment from "moment";
import AvatarProject from "../../../../components/AvatarProject/AvatarProject";
import ProjectAlertItem from "../../../../components/Labels/ProjectAlertItem";
import { ProjectProfile, Size } from "../../../../types/ProjectType";

type ProjectBoxItemProps = {
  projectProfile: ProjectProfile;
  endDate: Date;
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
        <p className="text-gray-300">{moment(endDate).format("l")}</p>
      </div>
      <ProjectAlertItem projectEndDate={endDate} isArchive={false} />
    </div>
  );
};

export default ProjectBoxItem;
