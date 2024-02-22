import { IconButton, TextField } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import ProjectBox from "./ProjectBox/ProjectBox";
import { useState } from "react";
import moment from "moment";
import CreateProjectButtonComp from "../../components/Button/CreateProjectButtonComp";

const MyProjectsPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between h-full">
      <div
        className={`my-20 mx-4 rounded-md duration-700 
       ${
         isOpen
           ? "w-0 mx-0 md:mx-4 md:w-4/6 md:ml-36 overflow-hidden"
           : "w-full md:mx-36"
       }`}
      >
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-bold">Published Project</h1>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <QueueIcon />
            </IconButton>
          </div>
          <h4 className="text-gray-300">These projects are available.</h4>
          <div
            className={`flex flex-wrap my-8 gap-4  w-full justify-center sm:justify-start duration-700`}
          >
            <ProjectBox
              projectName="Academ"
              avatarColor="#AF8AE2"
              membersCounts={4}
              projectEndDate={new Date()}
            />
            <ProjectBox
              projectName="JitD1"
              avatarColor="#6985FF"
              membersCounts={2}
              projectEndDate={new Date()}
            />
            <ProjectBox
              projectName="JitD2"
              avatarColor="#6985FF"
              membersCounts={2}
              projectEndDate={new Date()}
            />
            <ProjectBox
              projectName="JitD3"
              avatarColor="#6985FF"
              membersCounts={2}
              projectEndDate={new Date()}
            />
          </div>
        </div>
      </div>
      <div
        className={`duration-700 overflow-x-hidden bg-white max-h-full shadow-3xl 
      ${isOpen ? "md:w-2/6 w-full" : "w-0"}`}
      >
        <div className="py-8 pl-4 pr-12">
          <div className="flex gap-4 items-start">
            <IconButton onClick={() => setIsOpen(false)}>
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
    </div>
  );
};

export default MyProjectsPage;
