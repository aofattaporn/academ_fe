import RefreshIcon from "@mui/icons-material/Refresh";
type ProjectBoxFailedType = {
  projectRefetch: () => void;
};
const ProjectBoxFailed = ({ projectRefetch }: ProjectBoxFailedType) => {
  return (
    <div className="flex items-center justify-center w-full h-full my-8">
      <div className="text-center">
        <h2 className="font-extrabold text-2xl text-gray-200">
          Something went wrong
        </h2>
        <button
          onClick={projectRefetch}
          className="font-semibold text-md text-gray-500 cursor-pointer"
        >
          Please try again.
          <RefreshIcon />
        </button>
      </div>
    </div>
  );
};

export default ProjectBoxFailed;
