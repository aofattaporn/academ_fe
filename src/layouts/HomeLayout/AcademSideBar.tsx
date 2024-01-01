import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { pageItem } from "../../types/GenericType";

const AcademSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Drawer
      sx={{ display: "block" }}
      variant="permanent"
      open={isSidebarOpen}
      onClose={toggleSidebar}
    >
      <List sx={{ padding: "0px", margin: "0px" }} disablePadding>
        {pageItem.map((page) => (
          <ListItem key={page.title}>
            <ListItemButton>
              <Link
                className="flex items-center justify-center"
                to={page.navigate}
                replace
              >
                <ListItemIcon>{page.Icon}</ListItemIcon>
                {/* <ListItemText
                  primary={page.title}
                  sx={{ display: isSidebarOpen ? "none" : "block" }}
                /> */}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>

    // <div className=" h-full bg-primary">
    //   <h1>sidebar</h1>
    // </div>
  );
};

export default AcademSideBar;
