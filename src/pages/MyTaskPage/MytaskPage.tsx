import { useQuery } from "react-query";
import ListAccordionProjects from "../../components/ListAccordion/ListAccordionProjects/ListAccordionProjects";
import myTasksApi from "../../libs/mytaskApi";
import { QUERY_KEY } from "../../types/GenericType";
import { Button } from "@mui/base";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";
import ListAccordionProjectsLoading from "../../components/ListAccordion/ListAccordionProjects/ListAccordionProjectsLoading";
import { COUNT_ITEMS_SKELETON } from "../../types/ProjectType";

const MytaskPage = () => {
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, data } = useQuery(
    QUERY_KEY.MY_TASKS,
    () => myTasksApi.mytasksApi()
  );

  return (
    <div className="w-full h-full bg-main">
      <div className="w-full h-12 bg-primary-light"></div>
      <div className="flex justify-start px-8 py-8">
        <div>
          <h1 className="font-bold text-4xl text-dark">My Tasks List</h1>
          <h3 className="text-grey">Show your my tasks asignee</h3>
        </div>
      </div>
      <div className="px-8 pb-10">
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
        {isSuccess && data && data.projects
          ? data.projects
              .filter((item) => !item.isArchive)
              .map((project, index) => (
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
