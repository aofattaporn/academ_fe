import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import StepProjectHeader from "../StepProjectHeader/StepProjectHeader";

type StepSettingViewsProps = {
  title: string;
};
function StepSettingViews({ title }: StepSettingViewsProps) {
  return (
    <>
      <StepProjectHeader title={title} />

      <div className="bg-main mt-6 p-8"></div>

      <div className="bg-main mt-6">
        <CreateProjectButtonComp
          title="Next"
          disable={false}
          handleChange={() => {}}
        />
      </div>
    </>
  );
}

export default StepSettingViews;
