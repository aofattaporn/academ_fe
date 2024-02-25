import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";
import { BoxNulldata } from "../../../components/BoxHomepage/BoxNulldata";
import BoxLoading from "../../../components/BoxHomepage/BoxLoading";
import BoxError from "../../../components/BoxHomepage/BoxError";

const ProjectBox = () => {
  const { isLoading, isError, data, error } = useQuery(
    "projectApiKey",
    () => homeApi.projectApi("user_id"),
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
    return <BoxError title={"Project"} />;
  }
  if (!data) {
    return <BoxNulldata title={"Project"} />;
  }

  return (
    <div className="p-4 bg-background-white shadow-xl rounded-xl">
      <div className="p-2">
        <h2 className="text-black font-bold text-xl my-2">Project</h2>
        <div className="rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 place-content-start bg-main p-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex align-middle items-center gap-4 p-2 cursor-pointer"
            >
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
