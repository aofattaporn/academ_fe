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

const Search = () => {
  const [search, setSearch] = useState("");
  const {
    projectData,
    projectRefetch,
  } = useAllMyProjects();
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

      <div className="">{projectData?.map((project)=>{
        return(
            <li>
                {project.projectProfile.projectName}
            </li>
        );
      }):null}
      </div>
    </div>
  );
};

export default Search;
