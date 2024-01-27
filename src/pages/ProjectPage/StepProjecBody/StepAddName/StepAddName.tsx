import { TextField } from "@mui/material";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../stores/store";
import {
  increment,
  setProjectName,
} from "../../../../stores/createProject/createProjectSlice";
import AvatarProject from "./AvatarProject/AvatarProject";
import { useState } from "react";
import ColorSelected from "./ColorSelected/ColorSelected";

const StepAddName = () => {
  const [color, setColor] = useState<string>("#AF8AE2");
  const dispatch = useDispatch();
  const projectName = useSelector(
    (state: RootState) => state.createProject.projectName
  );

  return (
    <>
      <div className="bg-main mt-6 p-8">
        <div className="flex gap-4">
          <AvatarProject projectName={projectName} color={color} />
          <ColorSelected handleSelected={(color: string) => setColor(color)} />
        </div>
        <div className="mt-4">
          <p>Project Name</p>
          <TextField
            size="small"
            fullWidth
            value={projectName}
            onChange={(e) => dispatch(setProjectName(e.target.value))}
          />
        </div>
      </div>

      <div className="bg-main mt-6">
        <CreateProjectButtonComp
          title="Next"
          disable={projectName ? false : true}
          handleChange={() => dispatch(increment())}
        />
      </div>
    </>
  );
};

export default StepAddName;
