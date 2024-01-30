import { useSelector } from "react-redux";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import { RootState } from "../../../../stores/store";
import SummaryInviteShare from "./SummaryInviteShare";
import SummaryProjectName from "./SummaryProjectName";
import SummaryViews from "./SummaryViews";

const StepOverview = () => {
  const project = useSelector((state: RootState) => state.createProject);

  return (
    <>
      <div className="bg-main mt-6 px-8 py-4 font-roboto ">
        <SummaryProjectName
          projectName={project.projectName}
          avatarColor={project.colorAvatar}
        />
        <SummaryViews views2={project.views} />
        <SummaryInviteShare />
      </div>
      <div className="bg-main mt-6">
        <CreateProjectButtonComp
          title="Create Project"
          disable={false}
          handleChange={() => {}}
        />
      </div>
    </>
  );
};

export default StepOverview;
