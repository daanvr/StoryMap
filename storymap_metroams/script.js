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
Fly(5.0, 52.397, 9.5);

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
    chapnbr: 5,
    // title:"DAILY URBAN SYSTEM METROPOOL REGIO AMSTERDAM",
    //title:"Daily Urban System Metropool Regio Amsterdam",
    title: "",
    htmlbody: "<img src='imgs/metroams.png' style='left: -20px; position: relative;'> <br> <p style='margin: 0px;'>In deze interactieve storymap wordt het verhaal van het <b>Daily Urban System</b> van de Metropoolregio Amsterdam (MRA) verteld. Door middel van verschillende hoofdstukken en interactieve kaarten geven we inzicht in de verschillende stromen, vervoerswijzen en motieven van reizigers in de regio. Op de kaart kunt u inzoomen en de voor u interessante informatie in detail bekijken. Door op de onderstaande hoofdstukken te klikken schakelt u tussen de verschillende themas.</p><br>",
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

//===================================================

chapters[4] = {
    chapnbr: 5,
    title: "VERKEER BINNEN, VAN EN NAAR, EN DOOR DE MRA",
    htmlbody: "<p>Het meeste <b>autoverkeer</b> op de snelwegen in en rondom Amsterdam heeft een herkomst- en bestemming binnen de Metropoolregio. Op de A2 en de A4 rijdt veel verkeer van en naar de MRA. Doorgaand verkeer, zonder herkomst of bestemming in de MRA, is binnen de regio alleen duidelijk zichtbaar op de A4, A5 en A9.</p><p>De meeste verplaatsingen met het <b>openbaar vervoer</b> hebben een herkomst of bestemming in de stad Amsterdam. De spoorlijnen richting Utrecht en Den Haag/Rotterdam voeren mensen aan over grotere afstanden.</p><p><b>Let op:</b> lijnen kunnen over elkaar heen vallen, en zijn daardoor niet allemaal zichtbaar op hoog schaalniveau. Door in te zoomen komen de overlappende lijnen naast elkaar te liggen.</p>",
    location: [5, 52.35, 9.5],
    maplayers: "",
    AllLayers: [],
    iconsrc: "",
    level: "0",
    InfoIcon: false,
    InfoText: ""
};


chapters[5] = {
    chapnbr: 6,
    title: "Autoverkeer",
    htmlbody: "",
    location: [5, 52.35, 9.5],
    maplayers: "",
    AllLayers: ["mra-weg-door", "mra-weg-ext", "mra-weg-int", "mra-weg-door-lz", "mra-weg-ext-lz", "mra-weg-int-lz"],
    LegendaUIColor: ["#FAC514", "#009E03", "#2F32F4"],
    LegendaUIName: ["Intern", "Extern", "Doorgaand"],
    LegendaToggleButton: true,
    LegendaToggles: [["mra-weg-int", "mra-weg-int-lz"], ["mra-weg-ext", "mra-weg-ext-lz"], ["mra-weg-door", "mra-weg-door-lz"]],
    Popuptext: ["Intern", "Extern", "Doorgaand"],
    PopupData: ["auto_in", "auto_ex", "auto_do"],
    popuprounded: [true, true, true],
    NbrRoundedBij: 1000,
    Variables: ["auto_in", "auto_ex", "auto_do"],
    StyleDivider: 3000,
    PopupPercentage: true,
    PopupDataUnit: [undefined],
    iconsrc: "imgs/trafficjam.png",
    InfoIcon: true,
    InfoText: "Data: <br>Verkeersmodel Amsterdam (v2.0),<br>Etmaalintensiteiten 2015 [mvt/etm]</p><p><b>Geel</b>: intern verkeer binnen de MRA. Verkeer heeft een herkomst en bestemming in de MRA.</p><p><b>Groen</b> = extern verkeer, met een herkomst of bestemming in de MRA</p><p><b>Blauw</b> = doorgaand verkeer. Dit verkeer heeft geen herkomst of bestemming in de MRA",
    level: "1"

};
chapters[6] = {
    chapnbr: 7,
    title: "Openbaar vervoer",
    titlelines: "",
    titlerows: 2,
    htmlbody: "",
    location: [5, 52.35, 9.5],
    maplayers: "",
    AllLayers: ["mra-ov-door", "mra-ov-ext", "mra-ov-int", "mra-ov-door-lz", "mra-ov-ext-lz", "mra-ov-int-lz"],
    LegendaUIColor: ["#FAC514", "#009E03", "#2F32F4"],
    LegendaUIName: ["Intern", "Extern", "Doorgaand"],
    LegendaToggleButton: true,
    LegendaToggles: [["mra-ov-int", "mra-ov-int-lz"], ["mra-ov-ext", "mra-ov-ext-lz"], ["mra-ov-door", "mra-ov-door-lz"]],
    Popuptext: ["Intern", "Extern", "Doorgaand"],
    PopupData: ["ov_in", "ov_ex", "ov_do"],
    popuprounded: [true, true, true],
    NbrRoundedBij: 1000,
    StyleDivider: 3000,
    PopupPercentage: true,
    PopupDataUnit: [undefined],
    iconsrc: "imgs/trafficlight.png",
    InfoIcon: true,
    InfoText: "Data: <br>Verkeersmodel Amsterdam (v2.0),<br>Etmaalintensiteiten 2015 [mvt/etm]</p><p><b>Geel</b>: intern verkeer binnen de MRA. Verkeer heeft een herkomst en bestemming in de MRA.</p><p><b>Groen</b> = extern verkeer, met een herkomst of bestemming in de MRA</p><p><b>Blauw</b> = doorgaand verkeer. Dit verkeer heeft geen herkomst of bestemming in de MRA",
    level: "1"
};

//===================================================

chapters[8] = {
    chapnbr: 9,
    title: "REIZIGERS EN MODALITEITEN",
    htmlbody: "<p>De meeste verplaatsingen gaan van en naar de stad Amsterdam, waarbij de sterke relatie tussen Amsterdam en Amstelland-Meerlanden opvalt. De relatie tussen Amsterdam en het gebied Waterland/Zaanstreek is eveneens fors. Verder valt op dat er grote stromen zijn naar regio’s buiten de MRA zoals Utrecht, Den Haag en Rotterdam. De relaties tussen de andere delen van de Metropoolregio zijn relatief klein.</p>",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: [],
    iconsrc: "imgs/polution.png",
    level: "0"
};
chapters[9] = {
    chapnbr: 10,
    title: "Vervoerswijze",
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["spider_verpl_OV", "spider_verpl_auto", "dus-spider-names", "spider_gebiden"],
    LegendaUIColor: ["#fac514", "#9e001a"],
    LegendaUIName: ["OV", "Auto"],
    LegendaToggleButton: true,
    LegendaToggles: ["spider_verpl_OV", "spider_verpl_auto"],
    Popuptext: ["OV", "Auto"],
    PopupData: ["TOT_OV", "TOT_auto"],
    popuprounded: [true, true],
    NbrRoundedBij: 100,
    PopupPercentage: true,
    PopupDataUnit: [undefined],
    StyleDivider: 10000,
    InfoIcon: true,
    InfoText: "data: OViN & OViA, 2010-2017",
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};
chapters[10] = {
    chapnbr: 11,
    title: "Verplaatsingsmotief",
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["spider_verpl_woonwerk", "spider_verpl_onderwijs", "spider_verpl_zakelijk", "dus-spider-names", "spider_gebiden"],
    LegendaUIColor: ["#0febbb", "#b12f8c", "#8ba6ea"],
    LegendaUIName: ["Woon-Werk", "Onderwijs", "Zakelijk"],
    LegendaToggleButton: true,
    LegendaToggles: ["spider_verpl_woonwerk", "spider_verpl_onderwijs", "spider_verpl_zakelijk"],
    Popuptext: ["Woon-Werk", "Onderwijs", "Zakelijk"],
    PopupData: ["WW_alles", "OND_alles", "ZK_alles"],
    popuprounded: [true, true, true],
    NbrRoundedBij: 100,
    StyleDivider: 10000,
    PopupPercentage: true,
    PopupDataUnit: [undefined],
    InfoIcon: true,
    InfoText: "data: OViN & OViA, 2010-2017",
    iconsrc: "imgs/truck.png",
    level: "1"
};
chapters[11] = {
    chapnbr: 12,
    title: "Leeftijd",
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["spider_verpl_15-39", "spider_verpl_40-65", "spider_verpl_65plus", "dus-spider-names", "spider_gebiden"],
    LegendaUIColor: ["#bdd7cd", "#798983", "#56625e"],
    LegendaUIName: ["15 tot 39", "van 40 tot 65", "65 plus"],
    LegendaToggleButton: false,
    //LegendaToggles: ["spider_verpl_15-", "spider_verpl_15-39", "spider_verpl_40-65", "spider_verpl_65plus"],
    Popuptext: ["15 de 39", "40 tot 65", "65 plus"],
    PopupData: ["LFT_15_39", "LFT_40_65", "LFT_65"],
    popuprounded: [true, true, true],
    NbrRoundedBij: 100,
    StyleDivider: 10000,
    PopupPercentage: true,
    PopupDataUnit: [undefined],
    InfoIcon: true,
    InfoText: "data: OViN & OViA, 2010-2017",
    iconsrc: "imgs/truck.png",
    level: "1"
};

//===================================================

chapters[12] = {
    chapnbr: 13,
    title: "MODAL SPLIT",
    htmlbody: "<p>Op de kaart is de modal split van alle verplaatsingen binnen, van en naar het betreffende gebied weergegeven. In de meeste gebieden binnen de regio wordt 40 tot 50% van alle verplaatsingen met de auto afgelegd. Alleen voor de gebieden binnen en langs de ring A10 neemt dit af tot 25%. In het centrum van Amsterdam is het aandeel auto slechts 10% en hebben lopen en fiets het grootste aandeel. Het openbaar vervoer speelt een bescheiden rol in de totale mobiliteit, dat komt mede omdat het grootste deel van de verplaatsingen plaats vindt over korte afstanden.</p>",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: [],
    iconsrc: "imgs/polution.png",
    level: "0"
};
chapters[13] = {
    chapnbr: 14,
    title: "Metropoolregio Amsterdam",
    titlerows: 2,
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["dus-pie-auto", "dus-pie-ov", "dus-pie-fiets", "dus-pie-grenzen"],
    LegendaUIColor: ["#f90101", "#0eb8f6", "#12f838"],
    LegendaUIName: ["Auto", "Openbaar Vervoer", "Fiets en Lopen"],
    LegendaToggleButton: false,
    LegendaToggles: ["", "", ""],
    Popuptext: ["Auto", "Openbaar Vervoer", "Fiets en Lopen"],
    PopupData: ["TOT_auto", "TOT_OV", "TOT_fiets"],
    popuprounded: [true, true, true],
    NbrRoundedBij: 1000,
    PopupPercentage: true,
    PopupDataUnit: [undefined],
    StyleDivider: "",
    InfoIcon: true,
    InfoText: "data: OViN & OViA, 2010-2017",
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};

//===================================================

chapters[14] = {
    chapnbr: 15,
    title: "AMSTERDAMSE BEROEPSBEVOLKING",
    htmlbody: "<p>De werkzame personen in Amsterdam zijn in toenemende mate woonachtig buiten de stad. Tussen 2006 en 2016 is het aantal gemeenten waarvan meer dan 15% van de beroepsbevolking werkt in Amsterdam toegenomen van 22 naar 31, inclusief gemeenten van buiten de Metropoolregio. Mensen leggen grotere afstand af naar hun werklocatie. Het Daily Urban System van Amsterdam groeit.</p>",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: [],
    iconsrc: "imgs/polution.png",
    level: "0"
};
chapters[15] = {
    chapnbr: 16,
    title: "Daily Urban System 2006",
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["dus-werk-ams-2006", "dus-werk-ams-genzen"],
    LegendaUIColor: ["#02a0c0", "#54e0fc", "#9ca202", "#707401"],
    LegendaUIName: ["Meer dan 25%", "15% tot 25%", "5% tot 15%", "Minder dan 5%"],
    LegendaToggleButton: false,
    //LegendaToggles: ["", "", ""],
    Popuptext: ["Gemeente", "2006", "2016"],
    PopupData: ["gemeentena", "F__ams_200", "F__ams_201"],
    PopupDataUnit: ["", "%", "%"],
    popupNothingAfterComma: [false, true, true],
    PopupPercentage: false,
    popuprounded: [false, false, false],
    StyleDivider: "",
    InfoIcon: false,
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};
chapters[16] = {
    chapnbr: 17,
    title: "Daily Urban System 2016",
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["dus-werk-ams-2016", "dus-werk-ams-genzen"],
    LegendaUIColor: ["#02a0c0", "#54e0fc", "#9ca202", "#707401"],
    LegendaUIName: ["Meer dan 25%", "15% tot 25%", "5% tot 15%", "Minder dan 5%"],
    LegendaToggleButton: false,
    //LegendaToggles: ["", "", ""],
    Popuptext: ["Gemeente", "2006", "2016"],
    PopupData: ["gemeentena", "F__ams_200", "F__ams_201"],
    PopupDataUnit: ["", "%", "%"],
    popupNothingAfterComma: [false, true, true],
    PopupPercentage: false,
    popuprounded: [false, false, false],
    StyleDivider: "",
    InfoIcon: false,
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};
chapters[17] = {
    chapnbr: 18,
    title: "2016 in verhouding tot 2006",
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["dus-werk-ams-2006-2016", "dus-werk-ams-2016-2006", "dus-werk-ams-genzen"],
    LegendaUIColor: ["#ff3838", "", "#38deff"],
    LegendaUIName: ["-10 procentpunten", "geen verschil", "+10 procentpunten"],
    LegendaToggleButton: false,
    LegendaToggles: ["", "", ""],
    Popuptext: ["Gemeente", "2006", "2016"],
    PopupData: ["gemeentena", "F__ams_200", "F__ams_201"],
    PopupDataUnit: ["", "%", "%"],
    popupNothingAfterComma: [false, true, true],
    PopupPercentage: false,
    popuprounded: [false, false, false],
    StyleDivider: "",
    InfoIcon: true,
    InfoText: "data: CBS, Banen van werknemers, 2006-2016",
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};



chapters[18] = {
    chapnbr: 19,
    title: "Inwoners & werkgelegenheid",
    htmlbody: "<p>In de afgelopen tien jaar is het aantal inwoners van Amsterdam metmaar liefst 100.000 mensen toegenomen. Andere grote groeier is Almere. Relatief weinig groei is er in de IJmond.</p><p>Wat betreft de werkgelegenheid neemt Amsterdam het overgrote deel van degroei voor haar rekening. Het aantal banen groeit harder dan deberoepsbevolking. Dit kan tot meer pendel naar de stad leiden. Verdervalt op dat ondanks dat de crisis al een paar jaar achter ons ligt veelgemeenten een negatieve ontwikkeling van de werkgelegenheid laten zien ennog niet op het niveau van voor de crisis zitten. Met name Almere valtop.</p>",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: [],
    iconsrc: "imgs/polution.png",
    level: "0"
};

chapters[19] = {
    chapnbr: 20,
    title: "Inwoners",
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["dus-inwoners", "dus-population-area"], //woon grenze toevoegen
    LegendaUIColor: ["#ff3838", "", "#38deff"],
    LegendaUIName: ["-2.000 inwoners", "geen verschil", "+20.000 inwoners of meer"],
    LegendaToggleButton: false,
    LegendaToggles: ["", "", ""],
    Popuptext: ["Gemeente", "2008", "2018"],
    PopupData: ["gemeentena", "2008", "2018"],
    PopupDataUnit: [""," inwoners", " inwoners"],
    popupNothingAfterComma: false,
    PopupPercentage: false,
    popuprounded: [false, true, true],
    NbrRoundedBij: 1000,
    StyleDivider: "",
    InfoIcon: true,
    InfoText: "data: CBS, Banen van werknemers, 2006-2016",
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};

chapters[20] = {
    chapnbr: 21,
    title: "Werkgelegenheid",
    htmlbody: "",
    location: [5.374, 52.4052, 9],
    maplayers: "",
    AllLayers: ["dus-werkgelegenheid", "dus-population-area"],
    LegendaUIColor: ["#ff3838", "", "#38deff"],
    LegendaUIName: ["-10.000 banen of minder", "geen verschil", "+10.000 banen of meer"],
    LegendaToggleButton: false,
    LegendaToggles: ["", "", ""],
    Popuptext: ["Gemeente", "2008", "2016"],
    PopupData: ["gemeentena", "banen_2008", "banen_2016"],
    PopupDataUnit: [""," duizend banen", " duizend banen"],
    popupNothingAfterComma: false,
    PopupPercentage: false,
    popuprounded: [false, false, false],
    StyleDivider: "",
    InfoIcon: true,
    InfoText: "data: CBS, Banen van werknemers, 2006-2016",
    iconsrc: "imgs/trafficlight.png",
    level: "1"
};

chapters[30] = {
    chapnbr: 31,
    title: "",
    htmlbody: "<p>Deze storymap is ontwikkeld door Goudappel Coffeng in opdracht van de Metropoolregio Amsterdam (oktober 2018).</p> <br> <a href='https://www.goudappel.nl/'><img src='imgs/GGLogo.png' style=' position: relative; max-width: 170px; padding-left: 70px; padding-right:50px;'></a>",
    location: "",
    maplayers: "",
    AllLayers: [],
    iconsrc: "imgs/polution.png",
    InfoIcon: false,
    level: "0"
};

console.log(chapters);

//build chaper menu list & story list
Build();
function Build() {
    for (var i in chapters) {
        var iplusplus = i;
        iplusplus++;

        var LastChap;
        if (chapters[i].level == 0) { LastChap = "Chap" + iplusplus; }
        // var Tooltip;
        // if (chapters[i].InfoIcon === true) { Tooltip = true}


        BuildChapList(i, iplusplus, LastChap);
        BuildStoryList(i, iplusplus, LastChap);
    }
};

function BuildChapList(i, iplusplus, LastChap) {
    var ChapListItem = document.createElement("div");
    ChapListItem.id = "Chap" + iplusplus;
    if (chapters[i].level == 0) {
    ChapListItem.className = "ChapItem";
    } else {
        ChapListItem.className = "SubChapItem";
        ChapListItem.innerHTML = '<img class="ChapItemLogo" src="' + chapters[i].iconsrc + '"><p class="ChapItemBtn" >' + chapters[i].title + '</p>';
        ChapListItem.onclick = (function () {//This is a bit of crazy code called "closure". it is because you can not use the i var inside the funtion that is in the "onclick"
            var currentI = i;
            currentI++
            return function () { ChapSelect(currentI + ''); }
        })();

    }
    if (chapters[i].level == 0) {
        document.getElementById('ChapList').appendChild(ChapListItem);
        console.log("Menu div MegaCahp: " + i + "/" + chapters.length);
    } else {
        document.getElementById(LastChap).appendChild(ChapListItem);
        console.log("Menu div InfChap: " + i + "/" + chapters.length);
    }
};

function BuildStoryList(i, iplusplus, LastChap) {

    var StoryListItem = document.createElement("div");

    StoryListItem.id = "Story" + iplusplus;

    //preparing the content of the tooltip for being used later
    var Tooltip = "";
    if (chapters[i].InfoIcon === true) {
        Tooltip = "<img src='imgs/info.png' class='infoicon'>  <div class='tooltiptext'>";
        Tooltip += chapters[i].InfoText;
        Tooltip += "</div>";
    } else {
        Tooltip = "";
    }

    //if statment ot diside if the story is a main soty or a sub sotry
    if (chapters[i].level == 0) { //is main story
        //preparing story div
        StoryListItem.className = "story";
        StoryListItem.innerHTML = '<h1>' + chapters[i].title + Tooltip + '</h1>' + chapters[i].htmlbody;
        var Container = document.createElement("div");
        Container.id = "StoryContainer" + LastChap;
        Container.className = "StoryContainer " + LastChap;
        document.getElementById('stories').appendChild(Container);
    } else { //must be substory
        //preparing story div
        if (chapters[i].titlerows === 2) {
            StoryListItem.className = "substory secondtitlerow";
        } else {
            StoryListItem.className = "substory";
        }

        StoryListItem.innerHTML = '<h2>' + chapters[i].title + Tooltip + '</h2>' + chapters[i].htmlbody;
        StoryListItem.onclick = (
            function () {//This is a bit of crazy code called "closure". it is because you can not use the i var inside the funtion that is in the "onclick"
                var currentI = i;
                currentI++
                return function () {
                    ChapSelect(currentI + '');
                };
            }
        )();
    }
    //actually pushing the div that has been built previously to the HTML
    document.getElementById('StoryContainer' + LastChap).appendChild(StoryListItem);

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
function UISelectionFeedback(Storynbr) {
    var newchapter = "Chap" + Storynbr;
    var newstory = "Story" + Storynbr;
    var NewChapterDOM = document.getElementById(newchapter);
    var NewStoryDOM = document.getElementById(newstory);

    //deselect all divs by class selected
    //var SelectedDIVs = document.getElementsByClassName("selected");
    var SelectedDIVs = document.querySelectorAll('.selected');
    var i;
    for (i = 0; i < SelectedDIVs.length; i++) {
        SelectedDIVs[i].classList.remove("selected");
    }

    //select correct Layers

    //Select corredt icone in Stpry List
    NewChapterDOM.classList.toggle("selected");

    //Select and navigate to correct Story in sidebare
    NewStoryDOM.classList.toggle("selected");
    //NewStoryDOM.scrollIntoView({behavior: "smooth"}); //this scolling only works in Chrome :(
    //Tooltip layers to be selection
};

//Code snippet used to fly the camera to a different location
function Fly(Long, Lat, Zoom) {
    if (Zoom == undefined) { Zoom = 11.9 }
    map.flyTo({
        center: [Long, Lat],
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




map.on('mouseleave', 'gsm-blau', function () {
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
            console.log("Layer " + LastActivatedLayersHumannbr + "." + i + " uit");  // Laat weten dat het uitzetten gelukt is.
        }
    }

    //leeg maken van Legenda
    LegendaUI.innerHTML = "";

    //ale layer in de nieuwe selectie gaat aan
    for (var i in chapters[chapnbrpp].AllLayers) {
        map.setLayoutProperty(chapters[chapnbrpp].AllLayers[i], 'visibility', 'visible');  //zet de layer met de specifique naam aan
        console.log("Layer " + Chap.chapnbr + "." + i + " aan");  // Laat weten dat het uitzetten gelukt is.
    }

    if (Chap.LegendaUIName != undefined) {

        //HTML snipits to add arround the variables needed to make a compleat html code with content for the Legend
        var a = "<div class='color' style='background-color: "
        var b = ";'>"
        var c_box = "<label class='switch'><input onclick='LayerToggle();' id='LayerNBR"
        var d_box = "' type='checkbox' checked>"
        var e = "<span class='slider round'></span></label>"
        var f = "</div>"

        //Creating an array with the final HTML needed to populte the legenda
        var HTMLLegenda = []; // creating the var
        for (var i in chapters[chapnbrpp].LegendaUIColor) {
            if (chapters[chapnbrpp].LegendaToggleButton === true) {
                HTMLLegenda.push(a);
                HTMLLegenda.push(chapters[chapnbrpp].LegendaUIColor[i]);
                HTMLLegenda.push(b);
                HTMLLegenda.push(c_box);
                HTMLLegenda.push(i);
                HTMLLegenda.push(d_box);
                HTMLLegenda.push(chapters[chapnbrpp].LegendaUIName[i]);
                HTMLLegenda.push(e);
                HTMLLegenda.push(f);
            } else {
                HTMLLegenda.push(a);
                HTMLLegenda.push(chapters[chapnbrpp].LegendaUIColor[i]);
                HTMLLegenda.push(b);
                HTMLLegenda.push(chapters[chapnbrpp].LegendaUIName[i]);
                HTMLLegenda.push(e);
                HTMLLegenda.push(f);
            }
        }

        //inserting variables in Legenda
        LegendaUI.innerHTML = HTMLLegenda.join("");  //placing the HTML in the UI with the join function to make sure there are no commas between the variables
    }

    //create mouse over Popup if popup content exists
    if (Chap.Popuptext != undefined) {
        //every layer gets the following
        for (var i in chapters[chapnbrpp].AllLayers) {
            //whenever the mous mouves do the following
            map.on('mousemove', chapters[chapnbrpp].AllLayers[i], function (e) {
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
                    if (chapters[chapnbrpp].popuprounded[i] === true) {//if rounded true then round
                        RoundedNumber = HoverdData.properties[chapters[chapnbrpp].PopupData[i]]; //load not rounded data
                        RoundedNumber = chapters[chapnbrpp].NbrRoundedBij * Math.ceil(RoundedNumber / chapters[chapnbrpp].NbrRoundedBij); //round bij the number defined in chapter
                        PopupHtmlContent += RoundedNumber; //set rounded number in popup content
                    } else if (chapters[chapnbrpp].popupNothingAfterComma[i] === true) { // truncated after "." in this cade to make a clear 45% as opossed to 0.45425235235
                        TruncatedNumber = HoverdData.properties[chapters[chapnbrpp].PopupData[i]]; //load not truncated data
                        TruncatedNumber = TruncatedNumber*100; // go from decimal presentage exprssion to normal persenatge expression
                        TruncatedNumber = "" + TruncatedNumber + "" ; // I think this makes it a string. otherie it gisves a error not at function.
                        var n = TruncatedNumber.indexOf('.'); // look for where there is a "." if any
                        TruncatedNumber = TruncatedNumber.substring(0, n != -1 ? n : TruncatedNumber.length); // cut the string at the detected ".",
                        PopupHtmlContent += TruncatedNumber; // writte newly formated nuber to popup text
                    } else { //else do not rounde
                        PopupHtmlContent += HoverdData.properties[chapters[chapnbrpp].PopupData[i]];
                    }

                    if (chapters[chapnbrpp].PopupDataUnit[i] != undefined) {
                        PopupHtmlContent += chapters[chapnbrpp].PopupDataUnit[i];
                    }

                    if (chapters[chapnbrpp].PopupPercentage === true) {  // phisicaly add the % at the end of the value if needed.
                        PopupHtmlContent += " (";
                        //calulate a rounded percentage
                        PopupHtmlContent += Math.round((HoverdData.properties[chapters[chapnbrpp].PopupData[i]] / PopupPercentageTotal) * 100);
                        PopupHtmlContent += "%";
                        PopupHtmlContent += ")";
                    }
                    PopupHtmlContent += "<br>";
                }




                // Display a popup with the prepared data
                if (HoverdData.properties[chapters[chapnbrpp].PopupData[0]] != undefined) {
                    popup.setLngLat(e.lngLat) // set popup to "e" which is mouse location
                        .setHTML("<p>" + PopupHtmlContent + "</p>") //populate the popup with html 
                        .addTo(map); //display popup            
                    map.getCanvas().style.cursor = 'pointer';// Change the cursor style as a UI indicator.

                }


                //print entirty or array data
                console.log(HoverdData);
            });

            //for every layer make sure popup disapears when mouse is not on layer anymore
            map.on('mouseleave', chapters[chapnbrpp].AllLayers[i], function () {
                map.getCanvas().style.cursor = '';//reveert to normal mouse style
                popup.remove();//hide popup
            });
        }
    }

    //opslaan van de actieve layer zo dat hij later uit kan gezet worden.
    LastActivatedLayers = chapnbrpp;
    LastActivatedLayersHumannbr = chapnbrpp;
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
    if (chapters[SelectedStory] != undefined && chapters[SelectedStory].level == 1) {
        ChapSelect(nextstory)
        console.log("selecting! " + nextstory);
    } else {
        NextStory(true);
    }
}





function LayerToggle() {
    // SelectedStory nbr
    console.log("Selected story human: " + SelectedStory);
    var CurrentStory = SelectedStory;
    CurrentStory--
    console.log("Selected story code numbesr:" + CurrentStory);
    var LegendaToogleStatus = new Array(); // status of the legenda toggles
    var test;
    for (i in chapters[CurrentStory].LegendaUIColor) { // for every toogle on the page
        LegendaToogleStatus[i] = document.getElementById("LayerNBR" + i).checked // extracting and saving toggle status
        test = i;
        if (LegendaToogleStatus[i] === true) { // if the toggle is on:
            console.log("Layer Toogle is ON of layer: " + chapters[CurrentStory].Popuptext[i]);
            // console.log("nbr of layers in Toogle: " + chapters[CurrentStory].LegendaToggles[i].length);
            // console.log("nbr of layers in Toogle using object key: " + Object.keys(chapters[CurrentStory].LegendaToggles[i]).length);

            if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers in this toggle:
                console.log("2 layers");

                for (i2 in chapters[CurrentStory].LegendaToggles[i]) {// loop throug the layers of the toggle
                    map.setLayoutProperty(chapters[CurrentStory].LegendaToggles[i][i2], 'visibility', 'visible');  //zet de layer met de specifique naam uit
                }
            } else {// if there is one layer in this toggle do this:
                console.log("1 layer");
                map.setLayoutProperty(chapters[CurrentStory].LegendaToggles[i], 'visibility', 'visible');  //zet de layer met de specifique naam uit
            }
        } else { // Else the toggle must be off:
            if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers in this toggle:
                for (i2 in chapters[CurrentStory].LegendaToggles[i]) {//loop throug both the layers
                    map.setLayoutProperty(chapters[CurrentStory].LegendaToggles[i][i2], 'visibility', 'none');  //zet de layer met de specifique naam uit
                }
            } else { // else we hope there is only 1:
                map.setLayoutProperty(chapters[CurrentStory].LegendaToggles[i], 'visibility', 'none');  //zet de layer met de specifique naam uit
            }
        }
    }
    console.log("Togggle Status: ");
    console.log(LegendaToogleStatus);



    var LayerStyleProperties = new Array();
    for (i in chapters[CurrentStory].AllLayers) {
        //LayerStyleProperties[i] = map.getPaintProperty(chapters[CurrentStory].AllLayers[i], "line-width");
    }
    console.log("layer 1 style: ");
    console.log(LayerStyleProperties[0]);

    //how many layers are on:
    CountLayersOn = 0 //reinitialise CountLayersOn
    for (i in LegendaToogleStatus) { //for every toogle
        CountLayersOn += Number(LegendaToogleStatus[i]);  //add the bollian of the starus (is 0 or 1)
    }
    console.log("the number of layers that are on is: " + CountLayersOn);


    // var Varsusedbylayers = new Array();
    // if (LayerStyleProperties[0][1][1][1][1][1] != undefined) {Varsusedbylayers[0] = LayerStyleProperties[0][1][1][1][1][1]; console.log("L1: "+Varsusedbylayers[0]);}
    // if (LayerStyleProperties[1][1][1][1][1] != undefined) {Varsusedbylayers[1] = LayerStyleProperties[1][1][1][1][1]; console.log("L2: "+Varsusedbylayers[1]);}
    // if (LayerStyleProperties[1][2][1][1] != undefined) {Varsusedbylayers[2] = LayerStyleProperties[1][2][1][1];console.log("L3: "+Varsusedbylayers[2]);}
    // if (LayerStyleProperties[1][1][2][1][1] != undefined) {Varsusedbylayers[3] = LayerStyleProperties[1][1][2][1][1];console.log("L4: "+Varsusedbylayers[3]);}


    var StringStyleLayer = "";

    if (CountLayersOn == 1) {// if only 1 layers is ON
        StyledLayersCounter = 0; //Start the counter to count the number of styled layers
        for (i in LegendaToogleStatus) { // go past all toggles.
            // console.log("testing boolean " + i)
            if (LegendaToogleStatus[i] == true) {  // if toggle is ON:
                if (StyledLayersCounter == 0) {  // If it is the first layer to be stlyled:
                    console.log("Toggle: " + i + " is TRUE")

                    //Build a string with the style
                    StringStyleLayer = '["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']';
                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // els it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                } else if (StyledLayersCounter = 1) { }
            } else { console.log("Toggle: " + i + " is FALSE") }
        }


    } else if (CountLayersOn == 2) {
        StyledLayersCounter = 0; //Start the counter to count the number of styled layers
        var StyledLayersDataName = new Array(); //Space to store layer width set to layers above this one. 
        //console.log("test1");
        //(i = CountLayersOn; i > 0; i--)
        //(i in LegendaToogleStatus)
        for (i = CountLayersOn; i >= 0; i--) { // go past all toggles but backwards, this make sure the last layer is the most backwards and has the accumulated with of all others
            console.log("rounds to have" + i);
            if (LegendaToogleStatus[i] == true) {  // if toggle is ON:
                //console.log("test 2222");

                if (StyledLayersCounter == 0) {  // If it is the first layer to be stlyled:
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])
                    StyledLayersDataName[0] = chapters[CurrentStory].PopupData[i];

                    //Build a string with the style
                    StringStyleLayer = '["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']';
                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // els it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                    StyledLayersCounter++;
                } else if (StyledLayersCounter = 1) { //else if no layer ways styled, maybe 1 layer was?
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])

                    //Build a string with the style
                    StringStyleLayer = '["+",["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[0]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += '],["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']]';

                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // else it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                }
            } else { console.log("Toggle: " + i + " is FALSE") }
        }
    } else if (CountLayersOn == 3) {
        StyledLayersCounter = 0; //Start the counter to count the number of styled layers
        var StyledLayersDataName = new Array(); //Space to store layer width set to layers above this one. 
        //console.log("test1");
        //(i = CountLayersOn; i > 0; i--)
        //(i in LegendaToogleStatus)
        for (i = CountLayersOn; i >= 0; i--) { // go past all toggles but backwards, this make sure the last layer is the most backwards and has the accumulated with of all others
            console.log("rounds to have" + i);
            if (LegendaToogleStatus[i] == true) {  // if toggle is ON:
                //console.log("test 2222");

                if (StyledLayersCounter == 0) {  // If it is the first layer to be stlyled:
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])
                    StyledLayersDataName[0] = chapters[CurrentStory].PopupData[i];

                    //Build a string with the style
                    StringStyleLayer = '["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']';
                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // els it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                    StyledLayersCounter++;
                } else if (StyledLayersCounter == 1) { //else if no layer ways styled, maybe 1 layer was?
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])
                    StyledLayersDataName[1] = chapters[CurrentStory].PopupData[i];

                    //Build a string with the style
                    StringStyleLayer = '["+",["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[0]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += '],["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']]';

                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // else it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                    StyledLayersCounter++;
                } else if (StyledLayersCounter == 2) { //else if not 0 or 1 layer ways styled, maybe 2 layer were?
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])
                    StyledLayersDataName[2] = chapters[CurrentStory].PopupData[i];

                    //Build a string with the style
                    StringStyleLayer = '["+",["+",["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += '],["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[0]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']],["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[1]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']]';

                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // else it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                }
            } else { console.log("Toggle: " + i + " is FALSE") }
        }
    } else if (CountLayersOn == 4) {
        StyledLayersCounter = 0; //Start the counter to count the number of styled layers
        var StyledLayersDataName = new Array(); //Space to store layer width set to layers above this one. 
        //console.log("test1");
        //(i = CountLayersOn; i > 0; i--)
        //(i in LegendaToogleStatus)
        for (i = CountLayersOn; i >= 0; i--) { // go past all toggles but backwards, this make sure the last layer is the most backwards and has the accumulated with of all others
            console.log("rounds to have" + i);
            if (LegendaToogleStatus[i] == true) {  // if toggle is ON:
                //console.log("test 2222");

                if (StyledLayersCounter == 0) {  // If it is the first layer to be stlyled:
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])
                    StyledLayersDataName[0] = chapters[CurrentStory].PopupData[i];

                    //Build a string with the style
                    StringStyleLayer = '["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']';
                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // els it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                    StyledLayersCounter++;
                } else if (StyledLayersCounter == 1) { //else if no layer ways styled, maybe 1 layer was?
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])
                    StyledLayersDataName[1] = chapters[CurrentStory].PopupData[i];

                    //Build a string with the style
                    StringStyleLayer = '["+",["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[0]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += '],["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']]';

                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // else it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                    StyledLayersCounter++;
                } else if (StyledLayersCounter == 2) { //else if not 0 or 1 layer ways styled, maybe 2 layer were?
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])
                    StyledLayersDataName[2] = chapters[CurrentStory].PopupData[i];

                    //Build a string with the style
                    StringStyleLayer = '["+",["+",["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += '],["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[0]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']],["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[1]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']]';

                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // else it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                    StyledLayersCounter++;
                } else if (StyledLayersCounter == 3) { //else if no layer ways styled, maybe 1 layer was?
                    console.log("Toggle: " + i + " is TRUE and is named: " + chapters[CurrentStory].Popuptext[i])
                    StyledLayersDataName[3] = chapters[CurrentStory].PopupData[i];

                    //Build a string with the style
                    StringStyleLayer = '["+",["+",["+",["/",["get", "';
                    StringStyleLayer += chapters[CurrentStory].PopupData[i];
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += '],["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[0]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']],["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[1]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']],["/",["get", "';
                    StringStyleLayer += StyledLayersDataName[2]; //the width of layers above it are added
                    StringStyleLayer += '"],';
                    StringStyleLayer += chapters[CurrentStory].StyleDivider;
                    StringStyleLayer += ']]';

                    console.log("this is the string: " + StringStyleLayer);
                    var StringStyleLayer = JSON.parse(StringStyleLayer); //convert the string into a array that can be red by Mapbox.
                    console.log("Parsing...");

                    if (chapters[CurrentStory].LegendaToggles[i].length == 2) { // if therer is 2 layers activated by this toggle:
                        console.log("2 layers to be styled");
                        for (i2 in chapters[CurrentStory].LegendaToggles[i]) {  //for every toggle activated by this layer
                            console.log("painting layer " + i2)
                            map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i][i2], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                        }
                    } else { // else it should have 1 layer
                        console.log("Painting...");
                        map.setPaintProperty(chapters[CurrentStory].LegendaToggles[i], "line-width", StringStyleLayer); //actually set the style by sending it ot the Mapbox API
                    }
                    StyledLayersCounter++;
                }
            } else { console.log("Toggle: " + i + " is FALSE") }
        }
    }






    // LayerStyleProperties[5][1][1][2] = 50;
    // LayerStyleProperties[10]=
    //                             [
    //                               "+",
    //                               [
    //                                 "+",
    //                                 [ "/", ["get", "weg_door"],50],
    //                                 [ "/", ["get", "weg_ex"], 50]
    //                               ],
    //                               [ "/", ["get", "weg_int"], 50]
    //                             ]; 
    // map.setPaintProperty(chapters[SelectedStory].AllLayers[5], "line-width", LayerStyleProperties[5]);
}





