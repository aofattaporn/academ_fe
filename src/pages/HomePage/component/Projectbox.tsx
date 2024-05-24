import BoxLoading from "../../../components/BoxHomepage/BoxLoading";
import BoxError from "../../../components/BoxHomepage/BoxError";
import { Divider } from "@mui/material";
import ProjectBoxItem from "./ProjectBoxItem/ProjectBoxItem";
import { Link } from "react-router-dom";
import { Project } from "../../../types/MyTasksType";
import { BoxNulldata } from "../../../components/BoxHomepage/BoxNulldata";

type ProjectBoxProps = {
  projectData: Project[];
  isLoading: boolean;
  isError: boolean;
};

const ProjectBox = ({ projectData, isLoading, isError }: ProjectBoxProps) => {
  if (isLoading) {
    return <BoxLoading />;
  }
  if (isError) {
    return <BoxError title={"Project"} />;
  }
  if (!projectData) {
    return <BoxNulldata title={"Project"} />;
  }
  if (projectData.length == 0) {
    return <BoxNulldata title={"Project"} />;
  }

  return (
    <div className="p-4 bg-background-white shadow-3xl rounded-xl font-roboto h-full">
      <div className="h-full rounded-md">
        <h2 className="text-black font-bold text-xl p-2 pt-4">Project</h2>
        <Divider />
        <div className="rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {projectData
            .filter((item) => !item.isArchive)
            .map((item, index) => (
              <Link key={index} to={`projects/${item.projectId}`}>
                <ProjectBoxItem
                  key={index}
                  projectProfile={item.projectProfile}
                  endDate={item.projectEndDate}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
