import { useQuery } from "react-query";
import { BoxNulldata } from "../../../components/BoxHomepage/BoxNulldata";
import BoxLoading from "../../../components/BoxHomepage/BoxLoading";
import BoxError from "../../../components/BoxHomepage/BoxError";
import tasksApi from "../../../libs/tasksApi";
import { QUERY_KEY } from "../../../types/GenericType";
import moment from "moment";
import { Divider } from "@mui/material";
import { MytaskType } from "../../../types/MyTasksType";
import { Link } from "react-router-dom";
import MyTasksBoxItem from "./MyTasksBoxItem/MyTasksBoxItem";
type MytaskBoxProps = {
  myTasks?: MytaskType;
  isLoading: boolean;
  isError: boolean;
};
const MytaskBox = ({ myTasks, isLoading, isError }: MytaskBoxProps) => {
  if (isLoading) {
    return <BoxLoading />;
  }
  if (isError) {
    return <BoxError title={"Tasks"} />;
  }
  if (!myTasks) {
    return <BoxNulldata title={"Tasks"} />;
  }
  if (myTasks.tasks.length == 0) {
    return <BoxNulldata title={"Tasks"} />;
  }

  return (
    <div className="p-4 bg-background-white shadow-3xl rounded-xl font-roboto h-full">
      <div className="h-full rounded-md">
        <h2 className="text-black font-bold text-xl p-2 pt-4">My Tasks</h2>
        <Divider />
        <div className="rounded-xl grid grid-cols-1 lg:grid-cols-1 gap-4 mt-8">
          {myTasks.tasks.map((item, index) => {
            const project = myTasks.projects.find(
              (project) => project.projectId === item.projectId
            );

            return (
              <Link key={index} to={`projects/${item.projectId}`}>
                <MyTasksBoxItem item={item} project={project} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MytaskBox;
