const TaksTitle = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="ps-12 w-full grid grid-cols-4 gap-4 font-bold">
        <p className="bg-main text-center">Tasks Name</p>
        <p className="bg-main text-center">Assignee </p>
        <p className="bg-main text-center">Start Date</p>
        <p className="bg-main text-center">Due Date</p>
      </div>
    </div>
  );
};

export default TaksTitle;
