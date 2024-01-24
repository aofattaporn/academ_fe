import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../stores/store";
import { addViews } from "../../../../../stores/createProject/createProjectSlice";

type CheckBoxProps = {
  isCheck: boolean;
  title: string;
};

const CheckBox = ({ isCheck, title }: CheckBoxProps) => {
  const views = useSelector((state: RootState) => state.createProject.views);
  const dispatch = useDispatch();

  if (views.includes(title)) {
    <div className=" bg-white border-solid border-2"></div>;
  } else {
  }

  return (
    <div
      className={`bg-white border-solid border-2 ${
        !views.includes(title) ? "border-gray-300" : "border-primary shadow-md"
      } rounded-sm flex items-center p-2 cursor-pointer`}
      onClick={() => dispatch(addViews(title))}
    >
      <Checkbox
        checked={views.includes(title)}
        disabled
        sx={{
          color: views.includes(title) ? "#CAD4E0" : "#AF8AE2",
          "&.Mui-checked": {
            color: !views.includes(title) ? "#CAD4E0" : "#AF8AE2",
            border: "0.5px",
          },
        }}
      />
      <h1
        className={
          !views.includes(title) ? "text-gray-200" : "text-[#AF8AE2] font-bold"
        }
      >
        {title}
      </h1>
    </div>
  );
};

export default CheckBox;
