import { Size } from "../../../types/ProjectType";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import moment from "moment";
import { Link } from "react-router-dom";
type ProjectBoxProps = {
  prjectId: string;
  projectName: string;
  avatarColor: string;
  membersCounts: number;
  projectEndDate: Date;
};

const ProjectBox = ({
  prjectId,
  projectName,
  avatarColor,
  membersCounts,
  projectEndDate,
}: ProjectBoxProps) => {
  return (
    <Link to={`/projects/${prjectId}`}>
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
              {moment(projectEndDate).format("ll")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectBox;
