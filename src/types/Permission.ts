export interface Permission {
  id: string;
  member: MembersPermission;
  project: ProjectPermission;
  tasks: TaskPermission;
  role: RolePermission;
}

export interface MembersPermission {
  addRole: boolean;
  invite: boolean;
  remove: boolean;
}

export interface ProjectPermission {
  editProfile: boolean;
  archive: boolean;
  delete: boolean;
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

export interface RoleAndFullPermission {
  roleId: string;
  roleName: string;
  permission: Permission;
}

export interface RoleAndRolePermission {
  rolesAndFullPermission: RoleAndFullPermission[];
  rolePermission: RolePermission;
}

const memberRole: RoleAndFullPermission = {
  roleId: "1",
  roleName: "Member",
  permission: {
    id: "1",
    member: {
      addRole: false,
      invite: false,
      remove: false,
    },
    project: {
      editProfile: false,
      archive: false,
      delete: false,
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

const ownerRole: RoleAndFullPermission = {
  roleId: "2",
  roleName: "Owner",
  permission: {
    id: "2",
    member: {
      addRole: true,
      invite: true,
      remove: true,
    },
    project: {
      editProfile: true,
      archive: true,
      delete: true,
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

export const NEW_ROLE: RoleAndFullPermission = {
  roleId: "3",
  roleName: "Watcher",
  permission: {
    id: "3",
    member: {
      addRole: true,
      invite: true,
      remove: true,
    },
    project: {
      editProfile: false,
      archive: false,
      delete: false,
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

export const UPDATE_ROLE_NAME: RoleAndFullPermission = {
  roleId: "3",
  roleName: "Watcher Update",
  permission: {
    id: "3",
    member: {
      addRole: true,
      invite: true,
      remove: true,
    },
    project: {
      editProfile: false,
      archive: false,
      delete: false,
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

export const UPDATE_ROLE_PERMISSION: RoleAndFullPermission = {
  roleId: "3",
  roleName: "Watcher",
  permission: {
    id: "3",
    member: {
      addRole: false,
      invite: false,
      remove: false,
    },
    project: {
      editProfile: false,
      archive: false,
      delete: false,
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
export const MOCK_ROLE: RoleAndFullPermission[] = [memberRole, ownerRole];

export const ROLE_OWNER: string = "Owner";
export const ROLE_MEMBER: string = "Member";
