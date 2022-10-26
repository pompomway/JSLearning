function sendRequest(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("AN");
        },2000);
    });
}


function getUserName1(){
    let username= sendRequest();
    console.log(username);
}



async function getUserName2(){
    let username=await sendRequest();
    console.log(username);
}


getUserName2();

