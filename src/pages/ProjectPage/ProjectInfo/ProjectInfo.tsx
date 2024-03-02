import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { Project, Size } from "../../../types/ProjectType";

type ProjectInfoProps = {
  projectData: Project;
};

const ProjectInfo = ({ projectData }: ProjectInfoProps) => {
  const { projectProfile, views } = projectData.projectInfo;

  const renderViews = () => {
    return views.map((view, index) => (
      <div
        key={index}
        className={`w-24 bg-primary-subtle flex justify-center cursor-pointer
          ${index === 0 ? "rounded-tl-md" : "rounded-none"}
          ${index === views.length - 1 ? "rounded-tr-md" : "rounded-none"}
        `}
      >
        {view}
      </div>
    ));
  };

  return (
    <>
      <div className="py-2">
        <AvatarProject
          projectName={projectProfile.projectName}
          color={projectProfile.avatarColor}
          size={Size.medium}
          isLoading={false}
        />
      </div>

      <div>
        <div>
          <h2 className="text-xl font-bold">{projectProfile.projectName}</h2>
        </div>
        <div className="flex gap-1 mt-2">{renderViews()}</div>
      </div>
    </>
  );
};

export default ProjectInfo;
