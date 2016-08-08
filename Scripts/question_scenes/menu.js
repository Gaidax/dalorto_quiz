var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_scenes;
(function (question_scenes) {
    //200,200
    var MenuScene = (function (_super) {
        __extends(MenuScene, _super);
        function MenuScene() {
            _super.call(this);
            this.start_btn = new objects.SpriteObject(core.buttonAtlas, "start", 450, 595);
            this.title = new createjs.Bitmap(core.assets.getResult("title")); // 325,595);
            this.background = new objects.Background("background");
            core.reset();
            var start_b = new createjs.ButtonHelper(this.start_btn);
            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.start_btn);
            this.title.x = 200;
            this.title.y = 165;
            this.addChild(this.title);
            this.start_btn.on("click", function () {
                //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                core.scene = "Q_1";
                core.changeScene();
            });
            core.transition(this);
        }
        return MenuScene;
    }(createjs.Container));
    question_scenes.MenuScene = MenuScene;
})(question_scenes || (question_scenes = {}));
//# sourceMappingURL=menu.js.map