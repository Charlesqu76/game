import Monster from "./monster";
import MainCharacter from "./main_character";
import { Controller } from "./controller.js";
import { Application, Sprite, Assets, Graphics } from "pixi.js";

const init = () => {
  const width = 1200;
  const height = 1200;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.background = "grey";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const items = [];

  const mainCharater = new MainCharacter({ ctx, x: 0, y: 0 });

  items.push(mainCharater);

  const updateCanvas = () => {
    ctx.clearRect(0, 0, width, height);
    items.forEach((item) => {
      item.draw();
      if (item.role === "monster") {
        item.trackTarget();
      }
    });
  };

  const step = 5;

  mainCharater.setCoordinate(20, 20);
  mainCharater.draw();

  for (let i = 0; i < 10; i++) {
    const i = new Monster({ x: 0, y: 0, ctx, target: mainCharater });
    i.setCoordinate(Math.random() * 100, Math.random() * 100);
    items.push(i);
  }

  const fps = 60;
  let lastTime = 0;
  // const logic = (time) => {
  //   requestAnimationFrame(logic);
  //   if (time - lastTime < 1000 / fps) {
  //     return;
  //   }
  //   let realFPS = 1000 / (time - lastTime);
  //   console.log("real fps", realFPS);
  //   updateCanvas();
  //   lastTime = time;
  // };
  // requestAnimationFrame(logic);
};

// init();

const i = async () => {
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });
  document.body.appendChild(app.canvas);

  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");

  const square = new Sprite(texture);
  app.stage.addChild(square);
  square.anchor.set(0.5);

  const controller = new Controller();

  square.x = app.screen.width / 2;
  square.y = app.screen.height / 2;
  app.ticker.add((time) => {
    square.rotation += 0.1 * time.deltaTime;
  });

  const step = 5;
};

i();
