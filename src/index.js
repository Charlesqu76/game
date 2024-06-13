import Monster from "./monster";
import MainCharacter from "./main_character";

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
    });
  };

  const step = 5;
  document.addEventListener("keypress", (e) => {
    const { key } = e;
    switch (key) {
      case "a":
        mainCharater.setCoordinate(mainCharater.x - step, mainCharater.y);
        break;
      case "d":
        mainCharater.setCoordinate(mainCharater.x + step, mainCharater.y);
        break;
      case "w":
        mainCharater.setCoordinate(mainCharater.x, mainCharater.y - step);
        break;
      case "s":
        mainCharater.setCoordinate(mainCharater.x, mainCharater.y + step);
        break;
      default:
        break;
    }
    updateCanvas();
  });

  mainCharater.setCoordinate(20, 20);
  mainCharater.draw();

  for (let i = 0; i < 10; i++) {
    const i = new Monster({ x: 0, y: 0, ctx, target: mainCharater });
    i.setCoordinate(Math.random() * 100, Math.random() * 100);
    items.push(i);
  }

  setInterval(() => {
    items.forEach((item) => {
      if (item.role === "monster") {
        item.trackTarget();
      }
    });
    updateCanvas();
  }, 100);
};

init();
