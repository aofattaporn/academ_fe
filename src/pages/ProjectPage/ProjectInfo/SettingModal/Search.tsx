import { SetStateAction, useEffect, useState } from "react";
import { QUERY_KEY } from "../../../../types/GenericType";
import { useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import { json } from "stream/consumers";
import { ListProject } from "../../../../types/ProjectType";
import axios from "axios";
import useAllMyProjects from "../../../../hooks/projectHook/useAllMyProjects";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const { projectData } = useAllMyProjects();
  const handleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="">
      <TextField
        type="text"
        placeholder="Search"
        size="small"
        fullWidth
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />

      {projectData
        ?.filter((project) => {
          const projectName = project.projectProfile.projectName.toLowerCase();
          const searchItem = search.toLowerCase();
          return searchItem === "" || projectName.includes(searchItem);
        })
        .map((project) => {
          return (
            <Link to={`/projects/${project.projectId}`}>
              <div
                key={project.projectId}
                className="hover:cursor-pointer hover:bg-background-primary_subtle py-2 px-2 mt-2 rounded-md"
              >
                <div className="flex gap-4 items-center">
                  <h1
                    style={{
                      backgroundColor: project.projectProfile.avatarColor,
                    }}
                    className="text-xl font-bold bg-primary rounded-md  w-12 h-12 flex items-center justify-center text-white"
                  >
                    {project.projectProfile.projectName.charAt(0)}
                  </h1>
                  <h1 className="text-xl font-bold text-dark">
                    {project.projectProfile.projectName}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Search;
