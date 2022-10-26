

function getForm(res){
    var x=document.forms["myForm"]["fname"].value;
    if(x==null || x==""){
        res.end("must input name");
        return false;
    }else{
        res.end(x);
    }
}



const http = require("http")

const myApp = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type": "text/html"})
    getForm(res);
})


myApp.listen(3000)