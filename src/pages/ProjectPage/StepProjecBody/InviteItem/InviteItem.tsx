import CloseIcon from "@mui/icons-material/Close";

type EmailItemProps = {
  email: string;
  role: string;
};

const InviteItem = ({ email, role }: EmailItemProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <CloseIcon className="cursor-pointer hidden text-primary" />
        <p className="text-dark">{email}</p>
      </div>
      <div className="bg-primary-light py-1 px-2 rounded-md text-white text-sm">
        <p>{role}</p>
      </div>
    </div>
  );
};

export default InviteItem;
