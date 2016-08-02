/// <reference path="_reference.ts"/>
/**
 * @author Vasyl Milchevskyi
 * @version 0.1 - Initial version of the quizz
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    // score and lives variables
    core.score = 0;
    core.wrong_ones = new Array();
    //let menu: scenes.Menu;
    // asset manifest for images and sound
    var assetData = [
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
    function preload() {
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        // setup the default scene
        core.scene = config.Scene_questions[0];
        changeScene();
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        core.stage.update(); // refreshes the stage
    }
    function transition(stoog) {
        if (core.curr_scene) {
            createjs.Tween.get(core.curr_scene).to({ alpha: 0 }, 1000);
        }
        createjs.Tween.get(stoog).to({ alpha: 1 }, 2000);
        core.stage.addChild(stoog);
        core.curr_scene = stoog;
    }
    core.transition = transition;
    function reset() {
        core.wrong_ones = [];
        core.score = 0;
    }
    core.reset = reset;
    function changeScene() {
        //Launch Various Scenes
        switch (core.scene) {
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
    core.changeScene = changeScene;
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map