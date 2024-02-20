import { Size } from "../../../types/ProjectType";
import AvatarProject from "../StepProjecBody/StepAddName/AvatarProject/AvatarProject";
type ProjectBoxProps = {
  projectName: string;
  avatarColor: string;
  membersCounts: number;
  projectEndDate: Date;
};

const ProjectBox = ({
  projectName,
  avatarColor,
  membersCounts,
  projectEndDate,
}: ProjectBoxProps) => {
  return (
    <div className="h-48 bg-white shadow-3xl rounded-md cursor-pointer min-w-96">
      <div className="w-full h-4/6 items-center pt-8 px-8">
        <div className="flex gap-4">
          <AvatarProject
            projectName={projectName}
            color={avatarColor}
            size={Size.small}
          />
          <div>
            <h1 className="text-[24px] font-semibold text-dark mb-2">
              {projectName}
            </h1>
            <p className=" text-gray-600 text-sm">{membersCounts} members</p>
          </div>
        </div>
      </div>
      <div className="w-full h-2/6 bg-main rounded-md flex px-8 items-center">
        <div>
          <p className="text-gray-300 text-sm">End Date</p>
          <p className="text-gray-600 text-sm font-semibold">
            {projectEndDate.toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
