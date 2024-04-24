type TaksTitleProps = {
  isEdit: boolean;
};

const TaksTitle = ({ isEdit }: TaksTitleProps) => {
  return (
    <div
      className={`grid grid-cols-4 items-center w-full font-bold ${
        isEdit ? "pr-8" : ""
      }`}
    >
      <p className="bg-main text-center">Tasks Name</p>
      <p className="bg-main text-center">Assignee </p>
      <p className="bg-main text-center">Start Date</p>
      <p className="bg-main text-center">Due Date</p>
    </div>
  );
};

export default TaksTitle;
