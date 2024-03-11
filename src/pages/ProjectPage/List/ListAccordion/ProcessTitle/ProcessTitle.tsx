import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type ProcessTitleProps = {
  handleToggle: () => void;
  isToggle: boolean;
  processColor: string;
  processName: string;
};

const ProcessTitle = ({
  handleToggle,
  isToggle,
  processColor,
  processName,
}: ProcessTitleProps) => {
  return (
    <button className="flex gap-4 w-full" onClick={handleToggle}>
      <div
        style={{ background: processColor }}
        className={`w-4 h-4 flex justify-center items-center  p-4 rounded-md text-white
      ${isToggle ? "rotate-180" : "rotate-90"} `}
      >
        <ExpandLessIcon />
      </div>
      <div className="flex items-center w-full">
        <div
          style={{ background: processColor }}
          className="h-4 w-2 py-4 rounded-sm"
        ></div>
        <p className="text-xl font-bold pl-6">{processName}</p>
      </div>
    </button>
  );
};

export default ProcessTitle;
