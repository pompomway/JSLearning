
var a=1;
b=2; //全域

console.log(this.a);
console.log(this.b);



delete a;
delete b; //全域刪不掉，下這行再取用b會報錯 console.log(b);
