import { Graphics } from "pixi.js";
import Character from "./Character";
import { Controller } from "./controller";
import Bullet from "./Bullet";
import { throttle } from "./util/throttle";

export default class MainCharacter extends Character {
  monsterList: Character[];
  s: () => void;
  constructor(props) {
    super(props);
  }
  init = async () => {
    this.item = await this.getItem();
    this.app.app.stage.addChild(this.item);
    this.speed = 8;
    const controller = new Controller();
    this.item.x = this.x;
    this.item.y = this.y;
    const step = this.speed;

    this.app.app.ticker.add(() => {
      const { width, height } = this.app.app.screen;
      const { keys } = controller;
      if (keys.up.pressed) {
        if (this.item.y - step <= 0) return;
        this.item.y -= step;
      }
      if (keys.down.pressed) {
        if (this.item.y + step + this.item.height >= height) return;
        this.item.y += step;
      }
      if (keys.left.pressed) {
        if (this.item.x - step <= 0) return;
        this.item.x -= step;
      }
      if (keys.right.pressed) {
        if (this.item.x + step + this.item.width >= width) return;
        this.item.x += step;
      }
    });
  };

  getItem = () => {
    const texture = new Graphics().rect(0, 0, 50, 50).fill(0x002200);
    return texture;
  };

  shoot = () => {
    this.s = throttle(() => {
      const m = this.app.monsterList.sort(
        (a, b) => a.targetDistance - b.targetDistance
      )[0];

      if (!m) return;
      const bullet = new Bullet({
        app: this.app,
        x: this.item.x,
        y: this.item.y,
        speed: 10,
        damage: 200,
      });
      bullet.start(m);
    }, 300);
  };

  autoShoot = () => {
    this.shoot();
    this.app.app.ticker.add(() => {
      this.s();
    });
  };
}
