import CreateProjectButtonComp from "../../../../../components/Button/CreateProjectButtonComp";
import TextFeildInputComp from "../../../../../components/Field/TextFeildInputComp";

const RoleView = () => {
  return (
    <div className="my-4">
      <p className=" text-gray-200">Manage Role within this project</p>
      <div className=" grid grid-cols-4 gap-4 w-full">
        <div className=" col-span-3 ">
          <TextFeildInputComp
            placeholder={""}
            value={""}
            handleProjectName={() => {}}
          />
        </div>
        <div className=" col-span-1">
          <CreateProjectButtonComp
            title={"Add"}
            disable={false}
            isCreating={false}
            handleChange={() => {}}
          />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RoleView;
