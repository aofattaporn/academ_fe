import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";

const MytaskBox = () => {
  const { isLoading, isError, data, error } = useQuery("queryKey", async () => {
    try {
      const result = await homeApi.mytaskApi("user_id");
      console.log("API Response:", result);
      return result;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  });
  console.log("MytaskBox isLoading:", isLoading);
  console.log("MytaskBox isError:", isError);
  console.log("MytaskBox data:", data);

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
      <div className="h-4/5 bg-main rounded-xl grid grid-cols-1 place-content-start">
        <div className="w-full h-16 mt-6 flex flex-row">
          <div className="w-20 bg-primary rounded-xl grid place-content-center ml-4">
            <p className="text-black font-bold text-base">{data?.taskName}</p>
          </div>
          <div className="grid content-center ml-6">
            <p className="text-black font-medium text-base">{data?.taskName}</p>
            <p className="text-grey font-normal text-sm">{data?.taskId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MytaskBox;
