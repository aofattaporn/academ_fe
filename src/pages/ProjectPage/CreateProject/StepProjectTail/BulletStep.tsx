import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import { selectStep } from "../../../../stores/createProject/createProjectSlice";

const ButtletStep = () => {
  const step = useSelector((state: RootState) => state.createProject.step);
  const dispatch = useDispatch();

  return (
    <div className="mt-6 flex justify-center gap-4">
      <div
        onClick={() => dispatch(selectStep(Number(1 || 0)))}
        className={`rounded-full w-3 h-3 ${
          step >= 1 ? "bg-primary" : "bg-gray-200"
        }`}
      ></div>
      <div
        onClick={() => dispatch(selectStep(Number(2 || 0)))}
        className={`rounded-full w-3 h-3 ${
          step >= 2 ? "bg-primary" : "bg-gray-200"
        }`}
      ></div>
      <div
        onClick={() => dispatch(selectStep(Number(3 || 0)))}
        className={`rounded-full w-3 h-3 ${
          step >= 3 ? "bg-primary" : "bg-gray-200"
        }`}
      ></div>
      <div
        onClick={() => dispatch(selectStep(Number(4 || 0)))}
        className={`rounded-full w-3 h-3 ${
          step >= 4 ? "bg-primary" : "bg-gray-200"
        }`}
      ></div>
    </div>
  );
};

export default ButtletStep;
