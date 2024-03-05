import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { COUNT_ITEMS_SKELETON, Size } from "../../../types/ProjectType";

const ProjectInfoLoading = () => {
  return (
    <>
      <div className="py-2">
        <AvatarProject size={Size.medium} isLoading={true} />
      </div>

      <div>
        <h2 className="text-xl font-bold w-3/4 bg-gray-200 animate-pulse h-6"></h2>
        <div className="flex gap-1 mt-2">
          {Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
            return (
              <div
                key={index}
                className="w-24 h-6 bg-gray-200 animate-pulse flex justify-center cursor-pointer"
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectInfoLoading;
