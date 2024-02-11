import { useQuery } from "react-query";
import homeApi from "../../../libs/homeApi";
import { BoxNulldata } from "../../../components/BoxHomepage/BoxNulldata";
import BoxLoading from "../../../components/BoxHomepage/BoxLoading";
import BoxError from "../../../components/BoxHomepage/BoxError";

const ClassBox = () => {
  const { isLoading, isError, data, error } = useQuery(
    "classApiKey",
    async () => homeApi.classApi("user_id")
  );
  if (isLoading) {
    return <BoxLoading />;
  }
  if (isError) {
    console.log(error);
    return <BoxError title={"Class"} />;
  }
  if (data == null) {
    return <BoxNulldata title={"Class"} />;
  }

  return (
    <div className="h-96 p-4 bg-background-white shadow-xl rounded-xl">
      <div className="p-2">
        <h2 className="text-black font-bold text-xl">Class</h2>
      </div>
      <div className="h-4/5 bg-main rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2 place-content-start">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-11/12 h-20 bg-background-white shadow-xl rounded-xl mt-6 ml-4"
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
