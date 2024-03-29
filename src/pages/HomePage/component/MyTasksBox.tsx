import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";
import { BoxNulldata } from "../../../components/BoxHomepage/BoxNulldata";
import BoxLoading from "../../../components/BoxHomepage/BoxLoading";
import BoxError from "../../../components/BoxHomepage/BoxError";

const MytaskBox = () => {
  const { isLoading, isError, data, error } = useQuery(
    "taskApiKey",
    () => homeApi.mytaskApi("user_id"),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
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

  return (
    <div className="p-4 bg-background-white shadow-xl rounded-xl">
      <div className="p-2">
        <h2 className="text-black font-bold text-xl">Tasks</h2>
      </div>
      <div className="bg-main rounded-xl grid grid-cols-1 gap-4 place-content-start place-items-center p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-11/12 bg-background-white shadow-sm rounded-lg flex flex-row justify-between items-center p-2"
          >
            <div className="grid content-center ml-6">
              <p className="font-semibold my-1">{item.taskName}</p>
            </div>
            <div className="bg-primary opacity-50 w-24 h-6 rounded-md flex justify-center items-center text-center shadow-md">
              <p className="font-semibold text-black text-center">
                {item.taskFromproject}
              </p>
            </div>
            <div className="grid content-center mr-6">
              <p className="font-semibold my-1">{item.taskDuedate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MytaskBox;
