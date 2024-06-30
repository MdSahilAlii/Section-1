function addNums(a,b){
    var c= a+b;
    // c= a+b;
    

    console.log(c);
}

addNums(4,4);
// console.log(c);

const getAvg=function(m1,m2,m3 ,m4=70){
    const avg=(m1+m2+m3+m4)/4;
    console.log(m1,m2,m3,m4);
    // console.log(avg);
    return avg;

}
const res=getAvg(20,30,40);

console.log(res);

console.log("Arrow Function");


const factorial=(n)=>{
    let f=1;

    for (let i=2;i<=n;i++){
        f*=i;
    }
    return f;
}

const ans=factorial(5);
console.log(ans);

// array destructuring

let [a,b,c,d]=[7,21,54,22];

[b,c]=[c,b];

console.log(b,c);

const [name1 ,name2,  , ,name5]=[ 'ramu', 'shamu','raju' , 'pinki' , 'kalu'];
console.log(name5);


const getReport = (m1,m2,m3,m4,max=100)=>{

    const avg=getAvg(m1,m2,m3,m4);
    const per = avg/max * 100;

    return [avg,per];
}
const [v1,v2]= getReport(123,234,213,34,200)

console.log(v1,v2);
console.log("-------------");


const divisibleBy7=(start, end)=>{
    let sum=0;
    for(let i=start;i<=end;i++){
         
        if(i%7===0){
            console.log(i);
            sum+=i;
        }
    }
    console.log(sum);
}

divisibleBy7(10,100);