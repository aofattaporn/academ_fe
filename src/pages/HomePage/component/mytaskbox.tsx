import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";

const MytaskBox = () => {
  const { isLoading, isError, data, error } = useQuery("qloKey", async () =>
    homeApi.mytaskApi("user_id")
  );

  if (isLoading) {
    return (
      <div className="h-96 p-4 shadow-xl rounded-xl animate-pulse bg-gray-200"></div>
    );
  }
  if (isError) {
    console.log(error);
    return (
      <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
        <div className="p-2">
          <h2 className="text-black font-bold text-xl">Tasks</h2>
        </div>
        <div className="h-4/5 bg-main rounded-xl grid place-content-center">
          <h2 className="text-grey font-normal text-xl">Somthing wrong.</h2>
        </div>
      </div>
    );
  }
  if (data == null) {
    return (
      <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
        <div className="p-2">
          <h2 className="text-black font-bold text-xl">Tasks</h2>
        </div>
        <div className="h-4/5 bg-main rounded-xl grid place-content-center">
          <h2 className="text-grey font-normal text-xl">
            There are no class at moment.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
      <div className="p-2">
        <h2 className="text-black font-bold text-xl">Tasks</h2>
      </div>
      <div className="h-4/5 bg-main rounded-xl grid grid-cols-1 place-content-start place-items-center">
        {data.map(function (data) {
          return (
            <div className="w-11/12 h-9 bg-background-white shadow rounded-lg mt-4 flex flex-row justify-between">
              <div className="grid content-center ml-6">
                <p className="font-semibold my-1">{data.taskName}</p>
              </div>
              <div className="bg-primary opacity-50 w-24 h-6 rounded-md flex justify-center items-center text-center shadow-md mt-1.5">
                <p className="font-semibold text-black text-center">
                  {data.taskFromproject}
                </p>
              </div>
              <div className="grid content-center mr-6">
                <p className="font-semibold my-1">{data.taskDuedate}</p>
              </div>
              {/* <p className="font-semibold my-1">{data.taskName}</p>
              <p className="font-semibold my-1">{data.taskId}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MytaskBox;
