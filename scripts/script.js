/*----ADD PEOPLE TO FUNFACTS ABOUT HOW MANY WOMEN IN SPACE----*/
var addPeopleToDOM = document.getElementById("womanAndMen");

for (i=0;i<59;i++){
    var womanI = document.createElement("i");
    var womanClass = document.createAttribute("class");
    womanClass.value = "fa fa-male woman womanAndMen";
    womanI.setAttributeNode(womanClass);


    addPeopleToDOM.appendChild(womanI);
}

for (i=0;i<537;i++){
    var manI = document.createElement("i");
    var manClass = document.createAttribute("class");
    manClass.value = "fa fa-male man womanAndMen";
    manI.setAttributeNode(manClass);


    addPeopleToDOM.appendChild(manI);
}





/*---DOWN/UP ARROW TO THE RIGHT----*/
window.addEventListener("scroll",function(){
    var arrowDisplay1 = document.getElementById("arrowDisplay1");
    if(this.scrollY < 150){
        arrowDisplay1.style.opacity = ".3";
        arrowDisplay1.style.color = "#2A3136";
    }
    else{
        arrowDisplay1.style.color = "#CCAC55";
        arrowDisplay1.style.opacity = "1";
    }
});

window.addEventListener("scroll",function(){
    var arrowDisplay2 = document.getElementById("arrowDisplay2");
    var d = document,
        e = d.documentElement;
    if(e.scrollHeight - e.scrollTop === e.clientHeight){
        arrowDisplay2.style.opacity = ".3";
        arrowDisplay2.style.color = "#2A3136";
    }
    else{
        arrowDisplay2.style.color = "#CCAC55";
        arrowDisplay2.style.opacity = "1";
    }
});


var upArrow = document.getElementById("upArrow");

upArrow.addEventListener( "click",function(){
        window.scrollBy({ 
        top: -800, // could be negative value
        left: 0, 
        behavior: 'smooth' 
    });
});

var downArrow = document.getElementById("downArrow");

downArrow.addEventListener( "click",function(){
        window.scrollBy({ 
        top: 900, // could be negative value
        left: 0, 
        behavior: 'smooth' 
    });
});
