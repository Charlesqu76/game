import { Graphics } from "pixi.js";
import Character from "./Character";
import { Controller } from "./controller";
import { throttle } from "./util/throttle";
import Bullet from "./Bullet";
import { isCollison } from "./util/collision";

export default class MainCharacter extends Character {
  monsterList: Character[];
  constructor(props) {
    super(props);
    this.monsterList = props.monsterList || [];
    this.init();
  }
  init = async () => {
    this.item = await this.getItem();
    this.app.stage.addChild(this.item);
    this.speed = 8;
    const controller = new Controller();
    this.item.x = this.x;
    this.item.y = this.y;
    const step = this.speed;

    this.app.ticker.add(() => {
      const { keys } = controller;
      if (keys.up.pressed) {
        this.item.y -= step;
      }
      if (keys.down.pressed) {
        this.item.y += step;
      }
      if (keys.left.pressed) {
        this.item.x -= step;
      }
      if (keys.right.pressed) {
        this.item.x += step;
      }
    });
  };

  getItem = () => {
    const texture = new Graphics().rect(0, 0, 50, 50).fill(0x002200);
    return texture;
  };
}
