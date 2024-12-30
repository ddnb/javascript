export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class ProgramWindow {
  constructor() {
    this.size = new Size();
    this.position = new Position();
    this.screenSize = new Size(800, 600);
  }

  resize(newSize) {
    const width = Math.max(1, Math.min(newSize.width, this.screenSize.width - this.position.x));
    const height = Math.max(1, Math.min(newSize.height, this.screenSize.height - this.position.y));
    this.size.resize(width, height);
  }

  move(newPosition) {
    const x = Math.max(0, Math.min(newPosition.x, this.screenSize.width - this.size.width));
    const y = Math.max(0, Math.min(newPosition.y, this.screenSize.height - this.size.height));
    this.position.move(x, y);
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}