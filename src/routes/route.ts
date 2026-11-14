import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/products.controllers";

const routeHandler = (req : IncomingMessage, res : ServerResponse) => {
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
        productController(req, res);
    } else {
        // console.log("404. Not Found.");
        // res.writeHead(200, {"Content-Type": "text/plain"});
        // res.end("404 Not Found.");
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message : "404 Not Found."}));
        // res.writeHead(200, {"Content-Type": "application/xml"});
        // res.end("<h3>404 Not Found.</h3>");
    }
};

export default routeHandler;