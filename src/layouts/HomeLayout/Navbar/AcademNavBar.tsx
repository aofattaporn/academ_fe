import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";

function AcademNaveBar() {
  const handleLogOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
  return (
    <div className="grid grid-cols-3 items-center static bg-primary-dark p-1 px-12">
      <div className="md:col-start-2 md:col-end-3 col-span-2 h-8 bg-white flex justify-between items-center rounded-3xl hover:cursor-pointer px-8">
        <p className="text-gray-400">Search Bar</p>
        <SearchIcon className="text-gray-400" />
      </div>
      <div className="flex justify-end" onClick={handleLogOut}>
        <button className="text-white font-roboto font-bold ">LogOut</button>
      </div>
    </div>
  );
}
export default AcademNaveBar;
