var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_scenes;
(function (question_scenes) {
    var ResultScene = (function (_super) {
        __extends(ResultScene, _super);
        function ResultScene() {
            _super.call(this);
            this.reset_button = new objects.SpriteObject(core.buttonAtlas, "Reset", 860, 50);
            this.menu_button = new objects.SpriteObject(core.buttonAtlas, "Menu", 50, 50);
            this.background = new objects.Background("background");
            this.label_cont = new createjs.Container();
            core.stage.removeAllChildren();
            disableScroll();
            var menu_btn = new createjs.ButtonHelper(this.menu_button);
            var reset_btn = new createjs.ButtonHelper(this.reset_button);
            menu_btn.overLabel = 5;
            menu_btn.outLabel = 4;
            reset_btn.overLabel = 3;
            reset_btn.outLabel = 2;
            if (core.wrong_ones) {
                this.results = new objects.Label("PUNTEGGIO: " + core.score + "/10\n", "20px", "Intubli_q", "BLACK", 512, 290, true);
                this.label_cont.addChild(this.results, this.results.double);
                for (var wrong in core.wrong_ones) {
                    var str = core.wrong_ones[wrong];
                    var que = this.label_it("Domanda: \n" + str.question, "BLACK", this.results.y + 100);
                    var ris = this.label_it("La Tua Risposta: ", "BLACK", que.y + que.getMeasuredHeight() + 20);
                    var ans = this.label_it(str.answer, "#e6005c", ris.y, ris.x + ris.getMeasuredWidth() + 20);
                    var esa = this.label_it("Risposta Esatta: ", "BLACK", ris.y + 30);
                    var rig = this.label_it(str.right_answer, "#00cc66", esa.y, esa.x + esa.getMeasuredWidth() + 20);
                    this.label_cont.addChild(que, que.double, ris, ris.double, ans, ans.double, esa, esa.double, rig, rig.double);
                    this.results = esa;
                }
                var self = this;
                document.getElementById('canvas').addEventListener("wheel", function (event) {
                    var change = self.label_cont.y - event.deltaY;
                    //var check = self.results.getMeasuredHeight();
                    //if(change <= check+160 && change >= -check+200){
                    self.label_cont.y = change;
                    //self.results.double.y = change;
                    //}
                });
                this.alpha = 0;
                this.addChild(this.background);
                this.addChild(this.reset_button);
                this.addChild(this.menu_button);
                this.addChild(this.label_cont);
                this.menu_button.on("click", function () {
                    enableScroll();
                    core.scene = "MENU";
                    core.changeScene();
                });
                this.reset_button.on("click", function () {
                    enableScroll();
                    core.reset_q();
                });
            }
        }
        ResultScene.prototype.label_it = function (str, color, y, x) {
            if (x)
                return new objects.Label(str, "20px", "Intubli_q", color, x, y, true);
            else
                return new objects.Label(str, "20px", "Intubli_q", color, this.results.x, y, true);
        };
        return ResultScene;
    }(createjs.Container));
    question_scenes.ResultScene = ResultScene;
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }
    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }
    function disableScroll() {
        if (window.addEventListener)
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    }
    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }
})(question_scenes || (question_scenes = {}));
//# sourceMappingURL=results.js.map