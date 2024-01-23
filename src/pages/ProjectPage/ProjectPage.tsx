import CreateProject from "./CreateProject/CreateProject";

const ProjectPage = () => {
  return (
    <div className="my-20 mx-4 md:mx-40 rounded-md">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-bold">Published Classes</h1>

            <CreateProject />
          </div>
          <h4 className="text-gray-300">
            These classes are available to students.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
