function getInventoryItems() {
    return [
        "health-potion",
        "mana-potion",
        "gloves",
        "meat",
        "meat",
        "health-potion",
        "mana-potion",
        "gloves",
        "meat",
        "meat",
        "health-potion",
        "mana-potion",
        "gloves",
        "meat",
        "meat",
        "health-potion",
        "mana-potion",
        "gloves",
        "meat",
        "meat",
        "health-potion",
        "mana-potion",
        "gloves",
        "meat"
    ];
}

function displayInventory()
{
    var $row = 3;
    var $width = 10;
    var $col = 4;
    var $itemIterator = 0;
    var $height = 5;

    var $items = getInventoryItems();

    for(var i = $row; i < $row + $height; i++)
    {
        for(var j = $col; j < $col + $width; j++)
        {
            let $box = document.querySelector("main > section.row-start-" + i + ".col-start-" + j);
            $box.classList.toggle("inventory");

            if((i !== $row && j !== $col) && (i < $row + ($height -1) && j < $col + ($width -1)))
            {
                if($itemIterator < $items.length)
                {
                    $box.classList.add($items[$itemIterator]);
                    $itemIterator++;
                }
            }
        }
    }
}

function createInventoryButton()
{
    let $box = document.querySelector("section.row-start-10.col-start-18");
    $box.classList.add("inventory-button");

    $box.addEventListener("click", displayInventory);
}

export { createInventoryButton };