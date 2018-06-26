//var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var now;

//Mapbox initalisation
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFhbnZyIiwiYSI6ImNpdTJmczN3djAwMHEyeXBpNGVndWtuYXEifQ.GYZf7r9gTfQL3W-GpmmJ3A';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/daanvr/cji4ar5op00j42rldukleb8lt',
    duration: 6000,
    center: [5.299,52.382],
    zoom: 9,
    pitch: 0,
    minZoom: 8
});

//Map controles Toggols
map.addControl(new mapboxgl.NavigationControl());
// map.scrollZoom.disable();
// map.boxZoom.disable();
// map.dragRotate.disable();
// map.dragPan.disable();
// map.keyboard.disable();
// map.doubleClickZoom.disable();
// map.touchZoomRotate.disable();

Fly(4.904,52.370, 9);


//To be deleted when the new data arives
map.on("load", function initiatefilter() {
  //Initiate Filter
  filterBy("" + 8 + "");
  //NewSelection(64);
  //add event listener to HTML range slider
  document.getElementById('slider-start').addEventListener('input', function(e) {
    //code to be executed when Slider is triggerd
    var SliderValue = "" + parseInt(e.target.value, 10) + "" //create vare with range slider value
    filterBy(SliderValue);  //trigger Fiter function adn send varibale with it.
    //console.log(SliderValue);
  });
});

// USed for time now, might be used for different chapters later
function filterBy(SliderValue){
  now = Number(SliderValue);

  var currenthour = "load" + SliderValue;
  var TimeToDisplay = SliderValue + ":00";

  //loading, edditing, and setting style variable. this is where the style of 
  //the map is queried to get the exact specifications and then the time used as 
  //a variable to chose the width of style is changed and loded back in.
  var propWidth= map.getPaintProperty("gsm-blau", "line-width");
  //console.log(propWidth);  
  propWidth[4][2][1] = currenthour;
  propWidth[6][2][1] = currenthour;
  propWidth[8][2][1] = currenthour;
  map.setPaintProperty("gsm-blau", "line-width", propWidth);

  document.getElementById("TimeDisplay").textContent = TimeToDisplay;

  console.log("Filtering");
  console.log(currenthour);  
};


function Fly(Long, Lat, Zoom) {
  if (Zoom == undefined) { Zoom = 11.9}

  map.flyTo({
    center: [Long,Lat],
    zoom: Zoom,
    pitch: 40,
    bearing: 0,
    //around: [Long,Lat],

    duration: 4000,
    curve: 1.42,
    speed: 1.2,
    //easing: 5,
    animate: true
  });
};

//These two functions are out off use right now. it doesn't work properly jet.
function Play(OnOff) {
  if (now < 23) {
    newnow = now + 1;
  } else { 
    newnow = 3;
  }
  setTimeout(PNext(newnow), 1000);
};

function PNext(newnow) {
    filterBy(newnow);
    console.log("Current Play value: " + newnow);
    Play(newnow);
}

//<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>
//<button onclick="clearTimeout(myVar)">Stop it</button>
