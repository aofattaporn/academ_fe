import TaskProject from "./component/TasksProject";

const MytaskPage = () => {
  return (
    <div className="w-full h-full bg-main">
      <div className="w-full h-20 bg-primary-light grid content-center">
        <div className="ml-4">
          <p className="text-black font-bold text-2xl">My Task</p>
        </div>
      </div>
      <TaskProject />
    </div>
  );
};

export default MytaskPage;
