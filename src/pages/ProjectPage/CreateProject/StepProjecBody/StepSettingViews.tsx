import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckBox from "./CheckBox/CheckBox";
import { views } from "../../../../types/ProjectType";

function StepSettingViews() {
  return (
    <>
      <div className="bg-main mt-6 p-8 grid gap-4 grid-cols-2">
        {views.map((item, index) => (
          <CheckBox key={index} Icon={item.icon} title={item.name} />
        ))}
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
