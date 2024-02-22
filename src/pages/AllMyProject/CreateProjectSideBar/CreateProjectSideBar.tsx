import moment from "moment";
import CreateProjectButtonComp from "../../../components/Button/CreateProjectButtonComp";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import { IconButton, TextField } from "@mui/material";
type CreateProjectSideBarProps = {
  isOpen: boolean;
  handleClose: () => void;
};
const CreateProjectSideBar = ({
  isOpen,
  handleClose,
}: CreateProjectSideBarProps) => {
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
              <p className="text-md text-dark">project Name</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ borderRadius: "200px" }}
                fullWidth
              />
            </div>
            <div className="my-8">
              <p className="text-md text-dark">project duration</p>
              <div className="flex justify-between gap-4">
                <DatePicker defaultValue={moment("2022-04-17")} />
                <DatePicker defaultValue={moment("2022-04-17")} />
              </div>
            </div>
            <div className="my-8">
              <p className="text-md text-dark">views defualt</p>
              <div className="flex justify-between gap-4 border-transparent px-0.5">
                <div className="bg-white w-12 h-12 rounded-md border border-solid flex justify-center items-center ">
                  <NoteAddIcon sx={{ color: "grey" }} />
                </div>{" "}
                <div className="bg-white w-12 h-12 rounded-md border border-solid flex justify-center items-center ">
                  <ListIcon sx={{ color: "grey" }} />
                </div>{" "}
                <div className="bg-white w-12 h-12 rounded-md border border-solid flex justify-center items-center ">
                  <ViewTimelineIcon sx={{ color: "grey" }} />
                </div>
                <div className="bg-white w-12 h-12 rounded-md border border-solid flex justify-center items-center ">
                  <DashboardIcon sx={{ color: "grey" }} />
                </div>
                <div className="bg-white w-12 h-12 rounded-md border border-solid flex justify-center items-center ">
                  <CalendarTodayIcon sx={{ color: "grey" }} />
                </div>
              </div>
            </div>
            <CreateProjectButtonComp
              title="Create project"
              disable={false}
              handleChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectSideBar;
