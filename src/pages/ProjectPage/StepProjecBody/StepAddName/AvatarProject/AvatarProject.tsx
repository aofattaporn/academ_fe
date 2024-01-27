type AvatarProjectProps = {
  projectName: string;
  color: string;
};

const AvatarProject = ({ projectName, color }: AvatarProjectProps) => {
  return (
    <div
      className={`bg-[${color}] rounded-md w-16 h-16 flex justify-center items-center`}
    >
      <p className="font-bold text-white text-3xl">
        {projectName ? projectName.toUpperCase().at(0) : "-"}
      </p>
    </div>
  );
};

export default AvatarProject;
