import { Application, Assets, Graphics, Renderer, Sprite } from "pixi.js";
import { isCollison } from "./util/collision";

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
  constructor(props: IProp) {
    this.app = props.app;
    this.x = props.x;
    this.y = props.y;
  }

  getItem = (): Graphics => {
    throw Error("child ");
  };

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
}
