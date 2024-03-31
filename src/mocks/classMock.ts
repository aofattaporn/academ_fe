import { HttpResponse, delay, http } from "msw";
import { RESPONSE_OK, ResponseCustom } from "../types/GenericType";
import { Class, ListClass } from "../types/ClassType";


const getAllClassSuccess = http.get("/api/v1/class/users/id", async () =>{
    const mockRes: ResponseCustom<ListClass[]>={
        status: 200,
        message: RESPONSE_OK,
        description: "Success",
        data:[
            {
                classId:"1",
                classProfile:{
                    className:"CSS322 Software Engineering II",
                    avatarColor:"#AF8AE2",
                },
                memberCounts: 30,
            },
            {
                classId:"2",
                classProfile:{
                    className:"CSS321 Software Engineering I",
                    avatarColor:"#FFA8A7",
                },
                memberCounts: 30,
            }
        ]
    };
    return HttpResponse.json(mockRes, { status:200 });
});

const gettAllClassError = http.get("/api/v1/class/users/id", () =>
  HttpResponse.error()
);

const getClassSuccess = http.get("/api/v1/class/:classId", async () =>{
    const mockRes: ResponseCustom<Class> = {
        status: 200,
        message: RESPONSE_OK,
        description: "Success",
        data: {
            classInfo:{
                classId:"1",
                classProfile:{
                    className:"CSS321 Software Engineering I",
                    avatarColor:"#FFA8A7",
                },
                members: [
                    {
                      userName: "User One",
                    },
                    {
                      userName: "User Two",
                    },
                    {
                      userName: "User Three",
                    },
                ],
                announce: [
                    {
                    announceId:"1",
                    announceDetail: "Welcome to class",
                    announceDate: new Date(),
                    }
                ],
                classDescription:{
                    classId:"1",
                    classDescription:"Continuing from CSS 321. Implementation. Software verification and validation.",
                },
                instructor:[
                    {
                        instructorName: "Wittawin Susutti",
                    }
                ]
            }
        }
    }
    await delay(3000);

    return HttpResponse.json(mockRes, { status: 200 });
});

const gettClassError = http.get("/api/v1/class/users/id", () =>
  HttpResponse.error()
);

export const classMock = {
    getAllClassSuccess,
    getClassSuccess,
    gettAllClassError,
    gettClassError
}