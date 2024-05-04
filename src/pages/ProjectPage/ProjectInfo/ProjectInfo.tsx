import { Link, useLocation } from "react-router-dom";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { Project, Size } from "../../../types/ProjectType";
import ProjectSetting from "./SettingModal/ProjectSetting";
import ProjectMember from "./SettingModal/ProjectMember";
import ProjectAlertItem from "../../../components/Labels/ProjectAlertItem";
import ClassNameItem from "../../../components/Labels/ClassNameItem";

type ProjectInfoProps = {
  projectData: Project;
};

const ProjectInfo = ({ projectData }: ProjectInfoProps) => {
  const { projectProfile, views, members } = projectData.projectInfo;
  const location = useLocation();

  const renderViews = () => {
    return views.map((view, index) => (
      <Link
        to={view}
        key={index}
        className={`w-24 flex justify-center cursor-pointer
          ${index === 0 ? "rounded-tl-md" : "rounded-none"}
          ${index === views.length - 1 ? "rounded-tr-md" : "rounded-none"}
          ${
            location.pathname.includes(view)
              ? "bg-primary text-white"
              : "bg-primary-subtle"
          }
        `}
      >
        {view}
      </Link>
    ));
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-4 pt-2">
        <AvatarProject
          projectName={projectProfile.projectName}
          color={projectProfile.avatarColor}
          size={Size.medium}
          isLoading={false}
        />

        <div>
          <div className="flex gap-4 items-center w-full ">
            <h2 className="text-xl font-bold">{projectProfile.projectName}</h2>

            <ProjectSetting projectData={projectData} />
            <ClassNameItem className={projectData.projectInfo.className} />
            <ProjectAlertItem
              projectEndDate={projectData.projectInfo.projectEndDate}
              isArchive={projectData.projectInfo.isArchive}
            />
          </div>
          <div className="flex gap-1 mt-2">{renderViews()}</div>
        </div>
      </div>
      <ProjectMember members={members} />
    </div>
  );
};

export default ProjectInfo;
