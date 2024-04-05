import { useQuery } from "react-query";
import ListAccordionProjects from "../../components/ListAccordion/ListAccordionProjects/ListAccordionProjects";
import myTasksApi from "../../libs/mytaskApi";
import { QUERY_KEY } from "../../types/GenericType";
import { Button } from "@mui/base";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";
import ListAccordionLoading from "../../components/ListAccordion/ListAccordionLoading/ListAccordionLoading";
import ListAccordionProjectsLoading from "../../components/ListAccordion/ListAccordionProjects/ListAccordionProjectsLoading";
import { COUNT_ITEMS_SKELETON } from "../../types/ProjectType";

const MytaskPage = () => {
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, data } = useQuery(
    QUERY_KEY.MY_TASKS,
    () => myTasksApi.mytasksApi(),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return (
    <div className="w-full h-full bg-main">
      <div className="w-full h-20 bg-primary-light grid content-center">
        <div className="ml-4">
          <p className="text-black font-bold text-2xl">My Task</p>
        </div>
      </div>
      <div className="p-8">
        {isLoading
          ? Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
              return <ListAccordionProjectsLoading key={index} />;
            })
          : null}
        {isError ? (
          <Alert severity="error" className="my-8">
            Something went wrong
            <Button className="normal-case" onClick={() => navigate(0)}>
              Try Again
            </Button>
          </Alert>
        ) : null}
        {isSuccess && data
          ? data.project.map((project, index) => (
              <ListAccordionProjects
                key={index}
                projectInfo={project}
                myTasksData={data.tasks}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default MytaskPage;
