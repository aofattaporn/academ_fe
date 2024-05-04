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

  return (
    <div className="p-4 bg-background-white shadow-3xl rounded-xl font-roboto h-full">
      <div className="h-full rounded-md">
        <h2 className="text-black font-bold text-xl p-2 pt-4">Project</h2>
        <Divider />
        <div className="rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex align-middle gap-4 p-2 cursor-pointer"
            >
              <AvatarProject
                isLoading={false}
                size={Size.medium}
                color={item.projectProfile.avatarColor}
                projectName={item.projectProfile.projectName}
              />

              <div>
                <h4 className="font-semibold">
                  {item.projectProfile.projectName}
                </h4>
                <p className="text-gray-300">
                  {moment(item.projectEndDate).format("l")}
                </p>
              </div>
              <ProjectAlertItem
                projectEndDate={item.projectEndDate}
                isArchive={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
