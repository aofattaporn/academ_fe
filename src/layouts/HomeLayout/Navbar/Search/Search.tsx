import { useState } from "react";
import { TextField } from "@mui/material";
import useAllMyProjects from "../../../../hooks/projectHook/useAllMyProjects";
import { useNavigate } from "react-router-dom";
import AvatarProject from "../../../../components/AvatarProject/AvatarProject";
import { Size } from "../../../../types/ProjectType";
import ProjectAlertItem from "../../../../components/Labels/ProjectAlertItem";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../../stores/modalSlice/modalSlice";
import ClassNameItem from "../../../../components/Labels/ClassNameItem";

const Search = () => {
  const [search, setSearch] = useState("");
  const { projectData, projectIsLoading } = useAllMyProjects();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="h-72 overflow-y-scroll">
      <TextField
        type="text"
        placeholder="Search"
        size="small"
        fullWidth
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />

      <div className="overflow-y-scroll mt-8">
        {projectData?.filter((project) => {
          const projectName = project.projectProfile.projectName.toLowerCase();
          const searchItem = search.toLowerCase();

          const className = project.className.toLowerCase();
          const cSearchItem = search.toLowerCase();

          return (
            searchItem === "" ||
            projectName.includes(searchItem) ||
            className.includes(cSearchItem)
          );
        }).length === 0 ? (
          <div>
            <h1 className="text-center text-gray-600 font-bold">
              No projects found
            </h1>

            <p className="text-center text-gray-600">
              Please try a different search term.
            </p>
          </div>
        ) : (
          projectData
            ?.filter((project) => {
              const projectName =
                project.projectProfile.projectName.toLowerCase();
              const searchItem = search.toLowerCase();

              const className = project.className.toLowerCase();
              const cSearchItem = search.toLowerCase();

              return (
                searchItem === "" ||
                projectName.includes(searchItem) ||
                className.includes(cSearchItem)
              );
            })
            .map((project) => {
              return (
                <div
                  key={project.projectId}
                  onClick={() => {
                    dispatch(closeModal());
                    navigate(`/projects/${project.projectId}`);
                  }}
                  className="hover:cursor-pointer hover:bg-main py-2 px-2 mt-2 rounded-md flex justify-between"
                >
                  <div className="flex gap-4">
                    <AvatarProject
                      isLoading={projectIsLoading}
                      size={Size.small}
                      projectName={project.projectProfile.projectName}
                      color={project.projectProfile.avatarColor}
                    />
                    <div>
                      <h1 className="text-md font-semibold text-dark">
                        {project.projectProfile.projectName}
                      </h1>
                      <p className=" text-gray-600 text-sm">
                        {project.members.length} members
                      </p>
                    </div>
                    <div>
                      <ClassNameItem className={project.className} />
                    </div>
                  </div>
                  <ProjectAlertItem
                    projectEndDate={project.projectEndDate}
                    isArchive={project.isArchive}
                  />
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};

export default Search;
