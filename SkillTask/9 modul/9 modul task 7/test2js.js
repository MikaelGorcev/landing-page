

const button = document.getElementById('request');
let result = document.querySelector('.conteiner-res');

button.addEventListener('click',answerRequest);
function answerRequest (){
    const numberList = document.querySelector('#numberList').value;
    const limit =  document.querySelector('#limit').value;
    
    let a = 0;
    if(numberList<1||numberList>10||isNaN(numberList)){
        result.innerHTML =`<p>Номер страницы вне диапазона от 1 до 10</p>`
        ++a 
    }
    if(limit<1||limit>10||isNaN(limit)){
        result.innerHTML =`<p>Лимит вне диапазона от 1 до 10</p>`
        ++a
    }
    if(a>1){result.innerHTML =`<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;}
    if(a==0){
        result.innerHTML =''
       searchPhoto(numberList,limit);
    }
    
};
function searchPhoto(page,limit){
    result.innerHTML =''
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then(
        Response =>Response.json()
        .then(res=>res.forEach(el => {
          result.innerHTML +=`<img src=${el.download_url} width="150">`;
          
          localStorage.setItem('test',result.innerHTML)
        }))
        
        )
        
        
};
 


result.innerHTML=localStorage.getItem('test')

