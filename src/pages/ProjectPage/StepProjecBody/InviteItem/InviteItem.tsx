import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";

type EmailItemProps = {
  email: string;
  role: string;
};

const InviteItem = ({ email, role }: EmailItemProps) => {
  return (
    <div className="flex justify-between border-primary border-solid border p-4 py-2 rounded-md bg-primary-subtle mt-2">
      <div className="flex items-center gap-4">
        <div className="bg-primary-light py-1 px-2 rounded-md text-white text-sm">
          <p>{role}</p>
        </div>
        <p className="text-primary-dark">{email}</p>
        <MailIcon className="text-primary-light" />
      </div>

      <CloseIcon className="cursor-pointer hidden text-primary" />
    </div>
  );
};

export default InviteItem;
