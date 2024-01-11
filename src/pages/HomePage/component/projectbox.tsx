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
      <div className="h-4/5 bg-main rounded-xl grid grid-cols-2 place-content-start">
        <div className="w-24 bg-primary rounded-xl grid place-content-center">
          <p className="text-black font-medium text-base">
            {data?.projectName}
          </p>
        </div>
        <div>
          <p className="text-black font-medium text-base">
            {data?.projectName}
          </p>
          <p className="text-grey font-normal text-sm">{data?.projectId}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
