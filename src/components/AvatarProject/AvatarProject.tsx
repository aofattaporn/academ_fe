import { Size } from "../../types/ProjectType";

type AvatarProjectProps = {
  projectName?: string;
  color?: string;
  isLoading: boolean;
  size: Size;
};

const AvatarProject = ({
  projectName,
  color,
  size,
  isLoading,
}: AvatarProjectProps) => {
  return (
    <div
      className={`rounded-md flex justify-center items-center
          ${size === Size.small ? "w-10 h-10" : null} 
          ${size === Size.medium ? "w-16 h-16" : null} 
          ${size === Size.large ? "w-20 h-20" : null} 
          ${isLoading ? "animate-pulse" : null}

      `}
      style={{ backgroundColor: isLoading ? "rgb(229, 231, 235)" : color }}
    >
      <p
        className={`font-bold text-white 
        ${size === Size.small ? "text-2xl" : null} 
        ${size === Size.medium ? "text-3xl" : null} 
        ${size === Size.large ? "text-3xl" : null} 
        `}
      >
        {projectName ? projectName.toUpperCase().at(0) : "-"}
      </p>
    </div>
  );
};

export default AvatarProject;
