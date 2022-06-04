const car = {
  color: "red",
  gear: 5,
  engine: "diesel",
};

// const engine = car.engine;
// const gear = car.gear;
// const color = car.color;

const someFunction = (carObj = {}) => {
  const { color = "green", gear = 6, engine: carEngine = "petrol" } = carObj;
  console.log(color, gear);
};

someFunction();

// Sorthand for above code
// const { color, gear, engine: carEngine } = car;

// console.log("color", color);
// console.log("gear", gear);
// console.log("engine", carEngine);

const someArr = [5, 4, 3, 2, 8];
const [firEl, secEl, thEl] = someArr;

console.log(firEl, secEl, thEl);
