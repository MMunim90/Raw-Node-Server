import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { url } from "inspector";

const server : Server = createServer((req : IncomingMessage, res : ServerResponse) => {
    // console.log("Request : ", req);
    // console.log("Response : ", res);

    // console.log(req.url);
    // console.log(req.method);

    const url = req.url;
    const method = req.method;

    if(url === "/" && method === "GET"){
        // console.log("This is root route.");
        // res.writeHead(200, {"Content-Type": "text/plain"});
        // res.end("This is root route.");
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message : "This is root route."}));
        // res.writeHead(200, {"Content-Type": "application/xml"});
        // res.end("<h3>This is root route.</h3>");
    } else if(url?.startsWith("/products")) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "This is products route."}));
    } else {
        // console.log("404. Not Found.");
        // res.writeHead(200, {"Content-Type": "text/plain"});
        // res.end("404 Not Found.");
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message : "404 Not Found."}));
        // res.writeHead(200, {"Content-Type": "application/xml"});
        // res.end("<h3>404 Not Found.</h3>");
    }
})

server.listen(5000, () => {
    console.log("Server is running successfully!!!");
})