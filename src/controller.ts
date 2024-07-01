const keyMap = {
  Space: "space",
  KeyW: "up",
  ArrowUp: "up",
  KeyA: "left",
  ArrowLeft: "left",
  KeyS: "down",
  ArrowDown: "down",
  KeyD: "right",
  ArrowRight: "right",
};

export class Controller {
  keys = {
    up: { pressed: false, doubleTap: false, timestamp: 0 },
    left: { pressed: false, doubleTap: false, timestamp: 0 },
    down: { pressed: false, doubleTap: false, timestamp: 0 },
    right: { pressed: false, doubleTap: false, timestamp: 0 },
    space: { pressed: false, doubleTap: false, timestamp: 0 },
  };
  constructor() {
    window.addEventListener("keydown", (event) => this.keydownHandler(event));
    window.addEventListener("keyup", (event) => this.keyupHandler(event));
  }

  keydownHandler = (event) => {
    const key = keyMap[event.code];

    if (!key) return;

    const now = Date.now();

    this.keys[key].doubleTap =
      this.keys[key].doubleTap || now - this.keys[key].timestamp < 300;

    this.keys[key].pressed = true;
  };

  keyupHandler = (event) => {
    const key = keyMap[event.code];
    if (!key) return;
    const now = Date.now();
    this.keys[key].pressed = false;
    if (this.keys[key].doubleTap) this.keys[key].doubleTap = false;
    else this.keys[key].timestamp = now;
  };
}
