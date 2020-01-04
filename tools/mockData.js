const projects = [
    {
        id: "1f814995-da43-4a65-8208-4b5a5bb3538b",
        name: "Task Manger",
        created_at: "1915-02-24T03:26:13Z",
        last_updated_at: "2016-11-03T22:59:04.598Z"
    },
    {
        id: "4a2c88e0-f4b3-4827-82f4-701381cf1cac",
        name: "Other Project",
        created_at: "1943-08-05T16:04:47Z",
        last_updated_at: "1964-08-07T08:49:50.598Z"
    }
];

const tasks = [
    {
        id: "135291e5-7043-422a-8bc9-708a1798748f",
        name: "Some task",
        details: "Some task details",
        status: 'in Progress',
        projectId: "1f814995-da43-4a65-8208-4b5a5bb3538b",
        created_at: "2069-02-14T22:06:47.598Z",
        last_updated_at: "2072-12-16T15:44:31.598Z"
    },
    {
        id: "1c866731-4e4e-4482-bf9c-275ba677b5cc",
        name: "Other tasks for project Task Manager",
        details: "Other task details",
        status: 'To Do',
        projectId: "1f814995-da43-4a65-8208-4b5a5bb3538b",
        created_at: "2069-02-14T22:06:47.598Z",
        last_updated_at: "2072-12-16T15:44:31.598Z"
    },
    {
        id: "135291e5-7043-422a-8bc9-708a1798748f",
        name: "Some task for Other Project",
        details: "Some task details",
        status: 'Done',
        projectId: "4a2c88e0-f4b3-4827-82f4-701381cf1cac",
        created_at: "2069-02-14T22:06:47.598Z",
        last_updated_at: "2082-08-19T15:04:09.598Z"
    },
    {
        id: "1c866731-4e4e-4482-bf9c-275ba677b5cc",
        name: "Other tasks for other project",
        details: "Other task details",
        status: 'Hold',
        projectId: "4a2c88e0-f4b3-4827-82f4-701381cf1cac",
        created_at: "2082-08-19T15:04:09.598Z",
        last_updated_at: "2095-12-07T05:32:30.598Z"
    },
];


// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
    projects,
    tasks
};
