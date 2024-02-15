import { Size } from "../../../../../types/ProjectType";

type AvatarProjectProps = {
  projectName: string;
  color: string;
  size: Size;
};

const AvatarProject = ({ projectName, color, size }: AvatarProjectProps) => {
  return (
    <div
      className={`rounded-md flex justify-center items-center
          ${size === Size.small ? "w-10 h-10" : null} 
          ${size === Size.medium ? "w-16 h-16" : null} 

      `}
      style={{ backgroundColor: color }}
    >
      <p
        className={`font-bold text-white 
        ${size === Size.small ? "text-2xl" : null} 
        ${size === Size.medium ? "text-3xl" : null} 
        `}
      >
        {projectName ? projectName.toUpperCase().at(0) : "-"}
      </p>
    </div>
  );
};

export default AvatarProject;
