/*---LINKS IN MENU TO THE RIGHT---*/
var rocketScroll1 = document.getElementById("rocketScroll1");

rocketScroll1.addEventListener( "click",function(){
    document.getElementById('rocketScroll2').scrollIntoView({ 
    behavior: 'smooth' 
    });
});

var launchScroll1 = document.getElementById("launchScroll1");

launchScroll1.addEventListener( "click",function(){
    document.getElementById('launchScroll2').scrollIntoView({ 
    behavior: 'smooth' 
    });
});








/*----ROCKET OVERVIEW---*/
fetch('https://api.spacexdata.com/v2/capsules/crewdragon')
    .then(result => result.json())
  .then((res) => {
    createRocketInfo(res);
  })
.catch(err => console.log(err))


function createRocketInfo(result){
    var dragonName = document.getElementById('dragonName');
    dragonName.innerHTML += result.name;
    
    var dragonType = document.getElementById('dragonType');
    dragonType.innerHTML += result.type;
    
    var crewCapacity = document.getElementById('crewCapacity');
    crewCapacity.innerHTML += result.crew_capacity;
    
    var launchPayloadMass = document.getElementById('launchPayloadMass');
    launchPayloadMass.innerHTML += result.launch_payload_mass.kg + " <span class='api-details'>KG</span>";
    
    var returnPayloadMass = document.getElementById('returnPayloadMass');
    returnPayloadMass.innerHTML += result.return_payload_mass.kg + " <span class='api-details'>KG</span>";
        
    var trunk = document.getElementById('trunk');
    trunk.innerHTML += result.trunk.trunk_volume.cubic_meters + " <span class='api-details'>m2</span>";
    
    var orbitDuration = document.getElementById('orbitDuration');
    orbitDuration.innerHTML += result.orbit_duration_yr + " <span class='api-details-2'>YEARS</span>";

    var angle = document.getElementById('angle');
    angle.innerHTML += result.sidewall_angle_deg + " <span>°</span>";
    
    var heatShield = document.getElementById('heatShield');
    heatShield.innerHTML += result.heat_shield.material;
    
    var devPartner = document.getElementById('devPartner');
    devPartner.innerHTML += result.heat_shield.dev_partner; 
    
}






/*---DOWN/UP ARROW TO THE RIGHT----*/
window.addEventListener("scroll",function(){
    var arrowDisplay1 = document.getElementById("arrowDisplay1");
    if(this.scrollY < 100){
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
        top: -900, // could be negative value
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








/*---NEXT LAUNCH---*/
fetch('https://api.spacexdata.com/v2/launches/next')
    .then(result => result.json())
  .then((res) => {
    createNextLaunch(res);
  })
.catch(err => console.log(err))

function createNextLaunch(result){
    var headingLaunch = document.getElementById('headingLaunch');
    headingLaunch.innerHTML += "<span>FLIGHT NUMBER </span> " + result.flight_number;
    
    var rocketId = document.getElementById('rocketName');
    rocketId.innerHTML += result.rocket.rocket_name;
    
    var missionName = document.getElementById('missionName');
    missionName.innerHTML += result.mission_name;
    
    var launchDate = document.getElementById('launchDate');
    launchDate.innerHTML += result.launch_date_local;
}





