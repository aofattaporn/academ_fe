import { useQuery } from "react-query";
import { BoxNulldata } from "../../../components/BoxHomepage/BoxNulldata";
import BoxLoading from "../../../components/BoxHomepage/BoxLoading";
import BoxError from "../../../components/BoxHomepage/BoxError";
import tasksApi from "../../../libs/tasksApi";
import { QUERY_KEY } from "../../../types/GenericType";
import moment from "moment";
import { Divider } from "@mui/material";

const MytaskBox = () => {
  const { isLoading, isError, data, error } = useQuery(
    QUERY_KEY.HOME_TASKS,
    () => tasksApi.getAllTasksHomePage()
  );

  if (isLoading) {
    return <BoxLoading />;
  }
  if (isError) {
    console.log(error);
    return <BoxError title={"Tasks"} />;
  }
  if (!data) {
    return <BoxNulldata title={"Tasks"} />;
  }
  if (data.length == 0) {
    return <BoxNulldata title={"Tasks"} />;
  }

  return (
    <div className="p-4 bg-background-white shadow-3xl rounded-xl font-roboto h-full">
      <div className="h-full rounded-md">
        <h2 className="text-black font-bold text-xl p-2 pt-4">My Tasks</h2>
        <Divider />
        <div className="rounded-xl grid grid-cols-1 lg:grid-cols-1 gap-4 mt-8">
          {data.map((item, index) => (
            <div key={index}>
              <div
                key={index}
                className="grid grid-cols-3 align-middle items-center gap-4 p-2 cursor-pointer bg-white shadow-3xl rounded-md"
              >
                <p className="my-1">{item.tasksName}</p>
                <p className="my-1 text-center">
                  {moment(item.startDate).format("l")}
                </p>
                <p className="my-1 text-center">
                  {moment(item.dueDate).format("l")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MytaskBox;
