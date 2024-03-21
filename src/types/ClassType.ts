export interface Class{
  classInfo: ClassInfo;
}

export interface ListClass {
    classId: string;
    classProfile: ClassProfile;
    memberCounts: number;
  }

export interface ClassProfile{
    className: string;
    avatarColor: string;
}

export interface ClassInfo{
  classId: string;
  classProfile: ClassProfile;
  members: Member[];
  announce: Announcement[];
  classDescription: ClassDescription;
  instructor: Instructor[];
}

export interface Announcement{
  announceId:string;
  announceDetail:string;
  announceDate:Date;
}

export interface ClassDescription{
  classId:string;
  classDescription:string;
}

export interface Member {
  userName: string;
}

export interface Instructor{
  instructorName: string;
}