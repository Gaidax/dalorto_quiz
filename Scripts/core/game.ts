/// <reference path="_reference.ts"/>

/**
 * @author Vasyl Milchevskyi
 * @version 0.1 - Initial version of the quizz
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

namespace core {

    // Variable Declarations

    // declare a reference to the Preloader
    export let assets: createjs.LoadQueue;
    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage: createjs.Stage;

    export let countryAtlas: createjs.SpriteSheet;
    export let veggiesAtlas: createjs.SpriteSheet;
    export let buttonAtlas: createjs.SpriteSheet;

    // score and lives variables
    export let score: number = 0;

    export let scene: string;

    export let curr_scene: createjs.Container;

    export let wrong_ones: Array<objects.WrongAns> = new Array<objects.WrongAns>();

    //let menu: scenes.Menu;



    // asset manifest for images and sound
    let assetData: objects.Asset[] = [
        { id: "country_sheet", src: "../../Assets/images/countries.png" },
        { id: "veggie_sheet", src: "../../Assets/images/veggies.png" },
        { id: "buttons_sheet", src: "../../Assets/images/buttons.png" },
        { id: "background", src: "../../Assets/images/QuizBackground.jpg" },
        { id: "title", src: "../../Assets/images/Title.png" },
    ];

    /**
     * This method preloads assets for the game
     * 
     * @method preload
     * @returns {void}
     */
    function preload(): void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }


    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        let countryData = {
                        "images": [
                assets.getResult("country_sheet")
            ],
"frames": [
    [1, 1, 102, 138, 0, -6, -4],
    [105, 1, 102, 139, 0, -7, -2],
    [209, 1, 103, 139, 0, -12, -9],
    [314, 1, 103, 139, 0, -17, -9],
    [1, 141, 102, 139, 0, -6, -3],
    [105, 142, 102, 139, 0, -6, -4],
    [209, 142, 102, 139, 0, -6, -2],
    [313, 142, 102, 139, 0, -5, -4],
    [1, 282, 102, 139, 0, -14, -9],
    [105, 283, 102, 139, 0, -5, -4],
    [209, 283, 102, 139, 0, -6, -3],
    [313, 283, 102, 139, 0, -6, -3],
    [1, 423, 102, 139, 0, -5, -4],
    [105, 424, 102, 139, 0, -5, -3],
    [209, 424, 103, 139, 0, -16, -10],
    [314, 424, 102, 139, 0, -5, -4],
    [1, 564, 102, 139, 0, -7, -3],
    [105, 565, 102, 139, 0, -6, -2],
    [209, 565, 102, 139, 0, -12, -7],
    [313, 565, 102, 139, 0, -6, -3],
    [1, 705, 102, 139, 0, -7, -2],
    [105, 706, 102, 139, 0, -17, -9],
    [209, 706, 103, 139, 0, -15, -9],
    [314, 706, 102, 139, 0, -15, -9],
    [1, 846, 102, 139, 0, -18, -9],
    [105, 847, 103, 139, 0, -11, -8],
    [210, 847, 103, 139, 0, -16, -11],
    [315, 847, 102, 139, 0, -7, -2],
    [1, 987, 102, 139, 0, -6, -3],
    [105, 988, 102, 139, 0, -7, -3],
    [209, 988, 102, 139, 0, -5, -5],
    [313, 988, 102, 139, 0, -15, -10],
    [1, 1128, 102, 139, 0, -15, -9],
    [105, 1129, 102, 140, 0, -18, -10],
    [209, 1129, 102, 140, 0, -13, -8],
    [313, 1129, 102, 140, 0, -13, -8],
    [1, 1269, 102, 140, 0, -16, -8],
    [105, 1271, 103, 140, 0, -14, -8],
    [210, 1271, 102, 140, 0, -16, -9],
    [314, 1271, 102, 140, 0, -18, -9],
    [1, 1411, 102, 140, 0, -18, -9],
    [105, 1413, 102, 140, 0, -7, -2],
    [209, 1413, 103, 140, 0, -15, -9],
    [314, 1413, 102, 140, 0, -6, -2],
    [1, 1553, 102, 140, 0, -15, -5],
    [105, 1555, 103, 140, 0, -14, -5],
    [210, 1555, 102, 140, 0, -14, -8],
    [314, 1555, 103, 140, 0, -14, -9],
    [1, 1695, 102, 140, 0, -15, -9],
    [105, 1697, 102, 140, 0, -16, -9],
    [209, 1697, 102, 140, 0, -15, -7],
    [313, 1697, 102, 140, 0, -14, -5]
],

"animations": {
    "Spain": { "frames": [0] },
    "Argentina": { "frames": [1] },
    "Aruba": { "frames": [2] },
    "Belgium": { "frames": [3] },
    "Brazil": { "frames": [4] },
    "Canada": { "frames": [5] },
    "Chile": { "frames": [6] },
    "China": { "frames": [7] },
    "Colombia": { "frames": [8] },
    "Congo": { "frames": [9] },
    "Egypt": { "frames": [10] },
    "France": { "frames": [11] },
    "Germany": { "frames": [12] },
    "GreatBritain": { "frames": [13] },
    "Greece": { "frames": [14] },
    "India": { "frames": [15] },
    "Indonesia": { "frames": [16] },
    "Japan": { "frames": [17] },
    "Kazakhstan": { "frames": [18] },
    "Mexico": { "frames": [19] },
    "Mongolia": { "frames": [20] },
    "Morocco": { "frames": [21] },
    "NewZealand": { "frames": [22] },
    "Nicaragua": { "frames": [23] },
    "Paruguay": { "frames": [24] },
    "Pakistan": { "frames": [25] },
    "Philippines": { "frames": [26] },
    "Portugal": { "frames": [27] },
    "Russia": { "frames": [28] },
    "Turkey": { "frames": [29] },
    "USA": { "frames": [30] },
    "Uganda": { "frames": [31] },
    "Ukraine": { "frames": [32] },
    "Australia": { "frames": [33] },
    "Austria": { "frames": [34] },
    "CzechRepublic": { "frames": [35] },
    "England": { "frames": [36] },
    "Denmark": { "frames": [37] },
    "Finland": { "frames": [38] },
    "Haiti": { "frames": [39] },
    "Hungary": { "frames": [40] },
    "Iran": { "frames": [41] },
    "Ireland": { "frames": [42] },
    "Kenya": { "frames": [43] },
    "Netherlands": { "frames": [44] },
    "Madagascar": { "frames": [45] },
    "Peru": { "frames": [46] },
    "Poland": { "frames": [47] },
    "SaudiArabia": { "frames": [48] },
    "SouthAfrica": { "frames": [49] },
    "Switzerland": { "frames": [50] },
    "Venezuela": { "frames": [51] }
}
};

 let veggieData = {
                        "images": [
                assets.getResult("veggie_sheet")
            ],
"frames": [
    [1, 1, 524, 310, 0, -20, -53],
    [527, 1, 530, 312, 0, -22, -74],
    [1059, 1, 460, 321, 0, -43, -37],
    [1521, 1, 450, 364, 0, -36, -29],
    [1, 315, 561, 337, 0, -8, -58],
    [564, 324, 578, 352, 0, -4, -37],
    [1144, 324, 302, 377, 0, -138, -18],
    [1448, 367, 582, 354, 0, 0, -31],
    [1, 654, 549, 359, 0, -15, -18],
    [552, 678, 563, 374, 0, -8, -21],
    [1117, 723, 413, 375, 0, -118, -12],
    [1532, 723, 380, 378, 0, -59, -17],
    [1, 1015, 495, 386, 0, -56, -9],
    [498, 1054, 572, 377, 0, 0, -18],
    [1072, 1100, 455, 388, 0, -111, -7],
    [1529, 1103, 492, 389, 0, -34, -5],
    [1, 1403, 460, 394, 0, -61, -1],
    [463, 1433, 582, 387, 0, 0, -8],
    [1047, 1494, 519, 392, 0, -34, -3],
    [1, 1822, 580, 395, 0, 0, 0],
    [583, 1888, 531, 395, 0, -8, 0],
    [1116, 1888, 519, 395, 0, -26, 0]
],

"animations": {
    "Pepper": { "frames": [0] },
    "Cucumber": { "frames": [1] },
    "Apples": { "frames": [2] },
    "Potatos": { "frames": [3] },
    "Beets": { "frames": [4] },
    "Courgette": { "frames": [5] },
    "Artichoke": { "frames": [6] },
    "Figs": { "frames": [7] },
    "Garlic": { "frames": [8] },
    "Peas": { "frames": [9] },
    "Lettuce": { "frames": [10] },
    "Eggplant": { "frames": [11] },
    "Rucola": { "frames": [12] },
    "Beans": { "frames": [13] },
    "Tomatos": { "frames": [14] },
    "Plumbs": { "frames": [15] },
    "Pumpkin": { "frames": [16] },
    "Parsley": { "frames": [17] },
    "Pears": { "frames": [18] },
    "Basil": { "frames": [19] },
    "Chard": { "frames": [20] },
    "Rapini": { "frames": [21] }
}
};

 let buttonData = {
    "images": [
               assets.getResult("buttons_sheet")
            ],"frames": [
    [1, 1, 218, 218, 0, -15, -13],
    [1, 221, 198, 80, 0, 0, -12],
    [1, 303, 198, 80, 0, 0, -12],
    [1, 385, 197, 80, 0, -8, -11],
    [1, 467, 197, 80, 0, -8, -11]
],

"animations": {
    "start": { "frames": [0] },
    "Reset": { "frames": [1,2] },
    "Menu": { "frames": [3,4] },
}
};
    
        countryAtlas = new createjs.SpriteSheet(countryData);
        veggiesAtlas = new createjs.SpriteSheet(veggieData);
        buttonAtlas = new createjs.SpriteSheet(buttonData);
        
        // setup the default scene
        scene = config.Scene_questions[0];
        changeScene();
    }




    /**
     * This is the main game loop
     * 
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event: createjs.Event): void {

        stage.update(); // refreshes the stage
    }

    export function transition(stoog: createjs.Container) {
        if(curr_scene){
        createjs.Tween.get(curr_scene).to({ alpha: 0 }, 1000);
                }
        createjs.Tween.get(stoog).to({ alpha: 1 }, 2000);
        stage.addChild(stoog);

        curr_scene = stoog;

    }

    export function reset() {
        wrong_ones = [];
        score = 0;
    }

    export function changeScene(): void {

        //Launch Various Scenes
        switch (scene) {
            case config.Scene_questions[0]:
            new question_scenes.MenuScene();
            break;
            // Show the MENU Scene
            case config.Scene_questions[1]:
                new question_scenes.Question_1();
                break;
            // Show the PLAY Scene
            case config.Scene_questions[2]:
                transition(new question_scenes.Question_2());
                break;
            // Show the GAME OVER Scene
            case config.Scene_questions[5]:
                new question_scenes.ResultScene();
                break;
        }
    }



    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++