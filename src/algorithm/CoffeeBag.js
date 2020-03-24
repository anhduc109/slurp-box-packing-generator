export const RotationType_WHD = 0;
export const RotationType_HWD = 1;
export const RotationType_HDW = 2;
export const RotationType_DHW = 3;
export const RotationType_DWH = 4;
export const RotationType_WDH = 5;

export default class CoffeeBag {
  width = 0;
  height = 0;
  depth = 0;
  position = {
    x: 0,
    y: 0,
    z: 0
  };

  constructor(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }

  getVolume() {
    return this.width * this.height * this.depth;
  }
}
