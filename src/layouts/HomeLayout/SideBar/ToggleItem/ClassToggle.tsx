import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ReactNode, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import projectApi from "../../../../libs/projectApi";
import ProjectSideTile from "./ProjectSideTile/ProjectSideTile";
import RefreshIcon from "@mui/icons-material/Refresh";

type ClassToggleProps = {
  icons: ReactNode;
  item: string;
  isOpen: boolean;
};

const ClassToggle = ({ icons, item, isOpen }: ClassToggleProps) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const { projectId } = useParams();

  const { data, isLoading, isSuccess, isError, refetch } = useQuery(
    "allProjectData",
    projectApi.getAllProject
  );

  return (
    <>
      <li
        onClick={() => setIsCollapse(!isCollapse)}
        className={`flex rounded-md p-2 py-3 cursor-pointer hover:bg-light-white 
          text-dark text-md items-center gap-x-2
          ${false ? "mt-9" : "mt-2"}   h-12 overflow-scroll  `}
      >
        {icons}
        <div
          className={`${
            !isOpen && "hidden"
          } origin-left duration-200 font-roboto text-md w-full flex justify-between`}
        >
          {item}
          {isOpen && (
            <ExpandLessIcon
              className={`${isCollapse ? "rotate-180" : "rotate-90"} `}
            />
          )}
        </div>
      </li>

      <div
        className={`overflow-scroll relative duration-100 mb-2 ${
          !isCollapse || !isOpen ? "h-0" : " h-auto"
        }`}
      >
        <Link to={"/projects"}>
          <div
            className="overflow-x-scroll  px-4 py-2 bg-slate-300 rounded-md 
            bg-gradient-to-r from-[#9379E0] via-[#AE78D6] to-[#D780E1] overflow-y-hidden h-10  mb-2"
          >
            <p className="overflow-scroll  text-white">see all Projects</p>
          </div>
        </Link>
        <div>
          {isLoading ? (
            <div className="p-4 flex cursor-pointer justify-between animate-pulse w-full h-4 bg-gray-200 rounded-md"></div>
          ) : null}
        </div>
        <div>
          {isSuccess
            ? data?.map((project, index) => (
                <ProjectSideTile
                  key={index}
                  projectId={project.projectId}
                  projectName={project.projectName}
                  isSelected={project.projectId === projectId}
                />
              ))
            : null}
        </div>
        <div>
          {(isSuccess && !data) || isError ? (
            <div
              className="py-2 px-4 flex cursor-pointer justify-between hover:text-primary"
              onClick={() => refetch()}
            >
              <p className=" font-semibold">Try to Refresh</p>
              <RefreshIcon />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ClassToggle;
