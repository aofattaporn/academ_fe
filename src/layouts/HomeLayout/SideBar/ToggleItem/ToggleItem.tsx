import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RefreshIcon from "@mui/icons-material/Refresh";
import ToggleTitle from "./ToggleTitle/ToggleTitle";
import SeemoreButton from "./SeemoreButton/SeemoreButton";
import { ListProject } from "../../../../types/ProjectType";
import ToggleTile from "./ToggleTile/ToggleTile";

type ToggleItemProps = {
  title: string;
  icons: ReactNode;
  isOpen: boolean;
  navigate: string;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  data?: ListProject[];
  refetch: () => void;
};

const ToggleItem = ({
  icons,
  title,
  isOpen,
  navigate,
  isLoading,
  isSuccess,
  isError,
  data,
  refetch,
}: ToggleItemProps) => {
  const { projectId } = useParams();
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  useEffect(() => {
    if (!isOpen) {
      setIsCollapse(true);
    }
  }, [isOpen, isCollapse]);

  return (
    <>
      <ToggleTitle
        handleCloseCollapse={() => setIsCollapse(!isCollapse)}
        icons={icons}
        isOpen={isOpen}
        title={title}
        isCollapse={isCollapse}
      />

      <div
        className={`overflow-hidden relative duration-100 mb-2 ${
          !isCollapse || !isOpen ? "h-0" : " h-auto"
        }`}
      >
        <SeemoreButton navigate={navigate} title={title} />

        {isLoading ? (
          <div
            className="p-4 flex cursor-pointer justify-between 
            animate-pulse w-full h-4 bg-gray-200 rounded-md"
          ></div>
        ) : null}

        {isSuccess
          ? data
              ?.filter((item) => !item.isArchive)
              .map((project, index) => (
                <ToggleTile
                  key={index}
                  title={title}
                  ItemId={project.projectId}
                  ItemName={project.projectProfile.projectName}
                  isSelected={project.projectId === projectId}
                  avatarColor={project.projectProfile.avatarColor}
                />
              ))
          : null}

        {isError ? (
          <div
            className="py-2 px-4 flex cursor-pointer 
              justify-between hover:text-primary"
            onClick={refetch}
          >
            <p className="font-semibold">Try to Refresh</p>
            <RefreshIcon />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ToggleItem;
