//https://www.youtube.com/watch?v=gOPS_1jgaR4

const http = require("http")

const server = http.createServer((req, res) =>{
    //res.writeHead(200, {"Content-Type": "text/html"})
    res.end("Node Js Server")
})

const port=3000;
const ip="127.0.1.1";


server.listen(port,ip,()=>{
    console.log(`Server running at http://${ip}:${port}`);
});