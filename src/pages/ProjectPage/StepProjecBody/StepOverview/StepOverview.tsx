import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import SummaryInviteShare from "./SummaryInviteShare";
import SummaryProjectName from "./SummaryProjectName";
import SummaryViews from "./SummaryViews";

const StepOverview = () => {
  return (
    <>
      <div className="bg-main mt-6 px-8 py-4 font-roboto ">
        {/* projectName-summary */}
        <SummaryProjectName projectName="AcademProject" />
        <SummaryViews />
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
