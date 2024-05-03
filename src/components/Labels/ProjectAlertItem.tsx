import moment from "moment";

type ProjectAlertItemProps = {
  projectEndDate: string | Date | null;
  isArchive: boolean;
};

const ProjectAlertItem = ({
  projectEndDate,
  isArchive,
}: ProjectAlertItemProps) => {
  return (
    <div>
      {projectEndDate &&
      moment(projectEndDate).isSame(moment(), "day") &&
      !isArchive ? (
        <div className="text-sm p-1 px-6 rounded-md border-2 border-red-400 text-red-400">
          Project Deadline today
        </div>
      ) : null}

      {projectEndDate &&
      moment(projectEndDate).isBefore(moment(), "day") &&
      !isArchive ? (
        <div className="text-sm p-1 px-6 rounded-md border-2 border-red-400 text-red-400">
          Project Deadline passed
        </div>
      ) : null}

      {isArchive ? (
        <div className="text-sm p-1 px-6 rounded-md border-2 border-success text-success">
          Archived
        </div>
      ) : null}
    </div>
  );
};

export default ProjectAlertItem;
