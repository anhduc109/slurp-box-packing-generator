import Box from "./Box";

export default class Packer {
  boxes = [];
  coffeeBags = [];

  addBox(box) {
    this.boxes.push(box);
    return box;
  }

  addBag(item, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.coffeeBags.push(item);
    }
  }

  sort() {
    this.coffeeBags.sort((a, b) => {
      return b.getVolume() - a.getVolume();
    });
  }

  // Logic begins
  pack() {
    if (this.coffeeBags.length > 0) {
      // Sort the coffeBags that user gave from biggest volume to smallest
      this.sort();

      //Add a new 60,60,60 Box for putting coffee bags into
      let newBox = this.addBox(new Box());

      // Add the first coffee bag to the box
      newBox.itemsInBox.push({ ...this.coffeeBags[0] });

      // xTracking: Tracking the position of width in the box
      // yTracking: Tracking the position of height in the box
      // zTracking: Tracking the position of depth in the box
      let xTracking = 0;
      let yTracking = 0;
      let zTracking = 0;

      // A for loop to put coffeeBags into the newly created Box
      // excluding the first item since it has been added
      for (let i = 1; i < this.coffeeBags.length; i++) {
        // Placing current bag into the box
        let currentBag = { ...this.coffeeBags[i] };
        // let currentBag = this.coffeeBags[i];

        // prevBag position x + with currentBag width
        xTracking += currentBag.width;

        // New position of the currentBag based on prevBag
        currentBag.position = {
          x: xTracking,
          y: yTracking,
          z: zTracking
        };

        // Check the currentBag width if it exceed the box's width
        // If yes, go to the next line of height
        if (currentBag.position.x > newBox.width - currentBag.width) {
          yTracking += currentBag.height;
          xTracking = 0;

          currentBag.position.x = xTracking;
          currentBag.position.y = yTracking;
        }

        // Check the currentBag height if it exceed the box's height
        // If yes, go to the next line of depth
        if (currentBag.position.y > newBox.height - currentBag.height) {
          zTracking += currentBag.depth;
          yTracking = 0;
          xTracking = 0;

          currentBag.position.x = xTracking;
          currentBag.position.y = yTracking;
          currentBag.position.z = zTracking;
        }

        // Check the currentBag depth position if it exceed the box's depth
        // If yes, the box is full. Break the for loop
        if (currentBag.position.z > newBox.depth - currentBag.depth) {
          // Remove all the fitted items in user's coffeeBags array
          this.coffeeBags.splice(0, i);
          this.checkExistingItems();
          break;
        }

        // Put the currentBag into the Box if it it runs through all of the checking
        newBox.itemsInBox.push(currentBag);
      }
    }
  }

  checkExistingItems() {
    // Check if there are still unfitted items inside user's coffeeBags array
    // If yes, run the pack() method again with a new box
    if (this.coffeeBags.length > 0) {
      this.pack();
    }
  }

  numberOfBoxUsed() {
    return this.boxes.length;
  }

  report() {
    console.clear();
    console.log("/////////////////////////////////////////////////////////");
    console.log("//////////////////////Report starts//////////////////////");
    console.log("/////////////////////////////////////////////////////////");
    console.log("Number of Box needed:", this.numberOfBoxUsed());
    console.log("Here is the list of all boxes:");
    for (let i = 0; i < this.boxes.length; i++) {
      console.log(
        "List of placed Coffee Bags in Box number",
        i + 1,
        "with detailed starting position"
      );
      console.log(this.boxes[i].itemsInBox);
    }
    console.log("/////////////////////////////////////////////////////////");
    console.log("///////////////////////Report ends///////////////////////");
    console.log("/////////////////////////////////////////////////////////");
  }
}
