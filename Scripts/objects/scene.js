/// <reference path="../core/game.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This abstract scene class is used to create individual scenes
     *
     * @export
     * @abstract
     * @class Scene
     * @extends {createjs.Container}
     */
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene(button_add1, button_add2, button_add3, button_add4, set_background, right, curent, q_text, sprite) {
            _super.call(this);
            this.reset_button = new objects.Button("reset_btn", 800, 50, false);
            this.menu_button = new objects.Button("menu_btn", 50, 50, false);
            this.choice_1 = new objects.Button(button_add1, 200, 550, false);
            this.choice_2 = new objects.Button(button_add2, 400, 550, false);
            this.choice_3 = new objects.Button(button_add3, 500, 550, false);
            this.choice_4 = new objects.Button(button_add4, 600, 550, false);
            this.btn_cont = new Array();
            this.btn_cont = [this.choice_1, this.choice_2, this.choice_3,
                this.choice_4];
            this.background = new objects.Background(set_background);
            this.question_text = new objects.Label(q_text, "50px", "Pattaya", "BLUE", 1030, 290, true);
            if (sprite) {
                this.vegie_sprite = new objects.Vegetable(sprite, 520, 320);
            }
            this.key = curent;
            this.right_ans = right;
            this.Start();
        }
        /**
         * Add game objects to the scene in this method
         *
         * @method Start
         * @returns {void}
         */
        Scene.prototype.Start = function () {
            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.choice_1);
            this.addChild(this.choice_2);
            this.addChild(this.choice_3);
            this.addChild(this.choice_4);
            this.addChild(this.menu_button);
            this.addChild(this.reset_button);
            if (this.vegie_sprite) {
                this.addChild(this.vegie_sprite);
            }
            this.addChild(this.question_text);
            this.addChild(this.question_text.double);
            this.onClick();
            core.transition(this);
        };
        Scene.prototype.onClick = function () {
            var key = this.key + 1;
            var right_key = this.right_ans;
            this.menu_button.on("click", function () {
                core.scene = "MENU";
                core.changeScene();
            });
            this.reset_button.on("click", function () {
                core.scene = "Q_1";
                core.reset();
                core.changeScene();
            });
            this.btn_cont.forEach(function (button) {
                button.on("click", function () {
                    if (this.name == right_key) {
                        core.score++;
                        console.log(core.score);
                    }
                    else {
                        core.wrong_ones.push(this.name);
                        console.log(core.wrong_ones[0]);
                    }
                    if (key <= 2) {
                        core.scene = config.Scene_questions[key];
                    }
                    else {
                        core.scene = "RESULTS";
                    }
                    core.changeScene();
                });
            });
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map