var mysql=require("mysql");

var conn=mysql.createConnection({
    host:"aws-tokyo.cmvw70di9ch0.ap-northeast-1.rds.amazonaws.com",
    user:"admin",
    password:"ai4a83ai4a83",
    database:"dbconnection"
});

 
conn.connect();



let sql="select id,pass from login;";
conn.query(sql,(err,result)=>{
    if(err) throw err;
    
    console.log(result);
});

conn.end();





//確認一下websocket的時候html傳回js的方法，把前台的資料丟進來比較看看。