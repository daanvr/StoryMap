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
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

//initial Flight
Fly(4.904,52.370, 9);


SelectNew(3);
//Select relevant storiues and chapters
function SelectNew(Storynbr){
  	console.log("Selected Story number: " + Storynbr);
  	var newchapter = "Chap" + Storynbr;
  	var newstory = "Story" + Storynbr;
  	console.log(newchapter, newstory);
  	var NewChapterDOM = document.getElementById(newchapter);
  	var NewStoryDOM = document.getElementById(newstory);

  	//deselect all divs by class selected
  	//var SelectedDIVs = document.getElementsByClassName("selected");
	var SelectedDIVs = document.querySelectorAll( '.selected');
	var i;
	for (i = 0; i < SelectedDIVs.length; i++) {
    	SelectedDIVs[i].classList.remove("selected");
	}

  	//select correct Layers

  	//Select corredt icone in Stpry List
   	NewChapterDOM.classList.toggle("selected");

	//Select and navigate to correct Story in sidebare
   	NewStoryDOM.classList.toggle("selected");
   	NewStoryDOM.scrollIntoView({behavior: "smooth"});
	//Tooltip layers to be selection
};

//Code snippet used to fly the camera to a different location
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

//Code snippet used to populate the infor box with data about the layer
map.on('mousemove', function(e) {
  var data = map.queryRenderedFeatures(e.point, {
    layers: ['gsm-blau']
  });

  if (data[0].properties.load6 != undefined) {
    document.getElementById('hoverinfotest').innerHTML = '<h3><strong>' + "Data" + '</strong></h3><p>6:00: ' + data[0].properties.load6 + '</p>10:00: ' + data[1].properties.load10 + '</p><p>18:00: ' + data[1].properties.load18 + '</p><p>20:00: ' + data[1].properties.load20 + '</p><p>23:00: ' + data[1].properties.load23 + '</p>';
  	console.log(data)
  } else {
    document.getElementById('hoverinfotest').innerHTML = '<h3><strong>' + "Data" + '</strong></h3><p>Hover over data.</p>';
  }
});
