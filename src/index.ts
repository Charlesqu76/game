import { Application, Text } from "pixi.js";
import MainCharacter from "./MainCharacter";
import Monster from "./Monster";
import { D } from "./renderData";

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

  start = async () => {
    this.mainCharacter = new MainCharacter({
      app: this,
      x: this.app.screen.width / 2,
      y: this.app.screen.height / 2,
    });

    await this.mainCharacter.init();
    const d = new D();
    d.create(this);
    d.render();

    this.mainCharacter.autoShoot();

    const text = new Text({
      text: "hello",
      style: {
        fontFamily: "short-stack",
      },
    });
    this.app.stage.addChild(text);

    // const monster = new Monster({
    //   app: this,
    //   x: Math.random() * 100 * 5,
    //   y: Math.random() * 100 * 5,
    // });
    // this.app.stage.addChild(monster.item);
    // monster.moveToTarget(this.mainCharacter);
    // this.monsterList.push(monster);

    this.app.ticker.add(() => {
      text.text = this.monsterList.length;
    });

    // setInterval(() => {
    //   const monster = new Monster({
    //     app: this,
    //     x: Math.random() * 100 * 5,
    //     y: Math.random() * 100 * 5,
    //   });
    //   this.app.stage.addChild(monster.item);
    //   monster.moveToTarget(this.mainCharacter);
    //   this.monsterList.push(monster);
    // }, 500);
  };
}

export { App };

(async () => {
  const app = new App();
  await app.init();
  app.start();
})();
