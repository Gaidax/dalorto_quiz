var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_scenes;
(function (question_scenes) {
    var MenuScene = (function (_super) {
        __extends(MenuScene, _super);
        function MenuScene() {
            _super.call(this);
            this.start_btn = new objects.Button("Start_the_Quizz", 200, 200, true);
            this.background = new objects.Background("menu_back");
            core.stage.removeAllChildren();
            this.addChild(this.background);
            this.addChild(this.start_btn);
            this.start_btn.on("click", function () {
                core.scene = "Q_1";
                core.changeScene();
            });
            createjs.Tween.get(this).to({ alpha: 1 }, 2000);
            core.stage.addChild(this);
        }
        return MenuScene;
    }(createjs.Container));
    question_scenes.MenuScene = MenuScene;
})(question_scenes || (question_scenes = {}));
//# sourceMappingURL=menu.js.map