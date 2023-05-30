var Country;
(function (Country) {
    Country[Country["US"] = 0] = "US";
    Country[Country["Japan"] = 1] = "Japan";
    Country[Country["Australia"] = 2] = "Australia";
    Country[Country["Canada"] = 3] = "Canada";
})(Country || (Country = {}));
// Accessing Enum values
console.log(Country.US); // Output: 0
console.log(Country.Japan); // Output: 1
console.log(Country.Australia); // Output: 2
console.log(Country.Canada); // Output: 3
// using indexes
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var directionIndex = 3;
var directionValue = Direction[directionIndex];
console.log(directionValue);
