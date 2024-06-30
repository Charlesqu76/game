import { Graphics } from "pixi.js";
import Character from "./Character";
import { isCollison } from "./util/collision";
import MainCharacter from "./MainCharacter";

export default class Bullet extends Character {
  character: MainCharacter;
  constructor(props) {
    super(props);
    this.item = this.getItem();
    this.item.x = props.x;
    this.item.y = props.y;
    this.speed = 10;
    this.character = props.that;
  }

  getItem = (): Graphics => {
    return new Graphics().rect(0, 0, 10, 20).fill(0x002200);
  };

  isCollison = (target: Character) => {
    this.app.ticker.add(() => {
      if (isCollison({ obj: this.item, target: target.item })) {
        this.app.stage.removeChild(this.item);
        this.app.stage.removeChild(target.item);
        this.character.monsterList.splice(0, 1);
      }
    });
  };
}
