import { Application, Assets, Graphics, Renderer, Sprite } from "pixi.js";
import { isCollison } from "./util/collision";
import { throttle } from "./util/throttle";
import Bullet from "./Bullet";

interface IProp {
  app: Application;
  x: number;
  y: number;
  speed: number;
}

export default class Character implements IProp {
  speed = 1;
  app: Application;
  x: number;
  y: number;
  item: Graphics;
  shootSpeed = 1;
  shootFrequent = 500;
  constructor(props: IProp) {
    this.app = props.app;
    this.x = props.x;
    this.y = props.y;
  }

  getItem = (): Graphics => {
    throw Error("child ");
  };

  // static moveToTarget1 = () => {};

  moveToTarget = (item: Character) => {
    this.app.ticker.add(() => {
      let angle = Math.atan2(
        item.item.y - this.item.y,
        item.item.x - this.item.x
      );
      this.item.x += Math.cos(angle) * this.speed;
      this.item.y += Math.sin(angle) * this.speed;
    });
  };

  isCollison = (item: Character) => {
    this.app.ticker.add(() => {
      if (isCollison({ obj: this.item, target: item.item })) {
        this.app.stage.removeChild(this.item);
      }
    });
  };

  setBullet = () => {
    return new Graphics().rect(0, 0, 10, 20).fill(0x002200);
  };

  shoot = () => {
    const bullet = throttle(() => {
      const bullet = this.setBullet();
      this.app.stage.addChild(bullet);
      bullet.x = this.item.x;
      bullet.y = this.item.y;
      // bullet.moveToTarget(this.monsterList[0]);
      // bullet.isCollison(this.monsterList[0]);
    }, this.shootFrequent);

    this.app.ticker.add(() => {
      bullet();
    });
  };
}
