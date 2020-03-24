## App Description

A precise way on how to calculate the minimum number of boxes (Bin Packing Problem) that are needed to fit all the coffee bags. Bags of different sizes can be packed into the same box with any number of quantity and any combination of different boxes.

### How to solve it

- Each item will have the start position as an object of (x: Width Position, y: Height Position, z: Depth Position)
- Put the first bag that has the start position of (x: 0, y: 0, z: 0) into box
- Run a loop through every bags starting from second bag to put into box
  - Each of the current bag's start position will be determined by previous bag's position
  - Conditions for not exceeding box's width, height or depth
  - If there's no place left, continue with the new box
- Further detail can be found in `Packer.pack()` function
