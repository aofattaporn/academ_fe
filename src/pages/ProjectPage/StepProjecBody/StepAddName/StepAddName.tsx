import { TextField } from "@mui/material";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../stores/store";
import {
  increment,
  selectColor,
  setProjectName,
} from "../../../../stores/createProject/createProjectSlice";
import AvatarProject from "./AvatarProject/AvatarProject";
import ColorSelected from "./ColorSelected/ColorSelected";

const StepAddName = () => {
  const dispatch = useDispatch();
  const project = useSelector((state: RootState) => state.createProject);

  return (
    <>
      <div className="bg-main mt-6 p-8">
        <div className="flex gap-4">
          <AvatarProject
            projectName={project.projectName}
            color={project.colorAvatar}
          />
          <ColorSelected
            handleSelected={(color: string) => dispatch(selectColor(color))}
          />
        </div>
        <div className="mt-4">
          <p>Project Name</p>
          <TextField
            size="small"
            fullWidth
            value={project.projectName}
            onChange={(e) => dispatch(setProjectName(e.target.value))}
          />
        </div>
      </div>

      <div className="bg-main mt-6">
        <CreateProjectButtonComp
          title="Next"
          disable={project.projectName ? false : true}
          handleChange={() => dispatch(increment())}
        />
      </div>
    </>
  );
};

export default StepAddName;
