var a=[1,2,3];
var b=new Array();
b[0]="1";
b[1]="a";
b[2]=12;
var c={1:"a",2:"b",3:"c"};
function getList(ac){
    ac.forEach(x => {
        console.log(x);
    });
    
}

var num1=1;
num2=2; //全域
console.log(this.num1);
console.log(window.num2);
function toFont(a,b){
    document.getElementById("L1").innerHTML=a;
    document.getElementById("L2").innerHTML=b;

    alert(1);
}
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    

