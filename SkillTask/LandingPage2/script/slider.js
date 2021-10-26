
const ESSENCE = [{
    city:'Rostov-on-Don\nLCD admiral',
    Repair_time:'3.5 months',
    Repair_Cost:'Upon request',
    apartment_area:'81 m<sup>2</sup>',
    header:'Rostov-on-Don, Admiral',
    img:'./img/Rostov-on-Don, Admiral.jpg',
},{
    city:'Sochi\nThieves',
    Repair_time:'4 months',
    Repair_Cost:'Upon request',
    apartment_area:'105 m<sup>2</sup>',
    header:'Sochi Thieves',
    img:'./img/Sochi Thieves.jpg'
},{
    city:'Rostov-on-Don\nPatriotic',
    Repair_time:'3 months',
    Repair_Cost:'Upon request',
    apartment_area:'93 m<sup>2</sup>',
    header:'Rostov-on-Don Patriotic',
    img:'./img/Rostov-on-Don Patriotic.jpg'
}]
const toggle = document.querySelector(".toggle__point")
const BULDING = document.querySelector(".BULDING")
const APARTMENT_AREA = document.querySelector(".APARTMENT_AREA")
const REPAIR_TIME = document.querySelector(".REPAIR_TIME")
const REPAIR_COST = document.querySelector(".REPAIR_COST")
const DESIGNHEADING = document.querySelector(".designHeading")
const LEFT = document.querySelector('.arrowLeft');
const RIGHT = document.querySelector(".arrowRight");
RIGHT.addEventListener('click',nex);
LEFT.addEventListener('click',pre);

const PROJECTSLIDER = document.querySelector(".projectSlider")
let points
let designDecision;
let img
ESSENCE.forEach(el=>{
points=document.createElement('span');
points.className = 'points';

toggle.append(points);
designDecision=document.createElement('div');
designDecision.className = "designHeading__decision";
designDecision.innerHTML=`<a href=#>${el.header}</a>`;
DESIGNHEADING.append(designDecision);
img = document.createElement('img');
img.className = "designHeading__screen";
img.alt = "repair screen";
img.src = el.img;
PROJECTSLIDER.append(img);
});
points=document.querySelectorAll('.points')
const NAME_SELECT_BLOCK = document.querySelectorAll(".designHeading__decision a");

let imgs=document.querySelectorAll('.designHeading__screen');
let headerFoto = document.querySelectorAll('.designHeading__decision a');

let i =0;

function setProp(x){
    BULDING.innerText=ESSENCE[x].city;
    APARTMENT_AREA.innerHTML=ESSENCE[x].apartment_area;
    REPAIR_TIME.innerText=ESSENCE[x].Repair_time;
    REPAIR_COST.innerText=ESSENCE[x].Repair_Cost;
}

function nex(){
    headerFoto[i].style.color='white'
    imgs[i].style.opacity='0';
    points[i].style.color='grey'
    i++;
    if(i>imgs.length-1){i=0};
    imgs[i].style.opacity='1';
    points[i].style.color='white'
    headerFoto[i].style.color='#E3B873'
    setProp(i);
};



function pre(){
    headerFoto[i].style.color='white'
    imgs[i].style.opacity='0';
    points[i].style.color='grey'
    i--;
    if(i<0){i=imgs.length-1};
    imgs[i].style.opacity='1';
    points[i].style.color='white'
    headerFoto[i].style.color='#E3B873'
    setProp(i);
};


headerFoto.forEach((el,ind)=>{
    el.addEventListener('click',select);
    points[ind].addEventListener('click',select);
    function select (e){
        e.preventDefault();
        i=ind
        imgs.forEach(val=>{val.style.opacity='0';});
        points.forEach(val=>{val.style.color='grey';});
        headerFoto.forEach(val=>{val.style.color='white';});
        headerFoto[ind].style.color='#E3B873'
        points[ind].style.color='white'
        imgs[ind].style.opacity='1';
        setProp(ind);
    };
})
