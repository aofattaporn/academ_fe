import { useQuery } from "react-query";
import ListAccordionProjects from "../../components/ListAccordion/ListAccordionProjects/ListAccordionProjects";
import myTasksApi from "../../libs/mytaskApi";
import TaskProject from "./component/TasksProject";
import { QUERY_KEY } from "../../types/GenericType";

const MytaskPage = () => {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
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
        {isLoading ? <div> isLoading</div> : null}
        {isError ? <div> isLoading</div> : null}
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
