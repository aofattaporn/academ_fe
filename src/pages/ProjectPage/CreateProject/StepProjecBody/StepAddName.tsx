import { TextField } from "@mui/material";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import StepProjectHeader from "../StepProjectHeader/StepProjectHeader";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../stores/store";
import {
  increment,
  setProjectName,
} from "../../../../stores/createProject/createProjectSlice";

type StepAddNameProps = {
  title: string;
};

const StepAddName = ({ title }: StepAddNameProps) => {
  const projectName = useSelector(
    (state: RootState) => state.createProject.projectName
  );

  const dispatch = useDispatch();

  return (
    <>
      <StepProjectHeader title={title} />

      <div className="bg-main mt-6 p-8">
        <div className="flex gap-4">
          <div className="rounded-md bg-primary w-16 h-16 flex justify-center items-center">
            <p className=" font-bold text-white text-3xl">
              {projectName ? projectName.at(0) : "-"}
            </p>
          </div>
          <div>
            <p className="text-sm text-grey mb-2">Colors</p>
            <div className="flex gap-2">
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
              <div className="rounded-full bg-gray-200 w-4 h-4"></div>
            </div>
          </div>
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
