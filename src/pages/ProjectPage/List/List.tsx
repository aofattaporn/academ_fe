import { useProjectPermission } from "../ProjectPage";

const List = () => {
  const { taskPermission } = useProjectPermission();
  console.log(taskPermission);
  return <div>List</div>;
};

export default List;
