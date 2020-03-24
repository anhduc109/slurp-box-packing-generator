import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

import BoxPacking from "./algorithm/index";

function App() {
  const { CoffeeBag, Packer } = BoxPacking;

  const [quantity200g, setQuantity200g] = useState(0);
  const [quantity400g, setQuantity400g] = useState(0);
  const [quantity1000g, setQuantity1000g] = useState(0);
  const [minimumBox, setMinimumBox] = useState(0);

  const handleQuantityInput = (
    evt: React.ChangeEvent<HTMLInputElement>,
    size: number
  ) => {
    if (size === 200) {
      setQuantity200g(parseInt(evt.target.value));
    }
    if (size === 400) {
      setQuantity400g(parseInt(evt.target.value));
    }
    if (size === 1000) {
      setQuantity1000g(parseInt(evt.target.value));
    }
  };

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    let packer = new Packer();

    let bagsOf200g = new CoffeeBag(16, 23, 2);
    let bagsOf400g = new CoffeeBag(22, 26, 2);
    let bagsOf1000g = new CoffeeBag(14, 26, 10);

    packer.addBag(bagsOf200g, quantity200g);
    packer.addBag(bagsOf400g, quantity400g);
    packer.addBag(bagsOf1000g, quantity1000g);

    packer.pack();
    setMinimumBox(packer.boxes.length);
  };
  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="app-content-wrapper">
        <h1>Box Packing Generator</h1>
        <p>
          This is the Box Packing Generator for number of coffee bags sized
          200g, 400g and 1000g
        </p>
        <form onSubmit={handleOnSubmit} className="form-wrapper">
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
                min="0"
                max="1000"
                type="number"
                value={quantity200g}
                onChange={evt => handleQuantityInput(evt, 200)}
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
                min="0"
                max="1000"
                type="number"
                value={quantity400g}
                onChange={evt => handleQuantityInput(evt, 400)}
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
                min="0"
                max="1000"
                type="number"
                value={quantity1000g}
                onChange={evt => handleQuantityInput(evt, 1000)}
              />
              <div className="change-quantity-div">{">"}</div>
            </div>
          </div>
          <br />
          <button type="submit" className="submit-btn">
            GENERATE
          </button>
          <h3 className="result-text">Minimum Boxes required: {minimumBox}</h3>
        </form>
      </div>
    </div>
  );
}

export default App;
