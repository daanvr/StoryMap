var chapters = new Array();
var SelectedStory;
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
map.addControl(nav, 'top-left');

//initial Flight
Fly(5.0,52.397, 9.5);

//set language to NL
//map.setLayoutProperty('country-label-lg', 'text-field', ['get', 'name_' + language]);

//"hardcoded" data for now 
// chapters[0] = {
//     chapnbr:1,
//     title:"Verkeer",
//     htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis pretium risus, molestie lobortis elit varius quis. Curabitur volutpat mi at rhoncus fermentum.</p>",
//     location: [5.0,52.397, 9.5],
//     maplayers: "",
//     AllLayers: [],
//     iconsrc: "imgs/trafficlight.png",
//     level: "0"
// };
// chapters[1] = {
//     chapnbr:2,
//     title:"Licht- en zwaar vrachtverkeer",
//     htmlbody:"<p>Nu zit u de intensiteit van het vrachtverkeer op een doorsnee dag. Des te warmer de kleur is des te meer licht en zwaar vrachtverkeer er rijd.</p>",
//     location: [5.0,52.397, 9.5],
//     maplayers: "Vrachtverkeer",
//     AllLayers: ["intensiteiten-hwn copy 11", "intensiteiten-hwn copy 12", "intensiteiten-hwn copy 13", "intensiteiten-hwn copy 14", "intensiteiten-hwn copy 15"],
//     LegendaUIColor: ["white","yellow", "orange", "red", "brown"],
//     LegendaUIName: ["< 2500", "< 5000", "< 7500", "< 10000", "> 10000"],
//     Popuptext: ["Vrachtverkeer", "Autoverkeer"],
//     PopupData: ["VR_E_WR_H", "AU_E_WR_H"],
//     iconsrc: "imgs/truck.png",
//     level: "1",
//     Zoom: "11"
// };
chapters[2] = {
    chapnbr:5,
    // title:"DAILY URBAN SYSTEM METROPOOL REGIO AMSTERDAM",
    //title:"Daily Urban System Metropool Regio Amsterdam",
    title:"",
    htmlbody:"<img src='imgs/vervoerregioams.png' style='left: 35px; position: relative;'> <br> <h1 style='margin: 0px;'>Daily Urban System </h1> <br> <p style='margin: 0px;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem. Donec sapien lectus, imperdiet luctus turpis vitae, viverra bibendum mi.</p><br>",
    level: "0"
};

// chapters[3] = {
//     chapnbr:5,
//     // title:"DAILY URBAN SYSTEM METROPOOL REGIO AMSTERDAM",
//     //title:"Daily Urban System Metropool Regio Amsterdam",
//     title:"",
//     htmlbody:"Intern: de herkomst en bestemming bevinden zich binen het gebied.<br>Extern: de herkomst of besteming bevindt zich binnen het",
//     level: "1"
// };


chapters[4] = {
    chapnbr:5,
    title:"Intern en doorgaand verkeer",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem. Donec sapien lectus, imperdiet luctus turpis vitae, viverra bibendum mi.</p>",
    location: [5,52.35, 9.5],
    maplayers: "",
    AllLayers: [],
    iconsrc: "",
    level: "0",
    InfoIcon: true,
    InfoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem." 
};

chapters[5] = {
    chapnbr:6,
    title:"Wegverkeer (MRA)",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.</p>",
    location: [5,52.35, 9.5],
    maplayers: "",
    AllLayers: ["mra-weg-door", "mra-weg-ext", "mra-weg-int", "mra-weg-door-lz", "mra-weg-ext-lz", "mra-weg-int-lz"],
    LegendaUIColor: ["#FAC514","#009E03", "#2F32F4"],
    LegendaUIName: ["Intern", "Extern", "Doorgaand"],
    Popuptext: ["Intern", "Extern", "Doorgaand"],
    PopupData: ["weg_int", "weg_ex", "weg_door"],
    PopupPercentage: true,
    iconsrc: "imgs/trafficjam.png",
    InfoIcon: true,
    InfoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.", 
    level: "1"

};
chapters[6] = {
    chapnbr:7,
    title:"Openbaar Vervoer (MRA)",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.</p>",
    location: [5,52.35, 9.5],
    maplayers: "",
    AllLayers: ["mra-ov-door", "mra-ov-ext", "mra-ov-int", "mra-ov-door-lz", "mra-ov-ext-lz", "mra-ov-int-lz"],
    LegendaUIColor: ["#FAC514","#009E03", "#2F32F4"],
    LegendaUIName: ["Intern", "Extern", "Doorgaand"],
    Popuptext: ["Intern", "Extern", "Doorgaand"],
    PopupData: ["ov_int", "ov_ex", "ov_door"],
    PopupPercentage: true,
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};
chapters[8] = {
    chapnbr:9,
    title:"Kwalitatieve vergelijking",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.  Donec sapien lectus, imperdiet luctus turpis vitae, viverra bibendum mi.</p>",
    location: [5.374,52.4052, 9],
    maplayers: "",
    AllLayers: [],
    iconsrc: "imgs/polution.png",
    level: "0"
};
chapters[9] = {
    chapnbr:10,
    title:"Vervoerswijze",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.</p>",
    location: [5.374,52.4052, 9],
    maplayers: "",
    AllLayers: ["spider_verpl_OV", "spider_verpl_auto", "spider_verpl_fiets"],
    LegendaUIColor: ["#fac514","#9e001a", "#2fddf4"],
    LegendaUIName: ["OV", "Auto", "Fiets"],
    Popuptext: ["OV", "Auto", "Fiets"],
    PopupData: ["TOT_OV", "TOT_auto", "TOT_fiets"],
    PopupPercentage: true,
    InfoIcon: true,
    InfoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.", 
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};
chapters[10] = {
    chapnbr:11,
    title:"Verplaatsingsmotief",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.</p>",
    location: [5.374,52.4052, 9],
    maplayers: "",
    AllLayers: ["spider_verpl_woonwerk", "spider_verpl_onderwijs", "spider_verpl_zakelijk"],
    LegendaUIColor: ["#0febbb","#b12f8c", "#8ba6ea"],
    LegendaUIName: ["Woon-Werk", "Onderwijs", "Zakelijk"],
    Popuptext: ["Woon-Werk", "Onderwijs", "Zakelijk"],
    PopupData: ["WW_alles", "OND_alles", "ZK_alles"],
    PopupPercentage: true,
    InfoIcon: true,
    InfoText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.", 
    iconsrc: "imgs/truck.png",
    level: "1"
};
chapters[11] = {
    chapnbr:12,
    title:"Leeftijd",
    htmlbody:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit tellus in mi aliquet faucibus. Nullam ultricies vestibulum velit et hendrerit. Donec a pellentesque enim. Vestibulum vel ligula vitae enim elementum vestibulum. Curabitur quis feugiat lorem.</p>",
    location: [5.374,52.4052, 9],
    maplayers: "",
    AllLayers: ["spider_verpl_15-", "spider_verpl_15-39", "spider_verpl_40-65", "spider_verpl_65plus"],
    LegendaUIColor: ["#e1ece8","#bdd7cd", "#798983", "#56625e"],
    LegendaUIName: ["onder de 15", "van 15 tot 39", "van 40 tot 65", "65 plus"],
    Popuptext: ["onder de 15", "van 15 tot 39", "van 40 tot 65", "65 plus"],
    PopupData: ["LFT_15", "LFT_15_39", "LFT_40_65", "LFT_65"],
    PopupPercentage: true,
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
        // var Tooltip;
        // if (chapters[i].InfoIcon === true) { Tooltip = true}


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
   	
        var Tooltip;
        if (chapters[i].InfoIcon === true) {
            Tooltip = "<img src='imgs/info.png' class='infoicon'>  <div class='tooltiptext'>";
            Tooltip += chapters[i].InfoText;
            Tooltip += "</div>";
        } else {
            Tooltip = "";
        }


    if (chapters[i].level == 0) {
        StoryListItem.className = "story";
        StoryListItem.innerHTML = '<h1>' + chapters[i].title + Tooltip + '</h1>' + chapters[i].htmlbody;
        var Container = document.createElement("div");
        Container.id = "StoryContainer" + LastChap;
        Container.className = "StoryContainer " + LastChap;
        document.getElementById('stories').appendChild(Container);
        document.getElementById('StoryContainer' + LastChap).appendChild(StoryListItem);
    } else {
        StoryListItem.className = "substory";
        StoryListItem.innerHTML = '<h2>' + chapters[i].title + Tooltip + '</h2>' + chapters[i].htmlbody;
        StoryListItem.onclick = (
            function() {//This is a bit of crazy code called "closure". it is because you can not use the i var inside the funtion that is in the "onclick"
                var currentI = i;
                    currentI++
                    return function() {
                        ChapSelect(currentI + '');
                    }; 
            }
        )();
        document.getElementById('StoryContainer' + LastChap).appendChild(StoryListItem);
    }

    console.log("Story div: " + i + "/" + chapters.length);
};




function ChapSelect(nbr) {
    SelectedStory = nbr;
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

    if (Chap.LegendaUIName != undefined) {
       
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
    }

    //create mouse over Popup if popup content exists
    if (Chap.Popuptext != undefined) {
        //every layer gets the following
        for (var i in chapters[chapnbrpp].AllLayers) {
            //whenever the mous mouves do the following
            map.on('mousemove', chapters[chapnbrpp].AllLayers[i], function(e) {
                map.getCanvas().style.cursor = 'pointer';// Change the cursor style as a UI indicator.
                var HoverdData = e.features[0];// Single out the first found feature.
                
                //if popuppersentage is ture strat calculating total by adding all togather.
                if (PopupPercentageTotal === undefined) {
                        var PopupPercentageTotal;
                };

                if (chapters[chapnbrpp].PopupPercentage === true) {
                    var PopupPercentageTotal = 0;
                    for (var i in chapters[chapnbrpp].PopupData) {
                        PopupPercentageTotal += HoverdData.properties[chapters[chapnbrpp].PopupData[i]];
                    }
                }


                //prepare popup html content
                var PopupHtmlContent = ""; //create var for poupup content to be pushed into 

                for (var i in chapters[chapnbrpp].Popuptext) {
                        //fill the popoup content cue 
                        PopupHtmlContent += chapters[chapnbrpp].Popuptext[i];
                        PopupHtmlContent += ": ";
                        PopupHtmlContent += HoverdData.properties[chapters[chapnbrpp].PopupData[i]]; //#Array seption!
                        if (chapters[chapnbrpp].PopupPercentage === true) {  // phisicaly add the % at the end of the value if needed.
                            PopupHtmlContent += " (";
                            //calulate a rounded percentage
                            PopupHtmlContent += Math.round((HoverdData.properties[chapters[chapnbrpp].PopupData[i]]/PopupPercentageTotal)*100);
                            PopupHtmlContent += "%";
                            PopupHtmlContent += ")";                            
                        }
                        PopupHtmlContent += "<br>";
                    }    

                // Display a popup with the prepared data
                popup.setLngLat(e.lngLat) // set popup to "e" which is mouse location
                     .setHTML("<p>" + PopupHtmlContent + "</p>") //populate the popup with html 
                     .addTo(map); //display popup

                //print entirty or array data
                console.log(HoverdData);
            });

            //for every layer make sure popup disapears when mouse is not on layer anymore
            map.on('mouseleave', chapters[chapnbrpp].AllLayers[i], function() {
                map.getCanvas().style.cursor = '';//reveert to normal mouse style
                popup.remove();//hide popup
            });
        }
    }  

    //opslaan van de actieve layer zo dat hij later uit kan gezet worden.
    LastActivatedLayers = chapnbrpp;
    LastActivatedLayersHumannbr= chapnbrpp;
    LastActivatedLayersHumannbr++;
};


//To do: var declared at begining 
function NextStory(again) {
    if (again === false) {
        var nextstory = SelectedStory;
    }
    var nextstory = SelectedStory;
    nextstory++;
    console.log(nextstory);
    //SelectedStory does not need a ++ because it is the hman number(starting at 1) and not the machine number(starting at 0)
    if (chapters[SelectedStory] != undefined && chapters[SelectedStory].level == 1 ) {
        ChapSelect(nextstory)
        console.log("selecting! " + nextstory);
    } else {
         NextStory(true);
    }
}
