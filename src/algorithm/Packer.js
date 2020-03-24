import Box from "./Box";
import CoffeeBag from "./CoffeeBag";

export default class Packer {
  boxes = [];
  coffeeBags = [];
  // coffeeBags400g = [];
  // coffeeBags1000g = [];

  addBox(box) {
    this.boxes.push(box);
    return box;
  }

  addBag(item, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.coffeeBags.push(item);
    }
  }

  // addBag400g(item, quantity) {
  //   for (let i = 0; i < quantity; i++) {
  //     this.coffeeBags400g.push(item);
  //   }
  // }

  // addBag1000g(item, quantity) {
  //   for (let i = 0; i < quantity; i++) {
  //     this.coffeeBags1000g.push(item);
  //   }
  // }

  // sort() {
  //   this.coffeeBags.sort((a, b) => {
  //     if (a > b) {
  //       return 1;
  //     } else return -1;
  //   });
  // }

  pack() {
    // this.sort();
    let newBox = this.addBox(new Box());

    newBox.itemsInBox.push(this.coffeeBags[0]);
    // let rowY = 1;
    // let rowZ = 1;
    let y = 0;
    let z = 0;

    for (let i = 1; i < this.coffeeBags.length; i++) {
      let prevBag = { ...newBox.itemsInBox[i - 1] };

      let currentBag = { ...this.coffeeBags[i] };

      currentBag.position = {
        x: prevBag.position.x + currentBag.width,
        y: prevBag.position.y + currentBag.height,
        z: prevBag.position.z + currentBag.depth
      };

      if (currentBag.position.x > newBox.width - currentBag.width) {
        y += currentBag.height;
        // y = currentBag.height * rowY;
        // rowY++;
        currentBag.position.x = 0;
      }

      currentBag.position.y = y;

      if (currentBag.position.y > newBox.height - currentBag.height) {
        z += currentBag.depth;
        // z = currentBag.depth * rowZ;
        // rowZ++;
        // rowY = 1;
        y = 0;
        currentBag.position.x = 0;
        currentBag.position.y = 0;
      }

      currentBag.position.z = z;

      if (currentBag.position.z > newBox.depth - currentBag.depth) {
        this.coffeeBags.splice(0, i);
        this.checkExistingItems();
        break;
      }

      newBox.itemsInBox.push(currentBag);
    }
  }

  checkExistingItems() {
    if (this.coffeeBags.length > 0) {
      this.pack();
    } else return null;
  }

  numberOfBoxUsed() {
    return this.boxes.length;
  }
}
