import { Graphics } from "pixi.js";

import { moveToTarget } from "./util";
import { App } from ".";

interface IProp {
  app: App;
  x: number;
  y: number;
  speed: number;
}

export default class Character implements IProp {
  speed = 1;
  app: App;
  x: number;
  y: number;
  item: Graphics;
  shootSpeed = 1;
  shootFrequent = 500;
  targetDistance = 0;
  blood = 100;
  constructor(props: IProp) {
    this.app = props.app;
    this.x = props.x;
    this.y = props.y;
  }

  getItem = (): Graphics => {
    throw Error("child ");
  };

  setBullet = () => {
    return new Graphics().rect(0, 0, 10, 20).fill(0x002200);
  };

  moveToTarget = (target: Character) => {
    this.app.app.ticker.add(() => {
      if (!this.item) return;
      const distance = moveToTarget(this.item, target.item, this.speed);
      this.targetDistance = distance;
    });
  };
}
