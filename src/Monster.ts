import { Graphics } from "pixi.js";
import Character from "./Character";

export default class Monster extends Character {
  item = null;

  constructor(props) {
    super(props);
    this.init();
  }
  init = async () => {
    this.item = this.getItem();
    this.item.x = this.x;
    this.item.y = this.y;
    this.app.app.stage.addChild(this.item);
  };

  getItem = (): Graphics => {
    const texture = new Graphics().rect(0, 0, 50, 50).fill(0xff0000);
    return texture;
  };
}
