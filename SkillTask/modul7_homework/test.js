////////task 7.3.1
/*
let showProrertyObject =(getObject)=>{
    for(value in getObject){
        if(getObject.hasOwnProperty(value)){console.log(value+':'+getObject[value])}
    }
}

showProrertyObject(obj)
*/


///////task 7.3.2
/*
let compareNameObject=(getObject,getString)=>{
    for(value in getObject){
        if (getObject.hasOwnProperty(value)){
            if(value==getString){
                return true
            }
            else return false
        }
    }
}
*/

////////task 7.3.3
/*
function createEmptyObject (){
    let obj=Object.create(null)
    return obj
}
*/
//7.4.4
/*

function ElectroTool(power,color){
    this.power = power
    this.isOn = false
    this.color = color
    this.typeTool = 'unnecessary'
}
ElectroTool.prototype.present= function(){
    console.log(`the power of the ${this.color} electric prior is ${this.power}, it works - ${this.standbye}`)
};
ElectroTool.prototype.identification= function(){
    console.log(`It's ${this.typeTool}`)
};
ElectroTool.prototype.powerСonsumption= function(){
    return this.power
};
ElectroTool.prototype.tumbler = function(){
    this.isOn = !this.isOn
   };  

function Tv(screen,power,color){
    this.screen = screen;
    this.power = power;
    this.isOn=false;
    this.color = color;
    this.typeTool = 'TV';
    
};
Tv.prototype = Object.create(ElectroTool.prototype);

Tv.prototype.show = function (){
    console.log('size screen '+this.screen+'"')
}

function Oven (power,color,heatingTemperature){
        this.heatingTemperature = heatingTemperature,
        this.power = power;
        this.isOn=false;
        this.color = color;
        this.typeTool = 'OVEN';
    }

Oven.prototype = Object.create(ElectroTool.prototype);
Oven.prototype.show = function(){
    console.log('max t '+this.heatingTemperature)
}
function Lamp(bright,power,color){
    this.bright=bright;
    this.isOn=false;
    this.power=power;
    this.color=color;
    this.typeTool = 'LAMP';
}


let philips = new Tv(43,220,'white');
let gorenje = new Oven(250,'black',900);

function showConsumedEnergy(){
    let sumEnergy=0;
    for (i=0;i<arguments.length;i++){
        if(arguments[i].isOn==true){sumEnergy+=arguments[i].power} 
    };
    console.log('total energy consumption is '+sumEnergy)
};

gorenje.tumbler()
philips.tumbler()
gorenje.tumbler()
philips.show()
showConsumedEnergy(gorenje,philips)
philips.identification()
gorenje.show()
*/
/////task 7.5.4
/*
class ElectroTool {
    static typeTool = 'useless device'
    constructor(power,color) {
        this.power = power;
        this.isOn = false;
        this.color = color;
    };
    identification(){
        console.log(`It's ${this.typeTool}`)
    };
    present(){
        console.log(`the power of the ${this.color} electric prior is ${this.power}, it works - ${this.standbye}`)
    };
    powerСonsumption(){
        console.log('Power of this ' +ElectroTool.typeTool+'is '+this.power+' vt')
    };
    tumbler = function(){
    this.isOn = !this.isOn
    };
}


class Oven extends ElectroTool{
    
    constructor(power,color,heatingTemperature){
        super(power,color)
        this.heatingTemperature = heatingTemperature 
        this.typeTool = 'oven'
    };
    present() {
        console.log('Level degrees '+this.heatingTemperature)
        console.log(`color is ${this.color} electric prior is ${this.power}, it works - ${this.standbye}`)
    };
};

class Tv extends ElectroTool{
   
    constructor(power,color,screen) {
        super(power,color)
        this.screen = screen;
        this.typeTool = 'tv'
    }
    present() {
        console.log('Size screen '+this.screen)
        console.log(`color is ${this.color} electric prior is ${this.power}, it works - ${this.standbye}`)
    };
};

class Lamp extends ElectroTool{
    
    constructor(bright,power,color){
        super(power,color)
        this.bright=bright;
        this.typeTool = 'Lamp'
    };
    present() {
        console.log('Power of light '+this.bright)
        console.log(`color is ${this.color}, electric prior is ${this.power}, it works - ${this.standbye}`)
    };
};

function showConsumedEnergy(){
    let sumEnergy=0;
    for (i=0;i<arguments.length;i++){
        if(arguments[i].isOn==true){sumEnergy+=arguments[i].power} 
    };
    console.log('total energy consumption is '+sumEnergy)
};
let philips = new Tv (230,'black',55);
let sony = new Tv (210,'white',32);
let whiteLamp = new Lamp(1000,120,'green');
let gorenje = new Oven(250,'black',900);
sony.tumbler();
philips.tumbler();
philips.tumbler()
sony.identification()
sony.powerСonsumption()
showConsumedEnergy(philips,sony,gorenje);
*/

