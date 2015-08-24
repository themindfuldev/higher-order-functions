var starships = require('../starships.json');

// 5 Imperial shuttle, 10 Theta-class T-2c shuttle, 2 Sentinel-class landing craft
var operation = {
    'Imperial shuttle': 5,
    'Theta-class T-2c shuttle': 10,
    'Sentinel-class landing craft': 2
};

var operationStarships = starships.filter( function(starship) {
    return starship.name in operation;
} );

var sumNumber = function(attribute) {
    return function(previous, current) {
        return previous + operation[current.name] * parseInt(current[attribute], 10);
    };
};

// How many civilians can be transported in an emergency escape operation?
var civilians = operationStarships.reduce( sumNumber('passengers'), 0 );
console.log('civilians = ' + civilians);

// How many crew members would be required for the same operation?
var crew = operationStarships.reduce( sumNumber('crew'), 0 );
console.log('crew = ' + crew);

// Total cost of the operation?
// 1 crew = 10 credit
var cost = operationStarships.reduce( sumNumber('cost_in_credits'), 0 ) +
           operationStarships.reduce( sumNumber('crew'), 0 ) * 10;
console.log('cost = ' + cost);
