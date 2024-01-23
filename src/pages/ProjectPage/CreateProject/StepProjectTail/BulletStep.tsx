import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import { selectStep } from "../../../../stores/createProject/createProjectSlice";

const ButtletStep = () => {
  const step = useSelector((state: RootState) => state.createProject.step);
  const dispatch = useDispatch();

  return (
    <div className="mt-6 flex justify-center gap-4">
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          onClick={() => dispatch(selectStep(index))}
          className={`rounded-full w-3 h-3 cursor-pointer ${
            step >= index ? "bg-primary" : "bg-gray-200"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ButtletStep;
