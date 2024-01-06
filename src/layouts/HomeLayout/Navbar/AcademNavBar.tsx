import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

function AcademNaveBar() {
  return (
    <div className="grid grid-cols-3 items-center static bg-primary-dark p-1 px-12">
      <div className="md:col-start-2 md:col-end-3 col-span-2 h-8 bg-white flex justify-between items-center rounded-3xl hover:cursor-pointer px-8">
        <p className="text-gray-400">Search Bar</p>
        <SearchIcon className="text-gray-400" />
      </div>
      <div className="flex justify-end ">
        <Avatar alt="Attaporn" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}
export default AcademNaveBar;
