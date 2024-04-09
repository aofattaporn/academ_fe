import { IconButton } from "@mui/material";
import CreateProjectButtonComp from "../../../../../components/Button/CreateProjectButtonComp";
import TextFeildInputComp from "../../../../../components/Field/TextFeildInputComp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const RoleView = () => {
  return (
    <>
      <div className="my-4">
        <p className=" text-gray-200">Manage Role within this project</p>
        <div className=" grid grid-cols-4 gap-4 w-full">
          <div className=" col-span-3 ">
            <TextFeildInputComp
              placeholder={"Role Name"}
              value={""}
              handleProjectName={() => {}}
            />
          </div>
          <div className=" col-span-1">
            <CreateProjectButtonComp
              title={"Add"}
              disable={false}
              isCreating={false}
              handleChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div className="my-2">
        <p className="text-gray-200">All Role within this project</p>
        <table className=" w-full ">
          <tr className="flex items-center justify-between w-full">
            <td className=" grow">
              Owner <span className="text-error">*</span>
            </td>
            <td>
              <IconButton disabled>
                <EditIcon />
              </IconButton>
            </td>
            <td>
              <IconButton disabled>
                <DeleteForeverIcon />
              </IconButton>
            </td>
          </tr>{" "}
          <tr className="flex items-center justify-between w-full">
            <td className="grow">
              Member <span className="text-error">*</span>
            </td>
            <td>
              <IconButton disabled>
                <EditIcon />
              </IconButton>
            </td>
            <td>
              <IconButton disabled>
                <DeleteForeverIcon />
              </IconButton>
            </td>
          </tr>
        </table>
      </div>
    </>
    // </div>
  );
};

export default RoleView;
