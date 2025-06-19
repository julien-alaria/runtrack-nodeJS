const server = require('./server');
const { getAllTasks } = require('./tasks');

const router = server.on("request", (req, res) => {

    const parts = req.url.split("/");
    const id= parts[2];

    if (req.url === "/tasks" && req.method === "GET") {

        getAllTasks(req, res);


    } else if (req.url === "/tasks" && req.method === "POST") {

        createTasks(req, res);

    } else if (req.url.startsWith("/tasks/") && req.method === "PUT") {

        if (!id) {

        res.writeHead(400, { "Content-Type": "text/plain"});
        return res.end("ID manquant");

        }
        updateTasks(req, res, id);

    } else if (req.url.startsWith("/tasks/") && req.method === "DELETE") {

        if (!id) {

            res.writeHead(400, { "Content-Type": "text/plain"});
            return res.writeHead("ID manquant");
        }
        deleteTasks(req, res, id);

    } else {

        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Route non trouvée");

    }
});

module.exports = router;