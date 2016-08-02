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

    // score and lives variables
    export let score: number = 0;

    export let scene: string;

    export let curr_scene: createjs.Container;

    export let wrong_ones: Array<String> = new Array<String>();

    //let menu: scenes.Menu;



    // asset manifest for images and sound
    let assetData: objects.Asset[] = [
        { id: "Start_the_Quizz", src: "../../Assets/images/start.png" },
        { id: "menu_back", src: "../../Assets/images/menu_back.jpg" },
        { id: "garlic", src: "../../Assets/images/garlic.png" },
        { id: "barbabietola", src: "../../Assets/images/barbabietola.png" },
        { id: "q_1_back", src: "../../Assets/images/q_1_back.jpg" },
        { id: "Canada", src: "../../Assets/images/Canada.png" },
        { id: "USA", src: "../../Assets/images/USA.png" },
        { id: "China", src: "../../Assets/images/China.png" },
        { id: "Turkey", src: "../../Assets/images/turkey.png" },
        { id: "Germany", src: "../../Assets/images/germany.png" },
        { id: "France", src: "../../Assets/images/france.png" },
        { id: "Congo", src: "../../Assets/images/congo.png" },
        { id: "India", src: "../../Assets/images/India.png" },
        { id: "reset_btn", src: "../../Assets/images/reset_btn.png" },
        { id: "menu_btn", src: "../../Assets/images/menu.png" },
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