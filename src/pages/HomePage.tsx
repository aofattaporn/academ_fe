import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user);

  return <div>{user.user.email}</div>;
};

export default HomePage;
