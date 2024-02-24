import moment, { Moment } from "moment";
import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import projectApi from "../../libs/projectApi";
import { QUERY_KEY } from "../../types/GenericType";
import { Views, ListProject } from "../../types/ProjectType";

type useCreateProjectProps = {
  handleClose: () => void;
};
const useCreateProject = ({ handleClose }: useCreateProjectProps) => {
  const [projectName, setProjectName] = useState<string>("");
  const [endDate, setEndDate] = useState<Moment | null | undefined>();
  const [viewsSelected, setViewsSelected] = useState<Views[]>([]);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () =>
      projectApi.createProject({
        projectName: projectName,
        projectEndDate: endDate ? endDate : moment(),
        views: viewsSelected,
      }),
    onSuccess: (data) => {
      setProjectName("");
      setEndDate(undefined);
      setViewsSelected([]);
      handleClose();

      queryClient.setQueryData(
        [QUERY_KEY.ALL_PROJECT],
        (oldData: ListProject[] | undefined) => {
          return oldData ? [...oldData, data] : [];
        }
      );
    },
  });

  const handleSetSelected = (view: Views) => {
    const isSelected = viewsSelected.some(
      (selectedView) => selectedView === view
    );

    if (isSelected) {
      const updatedViews = viewsSelected.filter(
        (selectedView) => selectedView !== view
      );
      setViewsSelected(updatedViews);
    } else {
      setViewsSelected((prevViews) => [...prevViews, view]);
    }
  };

  const handleSetProjectName = (projectName: string) => {
    setProjectName(projectName);
  };
  const handleSetEndDate = (endDate: Moment | null) => setEndDate(endDate);

  return {
    mutation,
    projectName,
    endDate,
    viewsSelected,
    handleSetProjectName,
    handleSetEndDate,
    handleSetSelected,
  };
};

export default useCreateProject;
