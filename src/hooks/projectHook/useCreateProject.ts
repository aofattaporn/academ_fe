import { Moment } from "moment";
import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import projectApi from "../../libs/projectApi";
import { QUERY_KEY } from "../../types/GenericType";
import { Views, ListProject } from "../../types/ProjectType";
import moment from "moment";

type useCreateProjectProps = {
  handleClose: () => void;
};
const useCreateProject = ({ handleClose }: useCreateProjectProps) => {
  const [projectName, setProjectName] = useState<string>("");
  const [classtName, setClasstName] = useState<string>("");
  const [endDate, setEndDate] = useState<string | Date | null>(null);
  const [startDate, setStartDate] = useState<string | Date | null>(null);

  const [viewsSelected, setViewsSelected] = useState<Views[]>([]);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () =>
      projectApi.createProject({
        projectName: projectName,
        className: classtName,
        projectStartDate: startDate ? moment(startDate).toISOString() : null,
        projectEndDate: endDate ? moment(endDate).toISOString() : null,
        views: viewsSelected,
      }),
    onSuccess: (data) => {
      setProjectName("");
      setEndDate(null);
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

  const handleSetClassName = (className: string) => {
    setClasstName(className);
  };

  // const handleSetEndDate = (endDate: Moment | null) => setEndDate(endDate);

  const handleSetEndDate = (endDate: Moment | null) => {
    const projectDate = endDate ? endDate.toString() : "";
    setEndDate(projectDate);
  };

  const handleSetStartDate = (startDate: Moment | null) => {
    const projectDate = startDate ? startDate.toString() : "";
    setStartDate(projectDate);
  };

  return {
    mutation,
    projectName,
    endDate,
    startDate,
    viewsSelected,
    classtName,
    handleSetProjectName,
    handleSetEndDate,
    handleSetSelected,
    handleSetClassName,
    handleSetStartDate,
  };
};

export default useCreateProject;
