import { Avatar } from "@mui/material";

const OwnerItem = () => {
  return (
    <div className="text-gray-400 my-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar
          className="bg-white"
          sx={{
            width: 32,
            height: 32,
            backgroundColor: "White",
            color: "black",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
          }}
        >
          <p className="text-gray-400 text-md">A</p>
        </Avatar>
        <p>Attaporn Peungsook</p>
      </div>
      <div className=" bg-primary-subtle py-1 px-2 rounded-md  text-gray-400 text-sm">
        <p>Owner</p>
      </div>
    </div>
  );
};

export default OwnerItem;
