
let mysql=require("mysql");

let conn=mysql.createConnection({
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