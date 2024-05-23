import { useQuery } from "react-query";
import { BoxNulldata } from "../../../components/BoxHomepage/BoxNulldata";
import BoxLoading from "../../../components/BoxHomepage/BoxLoading";
import BoxError from "../../../components/BoxHomepage/BoxError";
import projectApi from "../../../libs/projectApi";
import { QUERY_KEY } from "../../../types/GenericType";
import moment from "moment";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { Size } from "../../../types/ProjectType";
import { Divider } from "@mui/material";
import ProjectAlertItem from "../../../components/Labels/ProjectAlertItem";
import ProjectBoxItem from "./ProjectBoxItem/ProjectBoxItem";
import { Link } from "react-router-dom";

const ProjectBox = () => {
  const { isLoading, isError, data, error } = useQuery(
    QUERY_KEY.HOME_PROJECTS,
    () => projectApi.getAllProjectHomePage()
  );

  if (isLoading) {
    return <BoxLoading />;
  }
  if (isError) {
    console.log(error);
    return <BoxError title={"Project"} />;
  }
  if (!data) {
    return <BoxNulldata title={"Project"} />;
  }
  if (data.length == 0) {
    return <BoxNulldata title={"Project"} />;
  }

  return (
    <div className="p-4 bg-background-white shadow-3xl rounded-xl font-roboto h-full">
      <div className="h-full rounded-md">
        <h2 className="text-black font-bold text-xl p-2 pt-4">Project</h2>
        <Divider />
        <div className="rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {data
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
