import { Link, useLocation } from "react-router-dom";

type ProjectSideTileProps = {
  projectId: string;
  projectName: string;
};

const ProjectSideTile = ({ projectName, projectId }: ProjectSideTileProps) => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <Link to={`/projects/${projectId}`}>
      <div className="my-2 rounded-sm flex gap-2 bg-primary-light">
        <div className="h-10 w-2 bg-primary-dark"></div>
        <div className="py-2 rounded-sm flex gap-4">
          <div className="bg-primary h-6 w-6 flex items-center justify-center rounded-sm">
            <p className="font-bold text-white">{projectName.charAt(0)}</p>
          </div>
          <p className="text-white font-bold">{projectName}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSideTile;
