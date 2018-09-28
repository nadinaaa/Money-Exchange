module.exports = function makeExchange(currency) {
    let m=currency;
     if(m<=0)
     {
        var k = {};
        return k;
     }
    if(m>10000)
    {
        var k={
            error: "You are rich, my friend! We don\'t have so much coins for exchange"
        };
        return k;
    }
    let h=0,q=0,d=0,n=0,p=0;
    let i=0;
    let mas=[50,25,10,5,1];
    do
    {
        m-=mas[i];
        if(m<0)
        {
            m+=mas[i];
            i++;
        }
        else
        {
            if(i===0) h+=1;
            if(i===1) q+=1;
            if(i===2) d+=1;
            if(i===3) n+=1;
            if(i===4) p+=1;
        }
    }
    while(m!=0);
    
    var obj = {
        H:0,
        Q:0,
        D:0,
        N:0,
        P:0
    };
    obj.H=h;
    obj.Q=q;
    obj.D=d;
    obj.N=n;
    obj.P=p;
    if(h==0) delete obj.H;
    if(q==0) delete obj.Q;
    if(d==0) delete obj.D;
    if(n==0) delete obj.N;
    if(p==0) delete obj.P;
    return obj;
}
    
