
   

let imgs=document.getElementsByClassName('imgs');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
next.addEventListener('click',nex);
prev.addEventListener('click',pre);
play.addEventListener('click',start);
document.body.addEventListener('keydown',arrowR);
document.body.addEventListener('keydown',arrowL);
document.body.addEventListener('keydown',space)
    

let i=0;
 
function nex(){
    
        imgs[i].style.opacity='0';
        i++;
        if(i>imgs.length-1){i=0};
        imgs[i].style.opacity='1';
        
    
};

function arrowR (e){
    if (e.keyCode=='39'){
        nex()
    };
};

function arrowL(e){
    if (e.keyCode=='37'){
        pre()
    };
};

function pre(){
        imgs[i].style.opacity='0';
        i--;
        if(i<0){i=imgs.length-1};
        imgs[i].style.opacity='1';
    
};

let idset;
let t=1;
function start(){
    play.style.display='none';
    pause.style.display='block';
    idset=setInterval(pre, 3500);
    pause.addEventListener('click',stop);
    t='что угодно только бы слайдер работал';
   
};

function space(e){
    
    if(e.keyCode == '32'){
        if(t==1){start()}
        else{stop()}
    };
};

function stop (){
    play.style.display='block';
    pause.style.display='none';
    clearInterval(idset);
    t=1;
};


function Space2(e){
    if(e.keyCode == '32'){
        stop()
    };
}; 

