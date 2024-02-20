import Accordion from "@mui/material/Accordion";
import AccordionHeader from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useQuery } from "react-query";
import myTasksApi from "../../../libs/mytaskApi";
import ProcessAccordions from "./processtask";

const TaskProject = () => {
  const { isLoading, isError, data, error } = useQuery(
    "myTasksProjectKey",
    async () => myTasksApi.mytasksApi(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
  if (isLoading) {
    return (
      <div className="h-96 p-4 shadow-xl rounded-xl animate-pulse bg-gray-200"></div>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <div className="flex justify-center">
        <h2 className="text-grey font-normal text-xl">Somthing wrong.</h2>
      </div>
    );
  }

  if (data == null) {
    return (
      <div className="flex justify-center">
        <h2 className="text-grey font-normal text-xl">
          You didn't have a project.
        </h2>
      </div>
    );
  }

  return (
    <div className="m-4">
      {data.project?.map((project, index) => (
        <Accordion key={index} className="mb-4">
          <AccordionHeader
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="flex align-middle items-center gap-4 p-2 cursor-pointer">
              <div className="bg-primary w-16 h-16 rounded-md flex justify-center items-center text-center shadow-md">
                <p className="text-white text-center font-bold text-2xl">
                  {project.projectName.charAt(0)}
                </p>
              </div>
              <div>
                <p className="font-bold text-3xl">{project.projectName}</p>
              </div>
            </div>
          </AccordionHeader>

          <AccordionDetails>
            <ProcessAccordions project={project} myTasks={data.tasks} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default TaskProject;
