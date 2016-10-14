var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This class represents a generic Sprite used in the game
     *
     * @export
     * @class Vegetable
     * @extends {createjs.Bitmap}
     */
    var SpriteObject = (function (_super) {
        __extends(SpriteObject, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Vegetable sprite
         *
         * @constructor
         * @param {string} imageString
         */
        function SpriteObject(atlas, imageString, x, y) {
            _super.call(this, atlas, imageString);
            this._dx = x;
            this._dy = y;
            this._initialize(imageString);
        }
        Object.defineProperty(SpriteObject.prototype, "width", {
            // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
            get: function () {
                return this._width;
            },
            set: function (newWidth) {
                this._width = newWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteObject.prototype, "halfWidth", {
            get: function () {
                return this._width * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteObject.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
                this._height = newHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteObject.prototype, "halfHeight", {
            get: function () {
                return this._height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        SpriteObject.prototype._initialize = function (imageString) {
            this.name = imageString;
            this.width = this.getBounds().width * 0.5;
            this.height = this.getBounds().height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = this._dx;
            this.y = this._dy;
        };
        return SpriteObject;
    }(createjs.Sprite));
    objects.SpriteObject = SpriteObject;
})(objects || (objects = {}));
//# sourceMappingURL=sprite_obj.js.map