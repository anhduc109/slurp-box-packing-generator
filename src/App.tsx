import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

import BoxPacking from "./algorithm/index";

function App() {
  const { CoffeeBag, Packer } = BoxPacking;

  const [quantity200g, setQuantity200g] = useState(0);
  const [quantity400g, setQuantity400g] = useState(0);
  const [quantity1000g, setQuantity1000g] = useState(0);
  const [minimumBox, setMinimumBox] = useState(0);
  const [reportGuide, setReportGuide] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Error handling when changing quantity
    if (quantity200g < 0 || quantity400g < 0 || quantity1000g < 0) {
      setError("Quantity of Coffee Bags needs to be a positive number");
    } else if (
      quantity200g > 1000 ||
      quantity400g > 1000 ||
      quantity1000g > 1000
    ) {
      setError("Quantity of Coffee Bags needs to be smaller than 1000");
    } else setError("");
  }, [quantity200g, quantity400g, quantity1000g]);

  const handleQuantityInput = (
    evt: React.ChangeEvent<HTMLInputElement>,
    size: number
  ) => {
    let value = evt.target.value === "" ? "0" : evt.target.value;
    if (size === 200) {
      setQuantity200g(parseInt(value));
    }
    if (size === 400) {
      setQuantity400g(parseInt(value));
    }
    if (size === 1000) {
      setQuantity1000g(parseInt(value));
    }
  };

  const handleDecreaseQuantity = (size: number) => {
    if (size === 200) {
      setQuantity200g(quantity200g - 1);
    }
    if (size === 400) {
      setQuantity400g(quantity400g - 1);
    }
    if (size === 1000) {
      setQuantity1000g(quantity1000g - 1);
    }
  };

  const handleIncreaseQuantity = (size: number) => {
    if (size === 200) {
      setQuantity200g(quantity200g + 1);
    }
    if (size === 400) {
      setQuantity400g(quantity400g + 1);
    }
    if (size === 1000) {
      setQuantity1000g(quantity1000g + 1);
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
    setReportGuide(
      "Please go to Console Tab in the Developer Tools for a detailed Report"
    );

    packer.report();
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
              <div
                className="change-quantity-div no-select"
                onClick={() => handleDecreaseQuantity(200)}
              >
                {"<"}
              </div>
              <input
                className="quantity-input"
                min="0"
                max="1000"
                type="number"
                value={quantity200g}
                onChange={evt => handleQuantityInput(evt, 200)}
              />
              <div
                className="change-quantity-div no-select"
                onClick={() => handleIncreaseQuantity(200)}
              >
                {">"}
              </div>
            </div>
            <div className="coffee-detail">
              <img
                className="coffee-img"
                alt="coffee 400g"
                src="https://www.slurp.coffee/wp-content/uploads/2015/12/Rogers-choco-900px-600x600.jpg"
              />
              <h3>400g</h3>
              <div
                className="change-quantity-div no-select"
                onClick={() => handleDecreaseQuantity(400)}
              >
                {"<"}
              </div>
              <input
                className="quantity-input no-select"
                min="0"
                max="1000"
                type="number"
                value={quantity400g}
                onChange={evt => handleQuantityInput(evt, 400)}
              />
              <div
                className="change-quantity-div no-select"
                onClick={() => handleIncreaseQuantity(400)}
              >
                {">"}
              </div>
            </div>
            <div className="coffee-detail">
              <img
                className="coffee-img"
                alt="coffee 1000g"
                src="https://www.slurp.coffee/wp-content/uploads/2015/12/Rogers-choco-900px-600x600.jpg"
              />
              <h3>1000g</h3>
              <div
                className="change-quantity-div no-select"
                onClick={() => handleDecreaseQuantity(1000)}
              >
                {"<"}
              </div>
              <input
                className="quantity-input"
                min="0"
                max="1000"
                type="number"
                value={quantity1000g}
                onChange={evt => handleQuantityInput(evt, 1000)}
              />
              <div
                className="change-quantity-div no-select"
                onClick={() => handleIncreaseQuantity(1000)}
              >
                {">"}
              </div>
            </div>
          </div>
          <h4 className="error-text">{error}</h4>
          <button type="submit" className="submit-btn">
            GENERATE
          </button>
          <h3 className="result-text">Minimum Boxes required: {minimumBox}</h3>
          <p>{reportGuide}</p>
        </form>
      </div>
    </div>
  );
}

export default App;
