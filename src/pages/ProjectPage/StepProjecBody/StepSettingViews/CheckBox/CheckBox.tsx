import { Checkbox, SvgIconTypeMap, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../stores/store";
import {
  removeSelectedView,
  addSelectedView,
} from "../../../../../stores/createProject/createProjectSlice";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type CheckBoxProps = {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

const CheckBoxProjectSelected = styled(Checkbox)({
  color: "#AF8AE2",
  "&.Mui-checked": {
    color: "#AF8AE2",
    border: "0.5px",
  },
});

const CheckBoxProject = styled(Checkbox)({
  color: "#CAD4E0",
  "&.Mui-checked": {
    color: "#CAD4E0",
    border: "0.5px",
  },
});

const CheckBox = ({ title, Icon }: CheckBoxProps) => {
  const views = useSelector(
    (state: RootState) => state.createProject.selectedViews
  );
  const dispatch = useDispatch();

  if (views.includes(title)) {
    return (
      <div
        className="border-solid border-2 border-primary shadow-md rounded-sm flex items-center p-2 cursor-pointer"
        onClick={() => dispatch(removeSelectedView(title))}
      >
        <CheckBoxProjectSelected checked />
        <Icon className="text-[#AF8AE2] mx-2" />
        <h1 className="text-[#AF8AE2] font-bold">{title}</h1>
      </div>
    );
  } else {
    return (
      <div
        className="border-solid border-2 border-gray-300 rounded-sm flex items-center p-2 cursor-pointer"
        onClick={() => dispatch(addSelectedView(title))}
      >
        <CheckBoxProject />
        <Icon className="text-gray-200 mx-2" />
        <h1 className="text-gray-200">{title}</h1>
      </div>
    );
  }
};

export default CheckBox;
