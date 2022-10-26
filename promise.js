let sentToDo=true;

let p=new Promise((resolve,reject)=>{  //resolve履行  //reject未履行
    if(sentToDo){
        console.log("send todo");
        resolve("get String from resolve");
    }else{
        console.log("is not todo");
        reject();
    }
});

p.then((message)=>{console.log(message)})
 .catch(()=>{console.log("Promise is not resolve")});



let f=fetch("https://jsonplaceholder.typicode.com/users");

f.then((userData)=>{
    return userData.json();  //網址來源資料是json,要轉成JSON檔然後return到下一個then
}).then((jsonData)=>{
    console.log(jsonData);
});