import { useState } from "react";
import RoleView from "./RoleView/RoleView";

enum MANAGE_VIEW {
  ROLE = "ROLE",
  PERMMISSION = "PERMMISSION",
}

type VIEWS = { name: string; view: MANAGE_VIEW };

const SETTING_VIEWS: VIEWS[] = [
  { name: "All Roles", view: MANAGE_VIEW.ROLE },
  { name: "Permissions", view: MANAGE_VIEW.PERMMISSION },
];

const ManageProjectPermissions = () => {
  const [view, setView] = useState<MANAGE_VIEW>(MANAGE_VIEW.ROLE);

  const handleSwitchView = (selectedView: MANAGE_VIEW) => setView(selectedView);

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="grid grid-cols-5">
        {SETTING_VIEWS.map((views, index) => {
          return (
            <button
              key={index}
              onClick={() => handleSwitchView(views.view)}
              className={`border-b-2 col-span-1 flex justify-start ${
                view === views.view
                  ? "text-primary font-bold border-primary"
                  : "text-gray-400"
              }`}
            >
              <p>{views.view}</p>
            </button>
          );
        })}

        <div className="border-b-2 col-span-3"></div>
      </div>

      {view === MANAGE_VIEW.ROLE ? <RoleView /> : null}

      {view === MANAGE_VIEW.PERMMISSION ? (
        <div className=" w-full h-64 rounded-md border-opacity-5 border-2 p-4">
          Permission
        </div>
      ) : null}
    </div>
  );
};

{
}

export default ManageProjectPermissions;
