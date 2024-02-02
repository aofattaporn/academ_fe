// Select the database to use.
use("academDB");

// db.createCollection("projects")
// db.createCollection("tasks")
// db.createCollection("processes")

// db.projects.insertOne({
//     "_id": ObjectId("6093d9af4d29b1b476c9b71a"),
//     "projectName": "Project Axx",
//     "projectStartDate": ISODate("2022-01-01"),
//     "projectEndDate": ISODate("2022-12-31"),
//     "members": [
//       {
//         "user_id": ObjectId("6093d9af4d29b1b476c9b714"),
//         "role_id": ObjectId("6093d9af4d29b1b476c9b715")
//       },
//       {
//         "user_id": ObjectId("6093d9af4d29b1b476c9b716"),
//         "role_id": ObjectId("6093d9af4d29b1b476c9b717")
//       }
//     ],
//     "createdAt": ISODate("2022-01-01T00:00:00Z"),
//     "updatedAt": ISODate("2022-01-01T00:00:00Z"),
//     "process_id": [ ObjectId("6093d9af4d29b1b476c9b718"), ObjectId("6093d9af4d29b1b476c9b719") ]
//   })

//   db.tasks.insertOne({
//     "_id": ObjectId("6093d9af4d29b1b476c9b71a"),
//     "project_id": ObjectId("6093d9af4d29b1b476c9b713"),
//     "taskName": "Task ABC",
//     "assignee_id": "user1",
//     "dueDate": ISODate("2022-01-31"),
//     "startDate": ISODate("2022-01-01"),
//     "createdAt": ISODate("2022-01-01T00:00:00Z"),
//     "updatedAt": ISODate("2022-01-01T00:00:00Z"),
//     "process_id": ObjectId("6093d9af4d29b1b476c9b718")
//   })
