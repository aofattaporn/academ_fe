import moment from "moment";
import AvatarProject from "../../../../components/AvatarProject/AvatarProject";
import { ProjectProfile, Size } from "../../../../types/ProjectType";
import ProjectAlertItem from "../../../../components/Labels/ProjectAlertItem";

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
        <p className="text-gray-300">{moment(endDate).format("ll")}</p>
      </div>
      <ProjectAlertItem projectEndDate={endDate} isArchive={false} />
    </div>
  );
};

export default ProjectBoxItem;
