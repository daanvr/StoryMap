var chapters = new Array();

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

//set language to NL
//map.setLayoutProperty('country-label-lg', 'text-field', ['get', 'name_' + language]);

//"hardcoded" data for now 
chapters[0] = {
    chapnbr:1,
    title:"Hoofdstuk 1",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.30,52.0, 8],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/trafficlight.png"
};
chapters[1] = {
    chapnbr:2,
    title:"Hoofdstuk 2",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.30,52.0, 8],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/truck.png"
};
chapters[2] = {
    chapnbr:3,
    title:"Hoofdstuk 3",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [4.310,52.080],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/polution.png"
};
chapters[3] = {
    chapnbr:4,
    title:"Hoofdstuk 4",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [4.495,51.909],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/truck.png"
};
chapters[4] = {
    chapnbr:5,
    title:"Hoofdstuk 5",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.120,52.067],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/polution.png"
};
chapters[5] = {
    chapnbr:6,
    title:"Hoofdstuk 6",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.495,51.439],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/trafficjam.png"
};
chapters[6] = {
    chapnbr:7,
    title:"Hoofdstuk 7",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.699,50.852],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/trafficlight.png"
};
chapters[7] = {
    chapnbr:8,
    title:"Hoofdstuk 8",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [6.161,52.254],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/truck.png"
};
chapters[8] = {
    chapnbr:9,
    title:"Hoofdstuk 9",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [6.570,53.208],
    maplayers: "",
    UIToggles: "",
    iconsrc: "imgs/polution.png"
};
console.log(chapters);

//build chaper menu list & story list
Build();
function Build(){
	for (var i in chapters) {
	    //Building menu
	   	var iplusplus = i;
	   	iplusplus++;
	   	var ChapListItem = document.createElement("div");
       	ChapListItem.id = "Chap" + iplusplus; 
       	ChapListItem.className = "ChapItem";
       	ChapListItem.innerHTML = '<img class="ChapItemLogo" src="' + chapters[i].iconsrc + '"><p class="ChapItemBtn" >' + chapters[i].title + '</p>';
       	ChapListItem.onclick = (function() {//This is a bit of crazy code called "closure". it is because you can not use the i var inside the funtion that is in the "onclick"
          	var currentI = i;
          	currentI++
          	return function() {ChapSelect(currentI + '');}})();
       	document.getElementById('ChapList').appendChild(ChapListItem);
	   	console.log("Menu div: " + i + "/" + chapters.length);

	   	//Building stories to the right side
		var StoryListItem = document.createElement("div");
        StoryListItem.id = "Story" + iplusplus; 
        StoryListItem.className = "story";
        StoryListItem.innerHTML = '<h1>' + chapters[i].title + '</h1>' + chapters[i].htmlbody;
        StoryListItem.onclick = (function() {//This is a bit of crazy code called "closure". it is because you can not use the i var inside the funtion that is in the "onclick"
          	var currentI = i;
          	currentI++
          	return function() {ChapSelect(currentI + '');}})();
        document.getElementById('stories').appendChild(StoryListItem);
	    console.log("Story div: " + i + "/" + chapters.length);
	} 
};


ChapSelect(1);
function ChapSelect(nbr) {
	nbr--;
	console.log("Chapter: " + nbr);

	//fly to
	Fly(chapters[nbr].location[0], chapters[nbr].location[1], chapters[nbr].location[2]);

	//UI Selection feedback
	UISelectionFeedback(chapters[nbr].chapnbr)
	//Filter map data

	//Toggle UI elements

};


//Select relevant storiues and chapters
function UISelectionFeedback(Storynbr){
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


// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false
});

//var with DOM inside for easy acces
var hoverinfobox = document.getElementById('hoverinfobox')


map.on('mousemove','gsm-blau' , function(e) {//Code snippet used to populate the infor box with data about the layer
  	map.getCanvas().style.cursor = 'pointer';// Change the cursor style as a UI indicator.
  	var HoverdData = e.features[0];// Single out the first found feature.
  	hoverinfobox.innerHTML = '';//remove exiting html from top left infobox
  	
  	//populting the top left infobox
  	hoverinfobox.innerHTML = '<h3><strong>' + "Data" + '</strong></h3><p>6:00: ' + HoverdData.properties.load6 + '</p>10:00: ' + HoverdData.properties.load10 + '</p><p>18:00: ' + HoverdData.properties.load18 + '</p><p>20:00: ' + HoverdData.properties.load20 + '</p><p>23:00: ' + HoverdData.properties.load23 + '</p>';
  	hoverinfobox.style.display = 'block';//unhide popup
 	popup.setLngLat(e.lngLat)// Display a popup with the name of the county
      .setText(
      	"Aantal voertuigen om 6uur: " + HoverdData.properties.load6
      	)
      .addTo(map);
});

map.on('mouseleave', 'gsm-blau', function() {
    map.getCanvas().style.cursor = '';//reove "specil" cursor style
    hoverinfobox.style.display = 'none';//hide top left infobox
    popup.remove();//hide popup
});

