var starships = require('../starships.json');

// 5 Imperial shuttle, 10 Theta-class T-2c shuttle, 2 Sentinel-class landing craft
var operation = {
    'Imperial shuttle': 5,
    'Theta-class T-2c shuttle': 10,
    'Sentinel-class landing craft': 2
};

var operationStarships = starships.filter(starship => starship.name in operation);

// How many civilians can be transported in an emergency escape operation?
var civilians = 0;
operationStarships.forEach(starship => {
    civilians += operation[starship.name] * parseInt(starship.passengers, 10);
});
console.log('civilians = ' + civilians);

// How many crew members would be required for the same operation?
var crew = 0;
operationStarships.forEach(starship => {
    crew += operation[starship.name] * parseInt(starship.crew, 10);
});
console.log('crew = ' + crew);

// Total cost of the operation?
// 1 crew = 10 credit
var cost = 0;
operationStarships.forEach(starship => {
    cost += operation[starship.name] * (parseInt(starship.cost_in_credits, 10) + parseInt(starship.crew, 10) * 10);
});
console.log('cost = ' + cost);
