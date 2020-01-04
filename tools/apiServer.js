/*
This uses json-server, but with the module approach: https://github.com/typicode/json-server#module
Downside: You can't pass the json-server command line options.
Instead, can override some defaults by passing a config object to jsonServer.defaults();
You have to check the source code to set some items.
Examples:
Validation/Customization: https://github.com/typicode/json-server/issues/266
Delay: https://github.com/typicode/json-server/issues/534
ID: https://github.com/typicode/json-server/issues/613#issuecomment-325393041
Relevant source code: https://github.com/typicode/json-server/blob/master/src/cli/run.js
*/

/* eslint-disable no-console */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults({
    // Display json-server's built in homepage when json-server starts.
    static: "node_modules/json-server/dist"
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function (req, res, next) {
    setTimeout(next, 0);
});

// Declaring custom routes below. Add custom routes before JSON Server router

// Add createdAt to all POSTS
server.use((req, res, next) => {

    const now = new Date();

    if (req.method === "POST") {
        req.body.created_at = now;
        req.body.last_updated_at = now;
    } else if (req.method === "PUT") {
        req.body.created_at = now; // don't know how to refer to existing value
        req.body.last_updated_at = now;
    }
    // Continue to JSON Server router
    next();
});

server.post("/projects/", function (req, res, next) {
    const error = validateProject(req.body);
    if (error) {
        res.status(400).send(error);
    } else {
        req.body.id = create_UUID();
        next();
    }
});

server.put("/projects/:id", function (req, res, next) {
    const error = validateProject(req.body);
    if (error) {
        res.status(400).send(error);
    } else {
        next();
    }
});

server.post("/projects/:id/tasks", function (req, res, next) {
    const error = validateTask(req.body);
    if (error) {
        res.status(400).send(error);
    } else {
        req.body.id = create_UUID();
        next();
    }
});

server.put("/tasks/:task_id", function (req, res, next) {
    const error = validateTask(req.body);
    if (error) {
        res.status(400).send(error);
    } else {
        next();
    }
});

server.patch("/tasks/:task_id", function (req, res, next) {
    let error = validateTaskPatch(req.body);

    if (error) {
        res.status(400).send(error);
    } else {
        error = applyPatch(req.body);
        if (error) {
            res.status(500).send(error);
        }
        next();
    }
});

// Use default router
server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});

// Centralized logic


function validateProject(project) {
    if (!project.name) return "Project name is required.";
    return "";
}

function validateTask(task) {
    if (!task.name) return "Task name is required.";
    if (!task.details) return "Task details is required.";
    if (["In Progress", "Done", "Hold", "To Do"].find(it => it === task.status) === undefined) return "Task details is required.";
    return "";
}


function validateTaskPatch(patch) {
    if (!["test", "remove", "add", "replace", "move", "copy"].find(it => it === patch.op)) {
        return "Operation is incorrect";
    }

    if (!["/name", "/details", "/status"].find(it => it === patch.path)) {
        return "Path not exists";
    }

    if (!patch.value) {
        return "Value is required";
    }

    return undefined;
}

function applyPatch(patch) {
    switch (patch.op) {
        case "replace":
            patch[`${patch.path.substr(1)}`] = patch.value;
            patch.op = undefined;
            patch.path = undefined;
            patch.value = undefined;
            break;
        default:
            return "Not implmeneted";
    }
}

function create_UUID() {
    let dt = new Date().getTime();

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
