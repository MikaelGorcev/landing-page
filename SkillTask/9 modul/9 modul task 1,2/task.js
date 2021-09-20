
  //task 9.2.1 

let xmlString=`<list>
                <student>
                    <name lang="en">
                        <first>Ivan</first>
                        <second>Ivanov</second>
                    </name>
                    <age>35</age>
                    <prof>teacher</prof>
                </student>
                <student>
                    <name lang="ru">
                         <first>Петр</first>
                        <second>Петров</second>
                    </name>
                     <age>58</age>
                    <prof>driver</prof>
                </student>
                </list>`;

function fromXmlToObject (xmlString){
    const parser = new DOMParser;
    const xmlObject = parser.parseFromString(xmlString,'text/xml');
    const compliteObj={};
    const mainroot=xmlObject.firstElementChild.tagName;
    compliteObj[mainroot]=[];
    
    let stud=xmlObject.firstElementChild.children;
    stud=Array.from(stud);
    stud.forEach(i => {
    const obj={}
      obj.name = i.querySelector('first').textContent+" "+i.querySelector('second').textContent;
      obj.age = +(i.querySelector('age').textContent);
      obj.prof=i.querySelector('prof').textContent;
    
      obj.lang=i.firstElementChild.getAttribute('lang');
      compliteObj[mainroot].push(obj);
    });
    return compliteObj;
};
console.log(fromXmlToObject(xmlString));

//task 9.2.2 

const anyJson = {
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   };

   const resultJsonObject = JSON.parse(JSON.stringify(anyJson));
   console.log(resultJsonObject)