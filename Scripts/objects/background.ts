module objects {
    /**
     * This is the Background object used in the game
     * 
     * @export
     * @class Background
     * @extends {objects.GameObject}
     */
    export class Background extends createjs.Bitmap {

        constructor(imageString: string) {
            super(core.assets.getResult(imageString));
            this.start();
        }

        private _reset():void {
            this.x = 0;
        }


        public start():void {
            this._reset();
        }
    }
}