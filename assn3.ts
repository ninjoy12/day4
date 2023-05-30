enum Country {
    US,
    Japan,
    Australia,
    Canada,
  }
  
  // Accessing Enum values
  console.log(Country.US); // Output: 0
  console.log(Country.Japan); // Output: 1
  console.log(Country.Australia);  // Output: 2
  console.log(Country.Canada);  // Output: 3
  
 // using indexes
 enum Direction {
    North,
    South,
    East,
    West,
  }
  
  const directionIndex = 3;
  const directionValue = Direction[directionIndex];
  
  console.log(directionValue); 
  