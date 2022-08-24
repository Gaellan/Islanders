function canIMoveThere($box)
{
    if($box.classList.contains("camp-fire"))
    {
        return false;
    }
    else if($box.classList.contains("water"))
    {
        return false;
    }
    else if($box.classList.contains("tree"))
    {
        return false;
    }
    else if($box.classList.contains("rock"))
    {
        return false;
    }
    else if($box.classList.contains("tent"))
    {
        return false;
    }
    else if($box.classList.contains("stump"))
    {
        return false;
    }

    return true;
}

function moveRight($character)
{
    if($character.posX < 20)
    {
        let $newBox = document.querySelector("section.col-start-" + ($character.posX + 1) + ".row-start-" + $character.posY);

        if(canIMoveThere($newBox))
        {
            let $currentBox = document.querySelector("section.col-start-" + $character.posX + ".row-start-" + $character.posY);
            $newBox.classList.add("character");
            $currentBox.classList.remove("character");
            $character.posX++;
            localStorage.setItem("character", JSON.stringify($character));
        }
    }
}

function moveLeft($character)
{
    if($character.posX > 1)
    {
        let $newBox = document.querySelector("section.col-start-" + ($character.posX - 1) + ".row-start-" + $character.posY);

        if(canIMoveThere($newBox))
        {
            let $currentBox = document.querySelector("section.col-start-" + $character.posX + ".row-start-" + $character.posY);
            $newBox.classList.add("character");
            $currentBox.classList.remove("character");
            $character.posX--;
            localStorage.setItem("character", JSON.stringify($character));
        }
    }
}

function moveDown($character)
{
    if($character.posY < 10)
    {
        let $newBox = document.querySelector("section.col-start-" + $character.posX + ".row-start-" + ($character.posY + 1));

        if(canIMoveThere($newBox))
        {
            let $currentBox = document.querySelector("section.col-start-" + $character.posX + ".row-start-" + $character.posY);
            $newBox.classList.add("character");
            $currentBox.classList.remove("character");
            $character.posY++;
            localStorage.setItem("character", JSON.stringify($character));
        }
    }
}

function moveUp($character)
{
    if($character.posY > 1)
    {
        let $newBox = document.querySelector("section.col-start-" + $character.posX + ".row-start-" + ($character.posY - 1));

        if(canIMoveThere($newBox))
        {
            let $currentBox = document.querySelector("section.col-start-" + $character.posX + ".row-start-" + $character.posY);
            $newBox.classList.add("character");
            $currentBox.classList.remove("character");
            $character.posY--;
            localStorage.setItem("character", JSON.stringify($character));
        }
    }
}

function initCharacter()
{
    let $character = {
        posX : 3,
        posY : 9,
        inventory : []
    };

    let $currentBox = document.querySelector("section.col-start-" + $character.posX + ".row-start-" + $character.posY);
    $currentBox.classList.add("character");

    localStorage.setItem("character", JSON.stringify($character));

    document.addEventListener("keydown", (event) => {
        let $character = JSON.parse(localStorage.getItem("character"));
        switch (event.key)
        {
            case "w" :
                moveUp($character);
                break;
            case "a":
                moveLeft($character);
                break;
            case "d" :
                moveRight($character);
                break;
            case "s" :
                moveDown($character);
                break;
            default:
                break;
        }
    });
}

export { initCharacter };