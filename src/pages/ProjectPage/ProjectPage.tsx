import AvatarProject from "../../components/AvatarProject/AvatarProject";
import { Size } from "../../types/ProjectType";

const ProjectPage = () => {
  return (
    <div className="bg-white w-full shadow-sm flex px-8 gap-8 items-end text-dark font-roboto">
      <div className="py-2">
        <AvatarProject projectName={"A"} color={"#AF8AE2"} size={Size.medium} />
      </div>

      <div>
        <h2 className="text-xl font-bold">Academ Projex</h2>
        <div className="flex gap-1 mt-2">
          <div className="w-24 bg-primary-subtle flex justify-center rounded-tl-md cursor-pointer">
            List
          </div>
          <div className="w-24 bg-primary-subtle flex justify-center cursor-pointer">
            Board
          </div>
          <div className="w-24 bg-primary-subtle flex justify-center cursor-pointer">
            Carendar
          </div>
          <div className="w-24 bg-primary-subtle flex justify-center cursor-pointer">
            Note
          </div>
          <div className="w-24 bg-primary-subtle flex justify-center rounded-tr-md cursor-pointer">
            Timeline
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProjectPage;
