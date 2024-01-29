import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";

const ProjectBox = () => {
  const { isLoading, isError, data, error } = useQuery(
    "projectBoxKey",
    async () => homeApi.projectApi("user_id")
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

  console.log(data);

  return (
    <div className="p-4 bg-background-white shadow-xl rounded-xl">
      <div className="p-2">
        <h2 className="text-black font-bold text-xl my-2">Project</h2>
        <div className="rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-start bg-main p-4">
          {data.map((item) => (
            <div className="flex align-middl items-center gap-4 p-2 cursor-pointer">
              <div className="bg-primary w-16 h-16 rounded-md flex justify-center items-center text-center shadow-md">
                <p className="text-white text-center font-bold text-2xl">
                  {item.projectName.charAt(0)}
                </p>
              </div>

              <div>
                <h4 className="font-semibold my-1">{item.projectName}</h4>
                <p className="text-gray-300">{item.projectId}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
