import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";

const ClassBox = () => {
  const { isLoading, isError, data, error } = useQuery(
    "classBoxKey",
    async () => homeApi.classApi("user_id")
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
          <h2 className="text-black font-bold text-xl">Class</h2>
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
          <h2 className="text-black font-bold text-xl">Class</h2>
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
        <h2 className="text-black font-bold text-xl">Class</h2>
      </div>
      <div className="h-4/5 bg-main rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2 place-content-start">
        {data.map(function (data) {
          return (
            <div className="w-11/12 h-20 bg-background-white shadow-xl rounded-xl mt-6 ml-4">
              {/* <div className="w-16 bg-primary rounded-xl grid place-content-center ml-4">
            <p
            className="text-white text-center font-bold text-2xl">{data.className.charAt(0)}</p>
          </div> */}
              <div className="grid content-center ml-6">
                <p className="my-2">{data.classId}</p>
                <p className="font-semibold">{data.className}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassBox;
