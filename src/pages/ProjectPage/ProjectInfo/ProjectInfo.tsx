import { Link, useLocation, useParams } from "react-router-dom";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { PROJECT_SETTING, Project, Size } from "../../../types/ProjectType";
import { openModal } from "../../../stores/modalSlice/modalSlice";
import Members from "./SettingModal/MemberView/Members";
import moment from "moment";
import ProjectSetting from "./SettingModal/ProjectSetting";
import { useDispatch } from "react-redux";
import ProjectMember from "./SettingModal/ProjectMember";
import ProjectAlertItem from "../../../components/Labels/ProjectAlertItem";

type ProjectInfoProps = {
  projectData: Project;
};

const ProjectInfo = ({ projectData }: ProjectInfoProps) => {
  const { projectId } = useParams();
  const { projectProfile, views, members } = projectData.projectInfo;
  const location = useLocation();
  const dispatch = useDispatch();

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

  const handleOpenMembers = () => {
    dispatch(
      openModal({
        title: PROJECT_SETTING.MEMBERS,
        children: <Members />,
        projectId: projectId as string,
      })
    );
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

            <div className="flex items-center w-full gap-3">
              <ProjectSetting projectData={projectData} />
              <ProjectAlertItem
                projectEndDate={projectData.projectInfo.projectEndDate}
                isArchive={projectData.projectInfo.isArchive}
              />
            </div>
          </div>
          <div className="flex gap-1 mt-2">{renderViews()}</div>
        </div>
      </div>
      <ProjectMember members={members} />
    </div>
  );
};

export default ProjectInfo;
