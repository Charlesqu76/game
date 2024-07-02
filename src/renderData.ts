import { App } from ".";
import { Text } from "pixi.js";

const l = ["blood", "speed"];

class D {
  app: App;
  textList = [];
  create = (app: App) => {
    this.app = app;
  };

  render = () => {
    l.forEach((v, i) => {
      const text = new Text({
        text: `${v}: ${this.app.mainCharacter[v]}`,
        style: {
          fontSize: 20,
        },
      });
      text.x = this.app.app.screen.width - 300;
      text.y = i * 30 + 20;
      this.app.app.stage.addChild(text);
    });
  };
}

export { D };
