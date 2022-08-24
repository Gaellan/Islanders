import initMap from "./map/map.js";
import loadActionBar from "./actionBar/actionBar.js";
import { initCharacter } from "./character/character.js";


window.addEventListener("DOMContentLoaded", (e) => {
   initMap(10, 20);
   loadActionBar();
   initCharacter();
});