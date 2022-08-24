import initMap from "./map/map.js";
import loadActionBar from "./actionBar/actionBar.js";


window.addEventListener("DOMContentLoaded", (e) => {
   initMap(10, 20);
   loadActionBar();
});