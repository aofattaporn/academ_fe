type AvatarProjectProps = {
  projectName: string;
  color: string;
};

const AvatarProject = ({ projectName, color }: AvatarProjectProps) => {
  return (
    <div
      className="rounded-md w-16 h-16 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <p className="font-bold text-white text-3xl">
        {projectName ? projectName.toUpperCase().at(0) : "-"}
      </p>
    </div>
  );
};

export default AvatarProject;
