var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Background object used in the game
     *
     * @export
     * @class Background
     * @extends {objects.GameObject}
     */
    var Background = (function (_super) {
        __extends(Background, _super);
        function Background(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Background.prototype._reset = function () {
            this.x = 0;
        };
        Background.prototype.start = function () {
            this._reset();
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map