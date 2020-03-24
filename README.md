## App Description

- Demo's [Link](https://slurp-box-generator.netlify.com/).

- A precise way on how to calculate the minimum number of boxes (Bin Packing Problem) that are needed to fit all the coffee bags. Bags of different sizes can be packed into the same box with any number of quantity and any combination of different boxes.
- A clone of the real Slurp Website with same design
- Error handling built-in

### How to solve it

- Each Coffee Bag will have the start position as an object of `(x: Width Position, y: Height Position, z: Depth Position)`

- Put the first bag that has the start position of `(x: 0, y: 0, z: 0)` into box

- Run a loop through every bags starting from second bag to put into box

  - Each of the current bag's start position will be determined by previous bag's position
  - Conditions for not exceeding box's `width`, `height` or `depth`
  - If there's no place left, continue with the new box

- Further detail can be found in `pack()` function of [Packer](src/algorithm/Packer.js)

### Limitation

Due to the lack of time

- 1 feature hasn't be implemented on the algorithm:

  - Rotate the smaller bags to see if they are still fit in the box before moving to the new one for better space utilization

- The algorithm is written in JavaScript, will be converted to TypeScript in the future
