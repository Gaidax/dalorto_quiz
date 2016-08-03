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
            this.reset_button = new objects.Button("reset_btn", 800, 50, false);
            this.menu_button = new objects.Button("menu_btn", 50, 50, false);
            if (core.wrong_ones) {
                this.result_string = "This is your score: " + core.score + "\n";
                for (var wrong in core.wrong_ones) {
                    var str = core.wrong_ones[wrong];
                    this.result_string += "Wrong answer: " + str.answer;
                    this.result_string += " on question number " + str.question_num + "\n";
                    this.result_string += str.question + "\n\n";
                }
                this.results = new objects.Label(this.result_string, "20px", "Pattaya", "BLUE", 1330, 290, true);
            }
            this.alpha = 0;
            this.addChild(this.reset_button);
            this.addChild(this.menu_button);
            this.addChild(this.results);
            this.addChild(this.results.double);
            this.menu_button.on("click", function () {
                //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                core.scene = "MENU";
                core.changeScene();
            });
            this.reset_button.on("click", function () {
                //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                core.scene = "Q_1";
                core.reset();
                core.changeScene();
            });
            core.transition(this);
        }
        ResultScene.prototype.getAnswer = function (ans) {
            return ans.answer;
        };
        ResultScene.prototype.getQuestionNum = function (ques) {
            return ques.question_num;
        };
        return ResultScene;
    }(createjs.Container));
    question_scenes.ResultScene = ResultScene;
})(question_scenes || (question_scenes = {}));
//# sourceMappingURL=results.js.map