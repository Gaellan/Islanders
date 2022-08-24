let $island1 = {
    id : 1,
    floors : [
        "WWWWWWWWWWWWWWWWWWWW",
        "WSSSGGGGGGGGGGGGGGGW",
        "WSGGGGDDDDDDDDDDDGGW",
        "WGGGGDDDDDDDDDDDDDGW",
        "WGGDDDDDDDDDDDDDDDDW",
        "WGGDGDDDDDDDDDDDDDGW",
        "WGDDGGDDDDDDDDDDDGGW",
        "WGDGGGGGGGGGGGGGGGGW",
        "WGDGGGGGGGGGGGGGGGGW",
        "WWWWWWWWWWWWWWWWWWWW"
    ],
    items : [
        {
            type : "tree",
            posX : 6,
            posY: 9,
        },
        {
            type : "tree",
            posX : 8,
            posY: 8,
        },
        {
            type : "tree",
            posX : 10,
            posY: 9,
        },
        {
            type : "rocks",
            posX : 2,
            posY: 2,
        },
        {
            type : "rocks",
            posX : 17,
            posY: 6,
        },
        {
            type : "stump",
            posX : 4,
            posY : 3,
        },
        {
            type : "logs",
            posX : 17,
            posY : 7,
        }
    ],
    buildings : [
        {
            type : "tent",
            posX : 8,
            posY: 4,
        },
        {
            type : "pier",
            posX : 20,
            posY: 5,
        },
        {
            type : "camp-fire",
            posX : 9,
            posY: 5,
        },
    ],
    waypoints : {
        next : {
            posX : 20,
            posY: 5,
        },
        prev : null,
    }
};

let $islands = [
    $island1
];

export { $island1 };

