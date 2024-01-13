import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";

const ProjectBox = () => {
  const { isLoading, isError, data, error } = useQuery("queryKey", async () =>
    homeApi.projectApi("user_id")
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
          <h2 className="text-black font-bold text-xl">Project</h2>
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
          <h2 className="text-black font-bold text-xl">Project</h2>
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
        <h2 className="text-black font-bold text-xl">Project</h2>
      </div>
      <div className="h-4/5 bg-main rounded-xl grid grid-cols-1 place-content-start">
        <div className="w-full h-16 mt-6 flex flex-row">
          <div className="w-16 bg-primary rounded-xl grid place-content-center ml-4">
            <p className="text-black font-bold text-2xl">
              {data?.projectName.charAt(0)}
            </p>
          </div>
          <div className="grid content-center ml-6">
            <p className="text-black font-medium text-base">
              {data?.projectName}
            </p>
            <p className="text-grey font-normal text-sm">{data?.projectId}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
