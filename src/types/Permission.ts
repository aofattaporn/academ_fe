export interface Permission {
  id: string;
  member: MembersPermission;
  project: ProjectPermission;
  tasks: TaskPermission;
  role: RolePermission;
}

export interface MembersPermission {
  addRole: boolean;
  inviteMember: boolean;
  removeMember: boolean;
}

export interface ProjectPermission {
  editProfile: boolean;
}

export interface TaskPermission {
  addNew: boolean;
  delete: boolean;
  edit: boolean;
  manageProcess: boolean;
}

export interface RolePermission {
  addNew: boolean;
  edit: boolean;
  delete: boolean;
}

export interface Role {
  roleId: string;
  roleName: string;
  permission: Permission;
}

const memberRole: Role = {
  roleId: "1",
  roleName: "Member",
  permission: {
    id: "1",
    member: {
      addRole: false,
      inviteMember: false,
      removeMember: false,
    },
    project: {
      editProfile: false,
    },
    tasks: {
      addNew: false,
      delete: false,
      edit: false,
      manageProcess: false,
    },
    role: {
      addNew: false,
      edit: false,
      delete: false,
    },
  },
};

const ownerRole: Role = {
  roleId: "2",
  roleName: "Owner",
  permission: {
    id: "2",
    member: {
      addRole: true,
      inviteMember: true,
      removeMember: true,
    },
    project: {
      editProfile: true,
    },
    tasks: {
      addNew: true,
      delete: true,
      edit: true,
      manageProcess: true,
    },
    role: {
      addNew: true,
      edit: true,
      delete: true,
    },
  },
};

export const NEW_ROLE: Role = {
  roleId: "3",
  roleName: "Watcher",
  permission: {
    id: "3",
    member: {
      addRole: true,
      inviteMember: true,
      removeMember: true,
    },
    project: {
      editProfile: true,
    },
    tasks: {
      addNew: true,
      delete: true,
      edit: true,
      manageProcess: true,
    },
    role: {
      addNew: true,
      edit: true,
      delete: true,
    },
  },
};

export const UPDATE_ROLE_NAME: Role = {
  roleId: "3",
  roleName: "Watcher Update",
  permission: {
    id: "3",
    member: {
      addRole: true,
      inviteMember: true,
      removeMember: true,
    },
    project: {
      editProfile: true,
    },
    tasks: {
      addNew: true,
      delete: true,
      edit: true,
      manageProcess: true,
    },
    role: {
      addNew: true,
      edit: true,
      delete: true,
    },
  },
};

export const UPDATE_ROLE_PERMISSION: Role = {
  roleId: "3",
  roleName: "Watcher",
  permission: {
    id: "3",
    member: {
      addRole: false,
      inviteMember: false,
      removeMember: false,
    },
    project: {
      editProfile: true,
    },
    tasks: {
      addNew: true,
      delete: true,
      edit: true,
      manageProcess: true,
    },
    role: {
      addNew: true,
      edit: true,
      delete: true,
    },
  },
};
export const MOCK_ROLE: Role[] = [memberRole, ownerRole];

export const ROLE_OWNER: string = "Owner";
export const ROLE_MEMBER: string = "Member";
