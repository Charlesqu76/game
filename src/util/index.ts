import { Graphics } from "pixi.js";

const distanceBetweenPoints = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const moveToTarget = (item: Graphics, target: Graphics, speed: number) => {
  let angle = Math.atan2(target.y - item.y, target.x - item.x);
  item.x += Math.cos(angle) * speed;
  item.y += Math.sin(angle) * speed;
  return distanceBetweenPoints(item.x, item.y, target.x, target.y);
};

const moveToFixTarget = (
  item: Graphics,
  target: { x: number; y: number },
  speed: number
) => {
  let angle = Math.atan2(target.y - item.y, target.x - item.x);
  item.x += Math.cos(angle) * speed;
  item.y += Math.sin(angle) * speed;
};

export { moveToTarget, moveToFixTarget };
