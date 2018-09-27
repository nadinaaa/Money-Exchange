// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let m=currency;
 if(m<=0)
 {
    var p = {};
    return p;
 }
if(m>10000)
{
    var p={
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    return p;
}
var obj = {
    H:0,
    Q:0,
    D:0,
    N:0,
    P:0
};

while(m>0)
{
    m-=50;
    obj.H+=1;
}
if(m===0) return obj;
m+=50;
let i=0;
let mas=[25,10,5,1];
do{
m-=mas[i];
if(m<0)
{
    m+=mas[i];
    i++;
}
else
{
    if(i===0)
    obj.Q+=1;
    if(i===1)
    obj.D+=1;
    if(i===2)
    obj.N+=1;
    if(i===3)
    obj.P+=1;
}
}while(m!=0);
return obj;
}

