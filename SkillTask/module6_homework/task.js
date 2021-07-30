///////////////////////function///////////////////////////

//task 6.2.1

/*
let evenOddseparate=(arr)=>{
    let even=0;
    let odd=0;
    let zero=0;
    let remain=0;
    for(i=0;i<arr.length;i++){
        if(typeof arr[i]=='number'){
            if(arr[i]!==0){
                if(arr[i]%2==0){even+=1}
                else if(arr[i]%2!==0){odd+=1}
            }
            else zero+=1
        }
        else remain+=1
    }
    console.log(`обнаружено: четных ${even}, нечетных ${odd}, нулей ${zero}, неопознаных символов ${remain}`)
}
evenOddseparate(arr) */// оказывается оно уже у меня было сделано в предыдущем задании, я просто скопировал
 
                            
//task 6.4.2

//почему-то неуверен что сделал его правильно
/*

let enterNumber =+prompt('enter number')
function findSimpleNumber (anyNumber){

    let test = anyNumber
    let testArray = []
    if(!isNaN(anyNumber) && anyNumber>1 && anyNumber<1000){
        while(anyNumber>2){
            --anyNumber
            testArray.push(test%anyNumber)
            }
        if(testArray.find(item=>item==0)==0){
            console.log('difficult number')
        }
        else console.log('simple number')
    }   
    else console.log('wrong data')
}

findSimpleNumber(enterNumber)
*/


//task 6.5.3


/*                                  /////немного не понял,это всё что надо было сделать? 
let sumGenerate=(x)=>(y)=>x+y
console.log(sumGenerate(5)(8))
*/


//task 6.7.4



/*
let likeTimer=()=>{
    let start=+prompt('enter initial value')
    let end=+prompt('enter end value')
    let out=()=>{
        console.log(start)
        start++
        if(start===end+1){clearInterval(idInterval)}
    }
    let idInterval = setInterval(out,1000);
}

likeTimer()
*/


//task 6.8.5
/*
let multipl=(x,n)=>{
    if (n==1){return x}
    else return x*multipl(x,n-1)   
   }
   console.log(multipl(3,3))
   */