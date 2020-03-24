import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

import BoxPacking from "./algorithm/index";

function App() {
  const { Box, CoffeeBag, Packer } = BoxPacking;

  const [quantity200g, setQuantity200g] = useState(0);
  const [quantity400g, setQuantity400g] = useState(0);
  const [quantity1000g, setQuantity1000g] = useState(0);

  const handleQuantityInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    let value = 0;
    if (evt.target.value < "0") {
      value = 0;
    }
    if (evt.target.value > "1000") {
      value = 1000;
    }
    setQuantity200g(value);
    // if (size === 200) {
    //   setQuantity200g(value);
    // }
    // if (size === 400) {
    //   setQuantity400g(value);
    // }
    // if (size === 1000) {
    //   setQuantity1000g(value);
    // }
  };

  // let packer = new Packer();

  // for (let i = 1; i <= 1000; i++) {
  //   packer.addBin(
  //     new Bin("Le petite box", 60, 60, 60, 100000000000000000000000000000000)
  //   );
  // }

  // for (let i = 1; i <= 10; i++) {
  //   packer.addItem(new Item("Item " + i, 16 + i, 23, 2, 200));
  // }

  // // for (let i = 1; i <= 3; i++) {
  // //   packer.addItem(new Item("Item 2", 22, 26, 2, 400));
  // // }

  // // for (let i = 1; i <= 21; i++) {
  // //   packer.addItem(new Item("Item 3", 14, 26, 10, 1000));
  // // }

  // // pack items into bin1
  // // packer.pack();

  // packer.pack();
  // // item1, item2, item3

  // // while (packer.unfitItems.length > 0) {
  // //   let count = 2;
  // //   packer.addBin(
  // //     new Bin(count.toString(), 60, 60, 60, 100000000000000000000000000000000)
  // //   );
  // //   packer.pack();
  // // }

  // let count = packer.bins.filter((bin: any) => bin.items.length > 0);
  // console.log(count.length);

  console.log("My packing algorithm");

  let packer = new Packer();

  let bagsOf200g = new CoffeeBag(16, 23, 2);
  let bagsOf400g = new CoffeeBag(22, 26, 2);
  let bagsOf1000g = new CoffeeBag(14, 26, 10);

  // packer.addBox(new Box());

  packer.addBag(bagsOf200g, 20);
  packer.addBag(bagsOf400g, 40);
  packer.addBag(bagsOf1000g, 30);

  packer.pack();
  console.log(packer.boxes);
  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="app-content-wrapper">
        <h1>Box Packing Generator</h1>
        <p>
          This is the Box Packing Generator for number of coffee bags sized
          200g, 400g and 1000g
        </p>
        <div className="product-wrapper">
          <div className="coffee-detail">
            <img
              className="coffee-img"
              alt="coffee 200g"
              src="https://www.slurp.coffee/wp-content/uploads/2015/12/Rogers-choco-900px-600x600.jpg"
            />
            <h3>200g</h3>
            <div className="change-quantity-div">{"<"}</div>
            <input
              className="quantity-input"
              min="1"
              max="1000"
              type="number"
              value={quantity200g}
              onChange={() => handleQuantityInput}
            />
            <div className="change-quantity-div">{">"}</div>
          </div>
          <div className="coffee-detail">
            <img
              className="coffee-img"
              alt="coffee 400g"
              src="https://www.slurp.coffee/wp-content/uploads/2015/12/Rogers-choco-900px-600x600.jpg"
            />
            <h3>400g</h3>
            <div className="change-quantity-div">{"<"}</div>
            <input
              className="quantity-input"
              min="1"
              max="1000"
              type="number"
              value={quantity400g}
            />
            <div className="change-quantity-div">{">"}</div>
          </div>
          <div className="coffee-detail">
            <img
              className="coffee-img"
              alt="coffee 1000g"
              src="https://www.slurp.coffee/wp-content/uploads/2015/12/Rogers-choco-900px-600x600.jpg"
            />
            <h3>1000g</h3>
            <div className="change-quantity-div">{"<"}</div>
            <input
              className="quantity-input"
              min="1"
              max="1000"
              type="number"
              value={quantity1000g}
            />
            <div className="change-quantity-div">{">"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
