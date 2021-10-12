co=console.log

const iconOn = document.querySelector(".on");
const iconOff = document.querySelector(".off");
const buttonArrow = document.querySelector(".button-arrow");
const buttonScreen = document.querySelector(".button-screen")
buttonArrow.addEventListener("click",changeArrow);
buttonScreen.addEventListener("click",showScreen)


function changeArrow(){
    if(iconOn.style.display!="none"){
        iconOn.style.display="none";
        iconOff.style.display="block";}else{
            iconOff.style.display="none";
        iconOn.style.display="block";
        }
    
};


function showScreen(){
    alert(` такая ширина экрана: ${window.screen.width}, \n а такая высота: ${window.screen.height}`)
}
///////////////////////////////////////////////////////

const chat = document.querySelector(".chat")
const button = document.querySelector(".push");
const geoButton=document.querySelector(".geoloc")
let input = document.querySelector(".message input")
let message;
let myMesContein;


button.addEventListener("click",run);

function run (){
    myMesContein=document.createElement('div');
    myMesContein.className="myMesContein";
    chat.append(myMesContein)
   const myMessage=document.createElement('div');
    myMessage.className="myMessage";
    myMesContein.insertBefore(myMessage,myMessage.nextSibling);
    myMessage.innerText=input.value;
    message=input.value
    runSocket();
    document.querySelector(".message input").value = "";
}



function runSocket(){
    let connection = new WebSocket('ws://localhost:9000');
    connection.onopen = function (e){
   const myStatus=document.createElement('div');
    myStatus.className="myStatus";
    myMesContein.append(myStatus)
        myStatus.innerText='Сообщение отправлено'
        
        connection.send(JSON.stringify({action: 'ECHO', data: message.toString()}))
    };
    connection.onmessage = function(message) {
        const serMesContein = document.createElement('div');
        serMesContein.className="serMesContein";
        chat.append(serMesContein)
        let servMessage = document.createElement('div');
        servMessage.className="servMessage";
        serMesContein.insertBefore(servMessage,servMessage.nextSibling);
        servMessage.innerText=message.data
      };
  
};

geoButton.addEventListener('click',showGeo);
function showGeo(){
    navigator.geolocation.getCurrentPosition(success,error);
    function success (p){
        co(p.coords.latitude)
        co(p.coords.longitude)
        const linkLocation = document.createElement("div");
        linkLocation.className='linkLocation';
        chat.append(linkLocation);
        linkLocation.innerHTML=`<a href="https://www.openstreetmap.org/#map=18/${p.coords.latitude}/${p.coords.longitude}" target="_blank" >твоя геолокация</a>`
    };
    function error (){
        co('не получается')
    }
}