var starships = require('../starships.json');

var sum = function(numbers) {
    var sum = 0;
    numbers.forEach(function(number) {
        sum += number;
    });
    return sum;
};

// 5 Imperial shuttle, 10 Theta-class T-2c shuttle, 2 Sentinel-class landing craft
var operation = {
    'Imperial shuttle': 5,
    'Theta-class T-2c shuttle': 10,
    'Sentinel-class landing craft': 2
};

var operationStarships = starships.filter( function(starship) {
    return starship.name in operation;
} );

var getNumber = function(attribute) {
    return function(starship) {
        return operation[starship.name] * parseInt(starship[attribute], 10);
    };
};

// How many civilians can be transported in an emergency escape operation?
var civilians = sum( operationStarships.map( getNumber('passengers') ) );
console.log('civilians = ' + civilians);

// How many crew members would be required for the same operation?
var crew = sum( operationStarships.map( getNumber('crew') ) );
console.log('crew = ' + crew);

// Total cost of the operation?
// 1 crew = 10 credit
var cost = sum( operationStarships.map( getNumber('cost_in_credits') ) ) +
           sum( operationStarships.map( getNumber('crew') ) ) * 10;
console.log('cost = ' + cost);
