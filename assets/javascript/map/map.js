import { $island1} from "../maps/maps.js";

function loadItems()
{
    var items = $island1.items;

    for(var i = 0; i < items.length; i++)
    {
        let $box = document.querySelector("section.col-start-" + items[i].posX + ".row-start-" + items[i].posY);
        $box.classList.add(items[i].type);
    }
}

function loadBuildings()
{
    var buildings = $island1.buildings;

    for(var i = 0; i < buildings.length; i++)
    {
        let $box = document.querySelector("section.col-start-" + buildings[i].posX + ".row-start-" + buildings[i].posY);
        $box.classList.add(buildings[i].type);
    }
}

function loadFloors()
{
    var floors = $island1.floors;

    for(var i = 0; i < floors.length; i++)
    {
        for(var j = 0; j < floors[i].length; j++)
        {
            let $box = document.querySelector("section.col-start-" + (j + 1) + ".row-start-" + (i + 1));

            if(floors[i][j] === "W")
            {
                $box.classList.add("water");
            }
            else if(floors[i][j] === "G")
            {
                $box.classList.add("grass");
            }
            else if(floors[i][j] === "D")
            {
                $box.classList.add("dirt");
            }
            else if(floors[i][j] === "S")
            {
                $box.classList.add("sand");
            }
        }
    }
}



export default function initMap(rows, cols){
    let $main = null;
    let $box = null;
    let $id = 0;

    for(var i = 0; i < rows; ++i)
    {
        for(var j = 0; j < cols; ++j)
        {
            $main = document.querySelector("main");
            $box = document.createElement("section");
            $box.classList.add("col-start-" + (j + 1));
            $box.classList.add("col-end-" + (j + 1));
            $box.classList.add("row-start-" + (i + 1));
            $box.classList.add("row-end-" + (i + 1));
            $box.setAttribute("id", $id);
            $main.appendChild($box);
            $id++;
        }
    }

    loadFloors();
    loadItems();
    loadBuildings();
}