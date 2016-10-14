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

    export let counter: Array<String>; //make it a collection

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
    [1, 1, 178, 133, 0, -3, -6],
    [181, 1, 182, 133, 0, -3, -6],
    [365, 1, 102, 138, 0, -6, -4],
    [469, 1, 102, 139, 0, -7, -2],
    [573, 1, 103, 139, 0, -12, -9],
    [678, 1, 103, 139, 0, -17, -9],
    [783, 1, 102, 139, 0, -6, -3],
    [887, 1, 102, 139, 0, -6, -4],
    [1, 136, 102, 139, 0, -6, -2],
    [105, 136, 102, 139, 0, -5, -4],
    [209, 136, 102, 139, 0, -14, -9],
    [313, 141, 102, 139, 0, -5, -4],
    [417, 142, 102, 139, 0, -6, -3],
    [521, 142, 102, 139, 0, -16, -3],
    [625, 142, 181, 139, 0, -3, -6],
    [808, 142, 179, 139, 0, -3, 0],
    [1, 277, 102, 139, 0, -6, -3],
    [105, 277, 102, 139, 0, -5, -4],
    [209, 277, 102, 139, 0, -5, -3],
    [313, 282, 102, 139, 0, -5, -4],
    [417, 283, 103, 139, 0, -16, -10],
    [522, 283, 102, 139, 0, -7, -3],
    [626, 283, 102, 139, 0, -15, -5],
    [730, 283, 102, 139, 0, -6, -2],
    [834, 283, 102, 139, 0, -12, -7],
    [1, 418, 103, 139, 0, -16, -3],
    [106, 418, 102, 139, 0, -6, -3],
    [210, 423, 102, 139, 0, -7, -2],
    [314, 424, 102, 139, 0, -17, -9],
    [418, 424, 103, 139, 0, -15, -9],
    [523, 424, 102, 139, 0, -15, -9],
    [627, 424, 103, 139, 0, -15, -2],
    [732, 424, 103, 139, 0, -11, -8],
    [837, 424, 102, 139, 0, -18, -9],
    [1, 559, 103, 139, 0, -16, -11],
    [106, 559, 102, 139, 0, -7, -2],
    [210, 564, 102, 139, 0, -6, -3],
    [314, 565, 102, 139, 0, -15, -2],
    [418, 565, 102, 139, 0, -7, -3],
    [522, 565, 102, 139, 0, -5, -5],
    [626, 565, 102, 139, 0, -15, -10],
    [730, 565, 102, 139, 0, -15, -9],
    [834, 565, 102, 140, 0, -18, -10],
    [1, 700, 102, 140, 0, -13, -8],
    [105, 700, 102, 140, 0, -13, -8],
    [209, 705, 103, 140, 0, -14, -8],
    [314, 706, 102, 140, 0, -16, -8],
    [418, 706, 102, 140, 0, -16, -9],
    [522, 706, 102, 140, 0, -18, -9],
    [626, 706, 102, 140, 0, -18, -9],
    [730, 706, 102, 140, 0, -7, -2],
    [834, 707, 103, 140, 0, -15, -9],
    [1, 842, 102, 140, 0, -6, -2],
    [105, 842, 102, 140, 0, -15, -5],
    [209, 847, 103, 140, 0, -14, -5],
    [314, 848, 102, 140, 0, -14, -8],
    [418, 848, 103, 140, 0, -14, -9],
    [523, 848, 102, 140, 0, -15, -9],
    [627, 848, 102, 140, 0, -16, -9],
    [731, 849, 102, 140, 0, -15, -7],
    [835, 849, 102, 140, 0, -14, -5]
],

"animations": {
    "Europa_Danubiana": { "frames": [0] },
    "Europa_Mediterranea": { "frames": [1] },
    "Spagna": { "frames": [2] },
    "Argentina": { "frames": [3] },
    "Aruba": { "frames": [4] },
    "Belgio": { "frames": [5] },
    "Brasile": { "frames": [6] },
    "Canada": { "frames": [7] },
    "Cile": { "frames": [8] },
    "Cina": { "frames": [9] },
    "Colombia": { "frames": [10] },
    "Congo": { "frames": [11] },
    "Egitto": { "frames": [12] },
    "Etiopia": { "frames": [13] },
    "Europa_Orientale": { "frames": [14] },
    "Europa_Settentrionale": { "frames": [15] },
    "Francia": { "frames": [16] },
    "Germania": { "frames": [17] },
    "Gran_Bretagna": { "frames": [18] },
    "India": { "frames": [19] },
    "Grecia": { "frames": [20] },
    "Indonesia": { "frames": [21] },
    "Italia": { "frames": [22] },
    "Giappone": { "frames": [23] },
    "Kazakistan": { "frames": [24] },
    "Libia": { "frames": [25] },
    "Messico": { "frames": [26] },
    "Mongolia": { "frames": [27] },
    "Marocco": { "frames": [28] },
    "Nuova_Zelanda": { "frames": [29] },
    "Nicaragua": { "frames": [30] },
    "Norvegia": { "frames": [31] },
    "Pakistan": { "frames": [32] },
    "Paraguay": { "frames": [33] },
    "Filippine": { "frames": [34] },
    "Portogallo": { "frames": [35] },
    "Russia": { "frames": [36] },
    "Slovacchia": { "frames": [37] },
    "Turchia": { "frames": [38] },
    "USA": { "frames": [39] },
    "Uganda": { "frames": [40] },
    "Ucraina": { "frames": [41] },
    "Australia": { "frames": [42] },
    "Austria": { "frames": [43] },
    "Repubblica_Ceca": { "frames": [44] },
    "Danimarca": { "frames": [45] },
    "Inghilterra": { "frames": [46] },
    "Finlandia": { "frames": [47] },
    "Haiti": { "frames": [48] },
    "Ungheria": { "frames": [49] },
    "Iran": { "frames": [50] },
    "Irlanda": { "frames": [51] },
    "Kenia": { "frames": [52] },
    "Olanda": { "frames": [53] },
    "Madagascar": { "frames": [54] },
    "Perù": { "frames": [55] },
    "Polonia": { "frames": [56] },
    "Arabia_Saudita": { "frames": [57] },
    "Sud_Africa": { "frames": [58] },
    "Svizzera": { "frames": [59] },
    "Venezuela": { "frames": [60] }
},
};

 let veggieData = {
                        "images": [
                assets.getResult("veggie_sheet")
            ],
"frames": [
    [1, 1, 580, 395, 0, 0, 0],
    [583, 1, 582, 387, 0, 0, -8],
    [1167, 1, 572, 390, 0, 0, -5],
    [1741, 1, 302, 377, 0, -138, -18],
    [583, 390, 572, 377, 0, 0, -18],
    [1, 398, 563, 374, 0, -8, -21],
    [1157, 393, 531, 395, 0, -8, 0],
    [566, 769, 582, 354, 0, 0, -31],
    [1, 774, 519, 395, 0, -26, 0],
    [1150, 790, 578, 352, 0, -4, -37],
    [522, 1125, 519, 392, 0, -34, -3],
    [1, 1171, 492, 389, 0, -34, -5],
    [1043, 1144, 549, 359, 0, -15, -18],
    [1594, 1144, 450, 364, 0, -36, -29],
    [1043, 1505, 495, 386, 0, -56, -9],
    [1540, 1510, 486, 386, 0, -57, 0],
    [495, 1519, 460, 394, 0, -61, -1],
    [957, 1893, 561, 337, 0, -8, -58],
    [1520, 1898, 455, 388, 0, -111, -7],
    [1, 1562, 413, 375, 0, -118, -12],
    [416, 1915, 530, 312, 0, -22, -74],
    [1, 1939, 380, 378, 0, -59, -17],
    [383, 2229, 524, 310, 0, -20, -53],
    [909, 2232, 460, 321, 0, -43, -37]
],

"animations": {
    "Basilico": { "frames": [0] },
    "Prezzemolo": { "frames": [1] },
    "Cipolle": { "frames": [2] },
    "Carciofo": { "frames": [3] },
    "Fagiolo": { "frames": [4] },
    "Piselli": { "frames": [5] },
    "Bietola": { "frames": [6] },
    "Fico": { "frames": [7] },
    "Rapini": { "frames": [8] },
    "Zucchina": { "frames": [9] },
    "Pero": { "frames": [10] },
    "Susino": { "frames": [11] },
    "Aglio": { "frames": [12] },
    "Patata": { "frames": [13] },
    "Rucola": { "frames": [14] },
    "Finocchio": { "frames": [15] },
    "Zucca": { "frames": [16] },
    "Barbabietola": { "frames": [17] },
    "Pomodoro": { "frames": [18] },
    "Lattuga": { "frames": [19] },
    "Cetriolo": { "frames": [20] },
    "Melanzana": { "frames": [21] },
    "Peperoncino": { "frames": [22] },
    "Melo": { "frames": [23] }
}
};

 let buttonData = {
    "images": [
               assets.getResult("buttons_sheet")
            ],"frames": [
    [1, 1, 218, 218, 0, -6, -7],
    [1, 221, 218, 218, 0, -6, -7],
    [1, 441, 198, 80, 0, 0, -12],
    [1, 523, 198, 80, 0, 0, -12],
    [1, 605, 197, 80, 0, -8, -11],
    [1, 687, 197, 80, 0, -8, -11]
],

"animations": {
    "Start": { "frames": [0, 1] },
    "Reset": { "frames": [2, 3] },
    "Menu": { "frames": [4, 5] },
},
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
               transition(new question_scenes.MenuScene());
                break;
            case config.Scene_questions[1]:
                transition(new question_scenes.Question_1());
                break;
            case config.Scene_questions[2]:
                transition(new question_scenes.Question_2());
                break;
            case config.Scene_questions[3]:
                transition(new question_scenes.Question_3());
                break;
            case config.Scene_questions[4]:
                transition(new question_scenes.Question_4());
                break;
                case config.Scene_questions[5]:
                transition(new question_scenes.Question_5());
                break;
            case config.Scene_questions[6]:
                transition(new question_scenes.Question_6());
                break;
            case config.Scene_questions[7]:
                transition(new question_scenes.Question_7());
                break;
            case config.Scene_questions[8]:
                transition(new question_scenes.Question_8());
                break;
            case config.Scene_questions[9]:
                transition(new question_scenes.Question_9());
                break;
            case config.Scene_questions[10]:
                transition(new question_scenes.Question_10());
                break;
            case config.Scene_questions[11]:
                transition(new question_scenes.Question_11());
                break;
            case config.Scene_questions[12]:
                transition(new question_scenes.Question_12());
                break;
            case config.Scene_questions[13]:
                transition(new question_scenes.Question_13());
                break;
            case config.Scene_questions[14]:
                transition(new question_scenes.Question_14());
                break;
            case config.Scene_questions[15]:
                transition(new question_scenes.Question_15());
                break;
            case config.Scene_questions[16]:
                transition(new question_scenes.Question_16());
                break;
            case config.Scene_questions[17]:
                transition(new question_scenes.Question_17());
                break;
            case config.Scene_questions[18]:
                transition(new question_scenes.Question_18());
                break;
            case config.Scene_questions[19]:
                transition(new question_scenes.Question_19());
                break;
            case config.Scene_questions[20]:
                transition(new question_scenes.Question_20());
                break;
            case config.Scene_questions[21]:
                transition(new question_scenes.Question_21());
                break;
            case config.Scene_questions[22]:
                transition(new question_scenes.Question_22());
                break;
            case config.Scene_questions[23]:
                transition(new question_scenes.Question_23());
                break;
            case config.Scene_questions[24]:
                transition(new question_scenes.Question_24());
                break;
            case config.Scene_questions[25]:
                transition(new question_scenes.ResultScene());
                break;
        }
    }

    export function randomQ(key): void {
        var newkey = Math.random() * 24 + 1;
        if ((counter.length + 1) != 11) {
            if (key != newkey) {
                var new_question = config.Scene_questions[Math.floor(Math.random() * 24) + 1];
                console.log(new_question);
                console.log(counter.indexOf(new_question));
                if (counter.indexOf(new_question) == -1) {
                    counter.push(new_question);
                    scene = new_question;
                    changeScene();
                } else {
                    randomQ(key);
                }
            } else {
                randomQ(key);
            }
        } else {
            scene = "RESULTS";
            changeScene();
        }
    }

    export function reset_q(): void {
                counter = [];
                reset();
                randomQ(Math.floor(Math.random() * 24) + 1);
                changeScene();
    }



    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++