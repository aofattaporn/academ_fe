import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import StepProjectHeader from "../StepProjectHeader/StepProjectHeader";

type StepSettingViewsProps = {
  title: string;
  handleClose: () => void;
  handleChange: () => void;
};
function StepSettingViews({
  title,
  handleClose,
  handleChange,
}: StepSettingViewsProps) {
  return (
    <>
      <StepProjectHeader title={title} handleClose={handleClose} />

      <div className="bg-main mt-6 p-8"></div>

      <div className="bg-main mt-6" onClick={handleChange}>
        <CreateProjectButtonComp
          title="Next"
          disable={false}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default StepSettingViews;
