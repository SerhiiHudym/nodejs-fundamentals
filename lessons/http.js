const http = require("http");
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    // ==============================================
    // res.writeHead(200, {
    //     "Content-type": "text/html; charset=utf-8"
    // })
    // res.end("<h1>Hello, World!</h1>");

    // res.end(req.url)
    // ==============================================



    // ==============================================
    // Стрим по умолчанию работает с буфером и со строкой

    // res.writeHead(200, {
    //     "Content-type": "application/json"
    // })
    // if (req.url === "/users") return res.end(JSON.stringify([{id: 1, name: "Serhii", surname: "Hudym", job: "developer"}]));
    // if (req.url === "/posts") return res.end("POSTS");
    // ==============================================
});

server.listen(PORT, () => {
    console.log("Server started on PORT: " + PORT + ".");
});