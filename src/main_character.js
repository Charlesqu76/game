import Character from "./character";

export default class MainCharacter extends Character {
  constructor(props) {
    super(props);
  }
  draw = () => {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.stroke();
  };
}
