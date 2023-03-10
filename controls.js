class Controls {
  constructor(type) {
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;

    switch (type) {
      case CONTROL_TYPES.KEYS:
        this.#addKeyboardListeners();
        break;
      case CONTROL_TYPES.DUMMY:
        this.forward = true;
        break;
    }
  }

  #addKeyboardListeners() {
    document.addEventListener('keydown', (event) => {
      switch(event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.backward = true;
          break;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch(event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.backward = false;
          break;
      }
    });
  }
}
