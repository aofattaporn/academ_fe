import { Link } from "react-router-dom";

type ToggleTileProps = {
  title: string;
  projectId: string;
  projectName: string;
  isSelected: boolean;
};

const ToggleTile = ({
  title,
  projectName,
  projectId,
  isSelected,
}: ToggleTileProps) => {
  return (
    <Link to={`/projects/${projectId}`}>
      <div
        className={`my-2 rounded-sm flex gap-2 ${
          isSelected && "bg-primary-light"
        }`}
      >
        <div
          className={` h-10 w-2 rounded-l-md  ${
            isSelected && "bg-primary-dark"
          }`}
        ></div>
        <div className="py-2 rounded-md flex gap-4">
          {title === "PROJECTS" ? (
            <div className="bg-primary h-6 w-6 flex items-center justify-center rounded-md overflow-hidden">
              <p className="font-bold text-white">{projectName.charAt(0)}</p>
            </div>
          ) : (
            <div className="bg-main flex px-2 items-center justify-center rounded-md shadow-sm overflow-hidden">
              <p className="font-bold text-dark">{"CSS112"}</p>
            </div>
          )}
          <p
            className={
              isSelected ? "text-white font-bold" : "text-primary-dark"
            }
          >
            {projectName}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ToggleTile;
