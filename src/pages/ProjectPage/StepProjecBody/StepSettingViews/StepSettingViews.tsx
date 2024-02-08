import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckBox from "./CheckBox/CheckBox";
import { views } from "../../../../types/ProjectType";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementStep,
  selectAllViews,
} from "../../../../stores/projectSlice/createProjectSlice";
import { RootState } from "../../../../stores/store";

function StepSettingViews() {
  const myViews = useSelector(
    (state: RootState) => state.createProject.selectedViews
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-main mt-6 p-8 grid gap-4 grid-cols-2">
        {views.map((item, index) => (
          <CheckBox key={index} Icon={item.icon} title={item.name} />
        ))}
      </div>

      <div className="flex text-dark justify-end mt-6 font-bold text-sm items-center gap-4">
        <div
          className="cursor-pointer hover:text-primary flex"
          onClick={() => dispatch(selectAllViews())}
        >
          <p> Selected all views</p>
          <DoneAllIcon />
        </div>
      </div>

      <div className="bg-main mt-6">
        <CreateProjectButtonComp
          title="Next"
          disable={myViews.length < 1}
          handleChange={() => dispatch(incrementStep())}
        />
      </div>
    </>
  );
}

export default StepSettingViews;
