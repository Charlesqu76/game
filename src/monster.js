import Character from "./character";

export default class Monster extends Character {
  role = "monster";
  target;
  constructor(props) {
    super(props);
    this.target = props.target;
  }

  trackTarget = () => {
    const { x: targetX, y: targetY } = this.target;
    this.x = this.x > targetX ? this.x - 1 : this.x + 1;
    this.y = this.y > targetY ? this.y - 1 : this.y + 1;
  };

  draw = () => {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.stroke();
  };
}
