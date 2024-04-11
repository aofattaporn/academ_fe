import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type RoleItemProps = {
  roleName: string;
  enable: boolean;
};

const RoleItem = ({ roleName, enable }: RoleItemProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <td className="grow">
        {roleName} {!enable && <span className="text-error">*</span>}
      </td>
      <td>
        <IconButton disabled={!enable}>
          <EditIcon />
        </IconButton>
      </td>
      <td>
        <IconButton disabled={!enable}>
          <DeleteForeverIcon />
        </IconButton>
      </td>
    </div>
  );
};

export default RoleItem;
