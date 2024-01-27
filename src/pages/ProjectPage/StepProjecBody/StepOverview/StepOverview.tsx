import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import InviteItem from "../StepShareInvite/InviteItem/InviteItem";

const StepOverview = () => {
  return (
    <>
      <div className="bg-main mt-6 px-8 py-4 font-roboto ">
        {/* projectName-summary */}
        <div className="my-4">
          <h1 className="text-lg font-bold text-primary-dark">ProjectName</h1>
          <div className=" flex gap-2 items-center">
            <div className="rounded-md bg-primary w-16 h-16 flex justify-center items-center">
              <p className=" font-bold text-white text-3xl">
                {"d" ? "D".at(0) : "-"}
              </p>
            </div>
          </div>
          <p className="text-lg text-dark">Dewrwerwerwe</p>
        </div>

        {/* views-summary */}
        <div className="my-8">
          <h1 className="text-lg font-bold text-primary-dark">
            Default Settings for Views
          </h1>
          <div className="flex gap-2 items-center">
            <p className="text-md text-dark">4 views selected </p>
          </div>
        </div>

        {/* share-summary */}
        <div className="my-8">
          <h1 className="text-lg font-bold text-primary-dark">Share with </h1>
          <div className="flex gap-2 items-center">
            <InviteItem email="aaaaaa" role="member" />
          </div>
        </div>
      </div>
      <div className="bg-main mt-6">
        <CreateProjectButtonComp
          title="Create Project"
          disable={false}
          handleChange={() => {}}
        />
      </div>
    </>
  );
};

export default StepOverview;
