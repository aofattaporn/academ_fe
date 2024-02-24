import moment, { Moment } from "moment";
import CreateProjectButtonComp from "../../../components/Button/CreateProjectButtonComp";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import AllViewToggle from "./ViewToggle/AllViewToggle";
import { useMutation, useQueryClient } from "react-query";
import projectApi from "../../../libs/projectApi";
import { QUERY_KEY } from "../../../types/GenericType";
import {
  BTN_CREATE_PROJECT,
  ListProject,
  Views,
} from "../../../types/ProjectType";
type CreateProjectSideBarProps = {
  isOpen: boolean;
  handleClose: () => void;
};
const CreateProjectSideBar = ({
  isOpen,
  handleClose,
}: CreateProjectSideBarProps) => {
  const [projectName, setProjectName] = useState<string>("");
  const [endDate, setEndDate] = useState<Moment | null>();
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

  return (
    <div
      className={`duration-700 overflow-x-hidden bg-white max-h-full shadow-3xl 
        ${isOpen ? "md:w-4/6 lg:w-2/6 w-full" : "w-0"}`}
    >
      <div className="py-8 pl-4 pr-12">
        <div className="flex gap-4 items-start">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <div className="pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
            <h2 className="text-xl min-h-2 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
              Create My Project
            </h2>
            <p className="text-sm text-gray-400">
              Start building your next big idea with ease.
            </p>
            <div className="my-8">
              <p className="text-md text-dark my-2">Project Name</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ borderRadius: "200px" }}
                placeholder="Enter your project name"
                fullWidth
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="my-8">
              <p className="text-md text-dark my-2">Project End date</p>
              <div className="flex justify-between gap-2">
                <DatePicker
                  sx={{ width: "100%" }}
                  defaultValue={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  slotProps={{
                    field: {
                      clearable: true,
                    },
                  }}
                />
              </div>
            </div>
            <div className="my-8">
              <p className="text-md text-dark my-2">Views defualt</p>
              <AllViewToggle
                viewsSelected={viewsSelected}
                handleSelected={handleSetSelected}
              />
            </div>
            <CreateProjectButtonComp
              title={BTN_CREATE_PROJECT}
              disable={false}
              handleChange={mutation.mutate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectSideBar;
