import { useState } from "react";
import { MyTasks, Project } from "../../../types/MyTasksType";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListAccordion from "../ListAccordionItem/ListAccordion";
import ProjectAlertItem from "../../Labels/ProjectAlertItem";
import ClassNameItem from "../../Labels/ClassNameItem";

type ListAccordionProjectsProps = {
  projectInfo: Project;
  myTasksData: MyTasks[];
};

const ListAccordionProjects = ({
  projectInfo,
  myTasksData,
}: ListAccordionProjectsProps) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="w-full rounded-md shadow-3xl my-4 bg-white  items-center font-roboto">
      <button
        onClick={handleToggle}
        className="flex w-full justify-between items-center p-4"
      >
        <div className=" grid grid-cols-12 items-center w-full">
          <h1
            style={{ backgroundColor: projectInfo.projectProfile.avatarColor }}
            className=" col-span-1 text-3xl font-bold bg-primary p-4 rounded-md  w-16 h-16 flex justify-center text-white"
          >
            {projectInfo.projectProfile.projectName.charAt(0)}
          </h1>

          <h1 className=" col-span-2 text-start text-3xl font-bold text-dark">
            {projectInfo.projectProfile.projectName}
          </h1>

          <div className="col-span-9">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2">
                <ClassNameItem className={projectInfo.className} />
              </div>
              <div className="col-span-3">
                <ProjectAlertItem
                  projectEndDate={projectInfo.projectEndDate}
                  isArchive={false}
                />
              </div>
            </div>
          </div>
        </div>

        <ExpandMoreIcon className={isToggle ? "rotate-0" : "-rotate-90"} />
      </button>

      <div
        className={`duration-300 ${
          isToggle ? "h-fit mt-4" : "h-0 overflow-hidden"
        }`}
      >
        <div className="px-8 pb-8">
          {projectInfo.process.map((process, index) => {
            return (
              <ListAccordion
                key={index}
                taskPermission={{
                  addNew: false,
                  delete: false,
                  edit: false,
                  manageProcess: false,
                }}
                activeId={null}
                process={process}
                tasks={myTasksData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListAccordionProjects;
