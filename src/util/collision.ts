import { Graphics } from "pixi.js";

type Item = Graphics;

export const isCollison = ({ obj, target }: { obj: Item; target: Item }) => {
  const bounds1 = obj.getBounds();
  const bounds2 = target.getBounds();
  return (
    bounds1.x < bounds2.x + bounds2.width &&
    bounds1.x + bounds1.width > bounds2.x &&
    bounds1.y < bounds2.y + bounds2.height &&
    bounds1.y + bounds1.height > bounds2.y
  );
};
