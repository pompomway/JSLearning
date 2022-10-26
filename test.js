var a=10
var b="10"
console.log(a==b)  //誤區,js比較不分型別
console.log(a===b) //比較型別也比較值
console.log("----------------")
var c=0;  //
if(c=3) {    //這樣打會直接把c重新賦值,改成c=0會被判斷為fales
    console.log(c)
    console.log("if")
}else{
    console.log(c)
}
console.log("----------------")
switch(a){                             //switch中是使用===判斷
    case 10: console.log("switch")
}

console.log("----------------")

var x=new Object();
var y;

console.log(x);