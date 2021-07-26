                                    //task 5.3.1

/*
let maybeNumber = +prompt('enter the number')
if(typeof maybeNumber === "number" && isNaN(maybeNumber)==false){
    if(maybeNumber%2===0){
        console.log('number is even')
    }
    else {console.log('number is odd')}
}
if(isNaN(maybeNumber)==true){console.log('Ups, you wrong')}
*/

                                    //task 5.3.2

                                    //var 1
/*
let x = prompt('enter value');
if (isNaN(x)==false) {
        console.log('x - Number')
    }
else if(x =='true'|| x=='false'){ 
    console.log('x - Boolean expression')
    }
else if (isNaN(x)===true) {
    console.log('x - String')
    }
else console.log('x - undefined');
*/

                                    //var 2

/*
function typeX (x){
    switch(typeof x){
        case 'number':
            console.log('x - Number');
            break;
        case 'string':
            console.log('x - String');
            break;
        case 'boolean':
            console.log('x - Boolean');
            break;
    }
}
typeX ()
*/
                                    //task 5.4.3
/*
let h = prompt('enter some word');
let h2= h.split("").reverse().join("");
console.log (h2)*/

                                    //task 5.4.4
/*
let random = (Math.random()*100).toFixed(0);
console.log(random);
*/
                                    //task 5.5.5
/*    
let randomText = 'There those thousand thinkers were thinking how did the other three thieves go through';
let randomArray = randomText.split(' ');
console.log("array's length "+randomArray.length)
randomArray.forEach(console.log)
*/

                                    //task 5.6.6
/*
let arr = [9,9,9,9,9,9,9,9,9]
let findCopyArray = (arr)=>{
    let res = 0;
    let i = 0;
    while (i<arr.length){
        arr[0]==arr[i]?res=res+0:res=res+1
        i++
    }
    if (res==0){return true}
    else return false
    }
console.log(findCopyArray(arr))
*/

                                    //task 5.6.7
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
evenOddseparate(arr)*/

                                    //task 5.7.8
                                    /*
let adage = {
    name:'любишь',
    value:"кататься",
    toString: function() { return this.name+" "+this.value; },

}

let happening = [05,25]
let map = new Map;
map.set('конь','як')
map.set('продавец','консультант')
map.set(adage,'люби и катайся')
map.set('ни дна','ни покрышки')
map.set(3,'размер')
map.set(happening,'опять двадцать пять')
map.set('отсчет',[3,2,1,0])
map.set(happening,{/*
    name:'ну',
    name1:'вот',
    name2: 'опять',
name3: 'двадцать пять'                  *//*

toString: function (){return ' ну вот, опять двадцать пять'}
})
map.forEach((value, key) => {
    console.log(`ключ - ${key}, значение - ${value}`)});
                                        */