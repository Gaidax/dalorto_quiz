module objects {
    /**
     * This class represents a generic Sprite used in the game
     * 
     * @export
     * @class Vegetable
     * @extends {createjs.Bitmap}
     */
    export class SpriteObject extends createjs.Sprite {
         // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _width:number;
        private _height:number;
        private _name:string;
        private _dx: number;
        private _dy: number;
        public sound:createjs.AbstractSoundInstance;

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++

        get width():number {
            return this._width;
        }

        set width(newWidth:number) {
            this._width = newWidth;
        }

        get halfWidth():number {
            return this._width * 0.5;
        }

        get height():number {
            return this._height;
        }

        set height(newHeight:number) {
            this._height = newHeight;
        }

        get halfHeight():number{
            return this._height * 0.5;
        }

        get name():string {
            return this._name;
        }

        set name(newName:string) {
            this._name = newName;
        }

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Vegetable sprite
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(atlas: createjs.SpriteSheet, imageString:string, x: number, y: number) {
            super(atlas, imageString)
            this._dx = x;
            this._dy = y;          
            this._initialize(imageString);
        }
        
        private _initialize(imageString:string):void {
            this.name = imageString;
            this.width = this.getBounds().width *0.5;
            this.height = this.getBounds().height *0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = this._dx;
            this.y = this._dy;
                   
        }
    }
}