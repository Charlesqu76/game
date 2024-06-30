import { Graphics } from "pixi.js";
import Character from "./Character";
import { isCollison } from "./util/collision";

export default class Monster extends Character {
  item = null;
  constructor(props) {
    super(props);
    this.init();
  }
  init = async () => {
    this.item = this.getItem();
    this.item.x = this.x;
    this.item.yd = this.y;
    this.app.stage.addChild(this.item);
  };

  getItem = (): Graphics => {
    const texture = new Graphics().rect(0, 0, 50, 50).fill(0xff0000);
    return texture;
  };
}
