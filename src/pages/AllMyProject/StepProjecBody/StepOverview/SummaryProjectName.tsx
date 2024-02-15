type SummaryProjectNameProps = {
  projectName: string;
  avatarColor: string;
};

const SummaryProjectName = ({
  projectName,
  avatarColor,
}: SummaryProjectNameProps) => {
  return (
    <div className="my-4">
      <h1 className="text-lg font-bold text-primary-dark">ProjectName</h1>
      <div className=" flex gap-2 items-center">
        <div
          className="rounded-md bg-primary w-16 h-16 flex justify-center items-center"
          style={{ backgroundColor: avatarColor }}
        >
          <p className=" font-bold text-white text-3xl">
            {projectName ? projectName.at(0) : "-"}
          </p>
        </div>
      </div>
      <p className="text-lg text-dark">{projectName}</p>
    </div>
  );
};

export default SummaryProjectName;
