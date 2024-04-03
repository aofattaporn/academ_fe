import {
  Backdrop,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { useProjectPermission } from "../../ProjectPage";
import { useRef, useState } from "react";
import { Process } from "../../../../types/ProjectType";

type CreateTasksByDateProps = {
  handleClose: () => void;
};

const CreateTasksByDate = ({ handleClose }: CreateTasksByDateProps) => {
  const { process } = useProjectPermission();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [myProcess, mySetProcess] = useState<Process | undefined>(
    process?.at(0)
  );

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <div className="bg-white p-8 rounded-md text-dark font-roboto w-5/12 absolute top-40 ">
        <div className="flex justify-end p-2">
          <IconButton onClick={handleClose}>
            <CloseIcon className="text-dark" />
          </IconButton>
        </div>
        <main className=" py-2">
          <TextareaAutosize
            defaultValue={""}
            onChange={(e) => console.log(e.target.value)}
            className="w-full text-3xl font-bold overflow-hidden border-none focus:outline-none px-8"
            autoFocus
          />
          <div className="grid grid-cols-1 gap-2 my-2">
            <div className=" grid grid-cols-3 gap-4 items-center">
              <p className="bg-main py-2 flex justify-center rounded-md">
                Process
              </p>
              <p
                style={{ backgroundColor: myProcess?.processColor }}
                className="col-span-2 flex justify-center h-full items-center text-white rounded-md hover:cursor-pointer"
                onClick={(e) => setAnchorElUser(e.currentTarget)}
              >
                {myProcess?.processName}
              </p>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                PaperProps={{ style: { width: "full" } }}
              >
                {process
                  ? process.map((item, index) => (
                      <MenuItem
                        key={index}
                        className="flex w-full bg-black"
                        onClick={() => {
                          mySetProcess(item);
                          setAnchorElUser(null);
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            style={{ backgroundColor: item.processColor }}
                            className=" w-4 h-4  rounded-full"
                          ></div>
                          <p>{item.processName}</p>
                        </div>
                      </MenuItem>
                    ))
                  : null}
              </Menu>
            </div>
            <div className=" grid grid-cols-3 gap-4 items-center">
              <p className=" col-span-1 bg-main py-2 flex justify-center rounded-md">
                start date
              </p>
              <div className="col-span-2 w-full">
                <DatePicker
                  defaultValue={moment()}
                  slotProps={{
                    textField: {
                      size: "small",
                      style: {
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-4 items-center">
              <p className="bg-main py-2 flex justify-center rounded-md">
                Due date
              </p>
              <div className="col-span-2">
                <DatePicker
                  defaultValue={moment()}
                  slotProps={{
                    textField: { size: "small", style: { width: "100%" } },
                  }}
                />
              </div>
            </div>
          </div>
        </main>
        <footer className=" flex justify-end  rounded-b-md">
          <Button variant="contained">Save</Button>
        </footer>
      </div>
    </Backdrop>
  );
};

export default CreateTasksByDate;
