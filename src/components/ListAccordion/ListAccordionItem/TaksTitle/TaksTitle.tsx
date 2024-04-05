type TaksTitleProps = {
  isEdit: boolean;
};

const TaksTitle = ({ isEdit }: TaksTitleProps) => {
  return (
    <tr
      className={`grid grid-cols-4 items-center w-full font-bold ${
        isEdit ? "pr-8" : ""
      }`}
    >
      <th className="bg-main text-center">Tasks Name</th>
      <th className="bg-main text-center">Assignee </th>
      <th className="bg-main text-center">Start Date</th>
      <th className="bg-main text-center">Due Date</th>
    </tr>
  );
};

export default TaksTitle;
