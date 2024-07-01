import { Application } from "pixi.js";
import MainCharacter from "./MainCharacter";
import Monster from "./Monster";

class App {
  app: Application;
  FPX = 60;
  mainCharacter: MainCharacter;
  monsterList = [] as Monster[];

  init = async () => {
    this.app = new Application();
    await this.app.init({ background: "#1099bb", resizeTo: window });
    document.body.appendChild(this.app.canvas);
    this.app.ticker.maxFPS = this.FPX;
    this.app.ticker.minFPS = this.FPX;
  };

  start = () => {
    this.mainCharacter = new MainCharacter({
      app: this.app,
      x: 500,
      y: 500,
    });

    console.log(this.mainCharacter);

    for (let i = 0; i <= 0; i++) {
      const monster = new Monster({
        app: this.app,
        x: Math.random() * 100 * 5,
        y: Math.random() * 100 * 5,
      });

      // monster.moveToTarget(mainCharacter);
      // monster.isCollison(mainCharacter);
      this.monsterList.push(monster);
    }
  };
}

(async () => {
  const app = new App();
  await app.init();
  app.start();
})();
