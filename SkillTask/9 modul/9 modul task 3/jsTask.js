
//task 9.3.3
  
const button = document.querySelector('button');
let result = document.querySelector('.conteiner-res');
button.addEventListener('click',btclick);
  
function btclick (){
    result.innerHTML = '';
    let value = document.querySelector('input').value
    value=+value
    console.log(value)
    if(value>10||value<1||isNaN(value)){
        result.innerHTML = `<p>Число вне диапазона от 1 до 10</p>`
    }
    else {
        let url = `https://picsum.photos/v2/list?limit=${value}`
        let xml = new XMLHttpRequest();
        xml.open('GET',url);
        xml.onload=()=>{
        JSON.parse(xml.response).forEach(el => {
            const loadImage = `<img src=${el.download_url} class='anyimage'>`
                result.innerHTML += loadImage
            });
        }
        xml.send();
    };
    
}
