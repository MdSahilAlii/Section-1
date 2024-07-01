const isPrime =(n)=>{
    for(let i=2;i<n;i++){
        if(n%i===0){
            console.log("Non Prime");
            return 0;
        }
    }
    console.log("Prime");
}

isPrime(4);


const isPallindrome=(x)=>{

    let temp=x;
    let rev=0;

    while(x!==0){
        
        digit=x%10;
        rev=rev*10 +temp;

        // Same datatype for both int and floor
        x=parseInt(x/10);

    }
    if(rev===x){
        console.log("Pallindrome");
    }
    else{
        console.log("Non Pallindrome");
    }
}


    isPallindrome(121);

    const reverse=(a)=>
{
    temp =a ;
    rev=0;

    while(a!==0){
        digit = a%10;
        rev=rev*10+digit;

        a=a/10;
    }

    console.log(rev);
}

reverse(1234);

const primeBtw=(start, end)=>{
    for(let i=start;i<=end;i++){
        for (let j=2;j<i;j++){
            if(i%j===0){
                break;
                
            }

        } 
        // terminated by break or loop = full 
        console.log("Prime");
    }
}


const fibo=(m)=>{
    a=0;b=1;

    console.log(a );
    console.log(b);

    for(let i=2;i<m;i++){
        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}

fibo(10);


