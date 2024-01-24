import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import StepProjectHeader from "../StepProjectHeader/StepProjectHeader";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckBox from "./CheckBox/CheckBox";

type StepSettingViewsProps = {
  title: string;
};

function StepSettingViews({ title }: StepSettingViewsProps) {
  return (
    <>
      <StepProjectHeader title={title} />

      <div className="bg-main mt-6 p-8 grid gap-4 grid-cols-2">
        {["List", "Board", "TimeLine", "Calendar", "Note"].map(
          (element, index) => (
            <CheckBox key={index} isCheck={true} title={element} />
          )
        )}
      </div>

      <div className="flex text-dark justify-end mt-6 font-bold text-sm items-center gap-4 cursor-pointer">
        <p>Selected all views</p>
        <DoneAllIcon />
      </div>

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
