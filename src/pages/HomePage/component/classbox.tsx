import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";
import { BoxNulldata } from "../../../components/BoxHomepage/BoxNulldata";
import BoxLoading from "../../../components/BoxHomepage/BoxLoading";
import BoxError from "../../../components/BoxHomepage/BoxError";

const ClassBox = () => {
  const { isLoading, isError, data, error } = useQuery(
    "classApiKey",
    () => homeApi.classApi("user_id"),
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
    return <BoxError title={"Class"} />;
  }
  if (!data) {
    return <BoxNulldata title={"Class"} />;
  }

  return (
    <div className=" p-4 bg-background-white shadow-xl rounded-xl">
      <div className="p-2">
        <h2 className="text-black font-bold text-xl">Class</h2>
      </div>
      <div className="bg-main rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-2 place-content-start p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-11/12 h-20 bg-background-white shadow-xl rounded-xl "
          >
            <div className="grid content-center ml-6">
              <p className="my-2">{item.classId}</p>
              <p className="font-semibold">{item.className}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassBox;
