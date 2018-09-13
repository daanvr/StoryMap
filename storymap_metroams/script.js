var chapters = new Array();
var LegendaUI = document.getElementById('Legenda');
//Mapbox initalisation
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFhbnZyIiwiYSI6ImNpdTJmczN3djAwMHEyeXBpNGVndWtuYXEifQ.GYZf7r9gTfQL3W-GpmmJ3A';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/daanvr/cjksey1ck00d22rn3nnfkt77j',
center: [5.385754, 52.114371],
zoom: 7.3
});



// mapboxgl.accessToken = 'pk.eyJ1IjoiZGFhbnZyIiwiYSI6ImNpdTJmczN3djAwMHEyeXBpNGVndWtuYXEifQ.GYZf7r9gTfQL3W-GpmmJ3A';
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/daanvr/cji4ar5op00j42rldukleb8lt',
//     duration: 6000,
//     center: [5.299,52.382],
//     zoom: 9,
//     pitch: 0,
//     minZoom: 8
// });

//Map controles Toggols
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

//initial Flight
Fly(5.0,52.397, 9.5);

//set language to NL
//map.setLayoutProperty('country-label-lg', 'text-field', ['get', 'name_' + language]);

//"hardcoded" data for now 
chapters[0] = {
    chapnbr:1,
    title:"Verkeer",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.0,52.397, 9.5],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/trafficlight.png",
    level: "0"
};
chapters[1] = {
    chapnbr:2,
    title:"Licht- en zwaar vrachtverkeer",
    htmlbody:"<p>Nu zit u de intensiteit van het vrachtverkeer op een doorsnee dag. Des te warmer de kleur is des te meer licht en zwaar vrachtverkeer er rijd.</p>",
    location: [5.0,52.397, 9.5],
    maplayers: "Vrachtverkeer",
    AllLayers: ["intensiteiten-hwn copy 11", "intensiteiten-hwn copy 12", "intensiteiten-hwn copy 13", "intensiteiten-hwn copy 14", "intensiteiten-hwn copy 15"],
    LegendaUIColor: ["white","yellow", "orange", "red", "brown"],
    LegendaUIName: ["< 2500", "< 5000", "< 7500", "< 10000", "> 10000"],
    UIToggles: "",
    iconsrc: "imgs/truck.png",
    level: "1",
    Zoom: "11"
};
chapters[2] = {
    chapnbr:3,
    title:"2 Subhoofdstuk",
    htmlbody:"<p>Lorem ipsum dolor sit amet.</p><img class='storyimg' src='imgs/stat.gif'alt='Smiley face'>",
    location: [5,52.35, 11],
    maplayers: "",
    AllLayers: ["do-mra-ba copy", "do-mra-ab copy", "ex-mra-ba copy", "ex-mra-ab copy", "in-mra-ba copy", "in-mra-ab copy"],
    UIToggles: "",
    iconsrc: "imgs/polution.png",
    level: "1",
};
chapters[3] = {
    chapnbr:4,
    title:"3 Subhoofdstuk",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: "",
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/truck.png",
    level: "1"
};
chapters[4] = {
    chapnbr:5,
    title:"Openbaar Vervoer",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.120,52.067],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/polution.png",
    level: "0"
};
chapters[5] = {
    chapnbr:6,
    title:"Subhoofdstuk 1",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.495,51.439],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/trafficjam.png",
    level: "1"
};
chapters[6] = {
    chapnbr:7,
    title:"Subhoofdstuk 2",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.699,50.852],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};
chapters[7] = {
    chapnbr:8,
    title:"Subhoofdstuk 3",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [6.161,52.254],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/truck.png",
    level: "1"
};
chapters[8] = {
    chapnbr:9,
    title:"Hoofdstuk 3",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [6.570,53.208],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/polution.png",
    level: "0"
};
chapters[9] = {
    chapnbr:10,
    title:"Subhoofdstuk 1",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [5.699,50.852],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};
chapters[10] = {
    chapnbr:11,
    title:"Subhoofdstuk 2",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [6.161,52.254],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/truck.png",
    level: "1"
};
chapters[11] = {
    chapnbr:12,
    title:"Subhoofdstuk 3",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
    location: [6.570,53.208],
    maplayers: "",
    AllLayers: [],
    UIToggles: "",
    iconsrc: "imgs/truck.png",
    level: "1"
};
console.log(chapters);

//build chaper menu list & story list
Build();
function Build(){
	for (var i in chapters) {
	   	var iplusplus = i;
	   	iplusplus++;

	   	var LastChap;
	   	if (chapters[i].level == 0) { LastChap = "Chap" + iplusplus;}

	   	BuildChapList (i, iplusplus, LastChap);
	   	BuildStoryList (i, iplusplus, LastChap);
	} 
};

function BuildChapList (i, iplusplus, LastChap) {
   	var ChapListItem = document.createElement("div");
   	ChapListItem.id = "Chap" + iplusplus; 
   	if (chapters[i].level == 0) {ChapListItem.className = "ChapItem";
    } else {
    	ChapListItem.className = "SubChapItem";
       	ChapListItem.innerHTML = '<img class="ChapItemLogo" src="' + chapters[i].iconsrc + '"><p class="ChapItemBtn" >' + chapters[i].title + '</p>';
        ChapListItem.onclick = (function() {//This is a bit of crazy code called "closure". it is because you can not use the i var inside the funtion that is in the "onclick"
        var currentI = i;
        currentI++
        return function() {ChapSelect(currentI + '');}})();

    }
   	if (chapters[i].level == 0) {
   		document.getElementById('ChapList').appendChild(ChapListItem);
   		console.log("Menu div MegaCahp: " + i + "/" + chapters.length);
   	} else {
   		document.getElementById(LastChap).appendChild(ChapListItem);
   		console.log("Menu div InfChap: " + i + "/" + chapters.length);
   	}
};

function BuildStoryList (i, iplusplus, LastChap) {
	var StoryListItem = document.createElement("div");
    StoryListItem.id = "Story" + iplusplus; 
   	if (chapters[i].level == 0) {StoryListItem.className = "story";
    } else {StoryListItem.className = "substory";}
    StoryListItem.innerHTML = '<h1>' + chapters[i].title + '</h1>' + chapters[i].htmlbody;
    StoryListItem.onclick = (function() {//This is a bit of crazy code called "closure". it is because you can not use the i var inside the funtion that is in the "onclick"
      	var currentI = i;
      	currentI++
      	return function() {ChapSelect(currentI + '');}})();
    if (chapters[i].level == 0) {
    	var Container = document.createElement("div");
   		Container.id = "StoryContainer" + LastChap;
   		Container.className = "StoryContainer " + LastChap;
   		document.getElementById('stories').appendChild(Container);
   		document.getElementById('StoryContainer' + LastChap).appendChild(StoryListItem);
    } else {
    	document.getElementById('StoryContainer' + LastChap).appendChild(StoryListItem);
    }
    console.log("Story div: " + i + "/" + chapters.length);
};



//ChapSelect(1);
function ChapSelect(nbr) {
	nbr--;

	//fly to
	if (chapters[nbr].location[0] != undefined) {
      Fly(chapters[nbr].location[0], chapters[nbr].location[1], chapters[nbr].location[2]);
  }

	//UI Selection feedback
	UISelectionFeedback(chapters[nbr].chapnbr)

	//Filter map data
  LayerFilter(chapters[nbr])

	//Toggle UI elements

};


//Select relevant storiues and chapters
function UISelectionFeedback(Storynbr){
  	var newchapter = "Chap" + Storynbr;
  	var newstory = "Story" + Storynbr;
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




map.on('mouseleave', 'gsm-blau', function() {
    map.getCanvas().style.cursor = '';//reove "specil" cursor style
    hoverinfobox.style.display = 'none';//hide top left infobox
    popup.remove();//hide popup
});

var LastActivatedLayers;

function LayerFilter(Chap) {
    //console.log(chapters[Chap.chapnbr].AllLayers[0]);  //doet het wel
    //console.log(Chap.AllLayers[0]);                    // doet het niet, warrom?
    
    //creating nessery human an non array numbering
    var chapnbrpp = Chap.chapnbr; // THis is a human nbr starting from 1
    chapnbrpp--; // This is an array nbr starting from 0

    //uitschakelen van de laast ingeschakelde layers
    if (LastActivatedLayers != undefined) { // is er een vormalige selectie
        for (var i in chapters[LastActivatedLayers].AllLayers) {  //zo vaak uitvoeren als dat er layers zijn
            map.setLayoutProperty(chapters[LastActivatedLayers].AllLayers[i], 'visibility', 'none');  //zet de layer met de specifique naam uit
            console.log("Layer " + LastActivatedLayersHumannbr + "." + i +" uit");  // Laat weten dat het uitzetten gelukt is.
        }
    }

    //leeg maken van Legenda
    LegendaUI.innerHTML = "";

    //ale layer in de nieuwe selectie gaat aan
    for (var i in chapters[chapnbrpp].AllLayers) {
        map.setLayoutProperty(chapters[chapnbrpp].AllLayers[i], 'visibility', 'visible');  //zet de layer met de specifique naam aan
        console.log("Layer " + Chap.chapnbr + "." + i +" aan");  // Laat weten dat het uitzetten gelukt is.
    }

    if (Chap.chapnbr == 2) {
       
        //HTML snipits to add arround the variables needed to make a compleat html code with content for the Legend
        var a = "<div class='color' style='background-color: "
        var b = ";'>"
        var c = "</div>"

        //Creating an array with the final HTML needed to populte the legenda
        var HTMLLegenda = []; // creating the var
        for (var i in chapters[chapnbrpp].LegendaUIColor) {
            HTMLLegenda.push(a);
            HTMLLegenda.push(chapters[chapnbrpp].LegendaUIColor[i]);
            HTMLLegenda.push(b);
            HTMLLegenda.push(chapters[chapnbrpp].LegendaUIName[i]);
            HTMLLegenda.push(c);
        }

        //inserting variables in Legenda
        LegendaUI.innerHTML = HTMLLegenda.join("");  //placing the HTML in the UI with the join function to make sure there are no commas between the variables

        //Popup data om te vullen
        for (var i in chapters[chapnbrpp].AllLayers) {
            map.on('mousemove', chapters[chapnbrpp].AllLayers[i], function(e) {
                map.getCanvas().style.cursor = 'pointer';// Change the cursor style as a UI indicator.
                var HoverdData = e.features[0];// Single out the first found feature.
                    
                // Display a popup with the data
                popup.setLngLat(e.lngLat)
                     .setHTML(
                        "<p>Vrachtverkeer: " + HoverdData.properties.VR_E_WR_H + "<br> " +
                        "Autoverkeer: " + HoverdData.properties.AU_E_WR_H + "</p>"
                      )
                     .addTo(map);

                //test
                console.log(HoverdData);
            });

            map.on('mouseleave', chapters[chapnbrpp].AllLayers[i], function() {
                map.getCanvas().style.cursor = '';//reove "specil" cursor style
                popup.remove();//hide popup
            });
        }
        
        //opslaan van de actieve layer zo dat hij later uit kan gezet worden.
        LastActivatedLayers = chapnbrpp;
        LastActivatedLayersHumannbr= chapnbrpp;
        LastActivatedLayersHumannbr++;
        }  
};