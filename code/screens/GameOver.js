import { GameScreen } from "../environment/GameScreen.js";
import { SpriteManager } from "../graphics/SpriteManager.js";
import { Rectangle } from "../math/Rectangle.js";
export class GameOver {
    constructor() {
        this.img = SpriteManager.instance.get("gameOver");
        // Keeps the ratio of the image.
        const width = 610;
        const height = 128;
        const screenWidth = GameScreen.size().width;
        const screenHeight = GameScreen.size().height;
        this.bounds = new Rectangle((screenWidth - width) / 2, (screenHeight - height) / 2, width, height);
    }
    render(gfx) {
        gfx.drawImageInBounds(this.img, this.bounds);
    }
}
