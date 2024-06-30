import { Application, Sprite, Assets } from "pixi.js";
import MainCharacter from "./MainCharacter";
import Monster from "./Monster";

const FPX = 60;
const i = async () => {
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });
  document.body.appendChild(app.canvas);
  app.ticker.maxFPS = FPX;
  app.ticker.minFPS = FPX;

  const monsterList = [];

  const mainCharacter = new MainCharacter({
    app,
    x: 500,
    y: 500,
    monsterList,
  });

  for (let i = 0; i <= 5; i++) {
    const monster = new Monster({
      app,
      x: Math.random() * 100 * 5,
      y: Math.random() * 100 * 5,
    });

    // monster.moveToTarget(mainCharacter);
    // monster.isCollison(mainCharacter);
    monsterList.push(monster);
  }
};

i();
