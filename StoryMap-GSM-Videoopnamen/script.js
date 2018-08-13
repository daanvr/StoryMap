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
//map.addControl(new mapboxgl.FullscreenControl());
//map.scrollZoom.disable();
// map.boxZoom.disable();
// map.dragRotate.disable();
// map.dragPan.disable();
// map.keyboard.disable();
// map.doubleClickZoom.disable();
// map.touchZoomRotate.disable();

Fly(5.3,52.0, 8);

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


function filterBy(SliderValue){
  now = Number(SliderValue);

  var currenthour = "load" + SliderValue;
  var TimeToDisplay = SliderValue + ":00";

  //loading, edditing, and setting style color
  //var propCol= map.getPaintProperty("gsm-blau", "line-color");
  //console.log(propCol);  
  //propCol[2][1] = currenthour;
  //map.setPaintProperty("gsm-blau", "line-color", propCol);

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


function Keybord(event) {
  var x = event.which || event.keyCode;
  console.log(x);
  if (x == 110) {Fly(5.30,52.0, 8);}  //Nederland
  if (x == 97) {Fly(4.904,52.370);}   //Amsterdam
  if (x == 116) {Fly(4.310,52.080);}  //Den Haag
  if (x == 114) {Fly(4.495,51.909);}  //Rotterdam
  if (x == 117) {Fly(5.120,52.067);}  //Utrecht
  if (x == 101) {Fly(5.495,51.439);}  //Eindhoven
  if (x == 109) {Fly(5.699,50.852);}  //Maastricht
  if (x == 100) {Fly(6.161,52.254);}  //Deventer
  if (x == 103) {Fly(6.570,53.208);}  //Groningen
  if (x == 49) {filterBy(1);}         //1:00
  if (x == 50) {filterBy(2);}
  if (x == 51) {filterBy(3);}
  if (x == 52) {filterBy(4);}
  if (x == 53) {filterBy(5);}
  if (x == 54) {filterBy(6);}         //6:00
  if (x == 55) {filterBy(7);}
  if (x == 56) {filterBy(8);}
  if (x == 57) {filterBy(9);}
  if (x == 33) {filterBy(10);}
  if (x == 64) {filterBy(11);}
  if (x == 35) {filterBy(12);}        //12:00
  if (x == 36) {filterBy(13);}
  if (x == 37) {filterBy(14);}
  if (x == 94) {filterBy(15);}
  if (x == 38) {filterBy(16);}
  if (x == 42) {filterBy(17);}
  if (x == 40) {filterBy(18);}        //18:00
  if (x == 81) {filterBy(19);}
  if (x == 87) {filterBy(20);}
  if (x == 69) {filterBy(21);}
  if (x == 82) {filterBy(22);}
  if (x == 84) {filterBy(23);}
  if (x == 89) {filterBy(24);}        //Midenacht 
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
};

//<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>
//<button onclick="clearTimeout(myVar)">Stop it</button>
