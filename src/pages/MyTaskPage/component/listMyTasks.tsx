const listMyTasks = () => {
  return (
    <div className="flex">
      <div className="w-1/2 h-8 flex pl-8 align-middle items-center">
        <p className="text-black font-normal text-sm">task1</p>
      </div>
      <div className="w-1/2 h-8 flex ml-4  align-middle justify-center items-center">
        <p className="text-black font-normal text-sm">Today</p>
      </div>
    </div>
  );
};

export default listMyTasks;
