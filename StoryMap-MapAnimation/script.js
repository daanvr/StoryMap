var currentScrollPos;
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


//Mapbox initalisation
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFhbnZyIiwiYSI6ImNpdTJmczN3djAwMHEyeXBpNGVndWtuYXEifQ.GYZf7r9gTfQL3W-GpmmJ3A';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/daanvr/cjhhonddb03xl2snsv0igz1cq',
          duration: 6000,
          center: [5.681,52.100],
          zoom: 7,
          pitch: 0
});

    map.addControl(new mapboxgl.NavigationControl());
    map.scrollZoom.disable();
 // map.boxZoom.disable();
 // map.dragRotate.disable();
 // map.dragPan.disable();
 // map.keyboard.disable();
 // map.doubleClickZoom.disable();
 // map.touchZoomRotate.disable();

      document.getElementById('text1').style.display = "block";


LocActive = "Loc0";
window.addEventListener("scroll",function(){

  if(0*vh < window.pageYOffset && window.pageYOffset < 1*vh){
    if ("loc1" != LocActive) {
      map.flyTo({
          duration: 4000,
          center: [5.681,52.100],
          zoom: 7,
          pitch: 0
      });
      LocActive = "loc1";
      console.log("Hoofdstuk 1");
      document.getElementById('text1').style.display = "block";
      document.getElementById('text2').style.display = "none";      
      document.getElementById('text3').style.display = "none";      
      document.getElementById('text4').style.display = "none";      
      document.getElementById('text5').style.display = "none";
    };
  };

  if(1*vh < window.pageYOffset && window.pageYOffset < 2*vh){
    if ("loc2" != LocActive) {
      map.flyTo({
          duration: 4000,
          center: [4.904,52.370],
          zoom: 14,
          pitch: 0
      });
      LocActive = "loc2";
      console.log("Hoofdstuk 2");
      document.getElementById('text1').style.display = "none";
      document.getElementById('text2').style.display = "block";      
      document.getElementById('text3').style.display = "none";      
      document.getElementById('text4').style.display = "none";      
      document.getElementById('text5').style.display = "none";
    };
  };

  if(2*vh < window.pageYOffset && window.pageYOffset < 3*vh){
    if ("loc3" != LocActive) {
      map.flyTo({
        center: [4.310,52.080],
        zoom: 12,
        duration: 4000
      });
      LocActive = "loc3";
      console.log("Hoofdstuk 3");      
      document.getElementById('text1').style.display = "none";
      document.getElementById('text2').style.display = "none";      
      document.getElementById('text3').style.display = "block";      
      document.getElementById('text4').style.display = "none";      
      document.getElementById('text5').style.display = "none";
    };
  };

  if(3*vh < window.pageYOffset && window.pageYOffset < 4*vh){
    if ("loc4" != LocActive) {
      map.flyTo({
        center: [5.699,50.852],
        zoom: 14,
        pitch: 20,
        speed: 0.5,
        duration: 4000
      });
      LocActive = "loc4";
      console.log("Hoofdstuk 4");      
      document.getElementById('text1').style.display = "none";
      document.getElementById('text2').style.display = "none";      
      document.getElementById('text3').style.display = "none";      
      document.getElementById('text4').style.display = "block";      
      document.getElementById('text5').style.display = "none";
    };
  };

  if(4*vh < window.pageYOffset && window.pageYOffset < 5*vh){
    if ("loc5" != LocActive) {
      map.flyTo({
          center: [6.161,52.254],
          zoom: 14,
          pitch: 0,
          duration: 4000
      });
      LocActive = "loc5";
      console.log("Hoofdstuk 5");
      document.getElementById('text1').style.display = "none";
      document.getElementById('text2').style.display = "none";      
      document.getElementById('text3').style.display = "none";      
      document.getElementById('text4').style.display = "none";      
      document.getElementById('text5').style.display = "block";
    };
  };

console.log(window.pageYOffset);
});