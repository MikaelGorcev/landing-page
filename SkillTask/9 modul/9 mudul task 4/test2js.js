
const htext = document.querySelector('#height');
const wtext = document.querySelector('#width');
const button = document.querySelector('#push');
let result = document.querySelector('.conteiner-res');


button.addEventListener('click',viewPicture);
function viewPicture (){
    result.innerHTML=''
    if(htext.value<100||htext.value>300||wtext.value<100||wtext.value>300){
        alert('одно из чисел вне диапазона от 100 до 300')
    }
    else {
    fetch(`https://picsum.photos/${wtext.value}/${htext.value}`)
    .then(Response =>{
        result.innerHTML +=`<img src=${Response.url}>`})
    }

};
