export default class Character {
  x = 0;
  y = 0;
  ctx = null;
  speed = 0.5;

  constructor(props) {
    const { x, y, ctx } = props;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
  }
  setCoordinate = (x, y) => {
    this.x = x;
    this.y = y;
  };

  setSpeed = (speed) => {
    this.speed = speed;
  };

  draw = () => {
    throw Error("子类实现");
  };
}
