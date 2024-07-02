import { Graphics } from "pixi.js";
import Character from "./Character";
import MainCharacter from "./MainCharacter";
import { moveToFixTarget } from "./util";
import { isCollison } from "./util/collision";

export default class Bullet extends Character {
  character: MainCharacter;
  damage = 10;
  constructor(props) {
    super(props);
    this.item = this.getItem();
    this.app.app.stage.addChild(this.item);
    this.item.x = props.x;
    this.item.y = props.y;
    this.speed = props.speed || 10;
    this.damage = props.damage || 10;
  }

  getItem = (): Graphics => {
    return new Graphics().rect(0, 0, 10, 20).fill(0x002200);
  };

  start = (target: Character) => {
    const { x, y } = target.item;
    this.app.app.ticker.add(() => {
      if (!this.item) return;
      moveToFixTarget(this.item, { x, y }, this.speed);
      if (
        this.item.x > x - 10 &&
        this.item.x < x + 10 &&
        this.item.y > y - 10 &&
        this.item.y < y + 10
      ) {
        this.app.app.stage.removeChild(this.item);
        this.item = null;
      }

      if (!target.item || !this.item) return;

      if (isCollison({ obj: this.item, target: target.item })) {
        target.blood -= this.damage;
        if (target.blood <= 0) {
          this.app.app.stage.removeChild(target.item);
          target.item = null;
        }
        this.app.app.stage.removeChild(this.item);
        this.item = null;
        this.app.monsterList = this.app.monsterList.filter((v) => v.item);
      }
    });
  };
}
