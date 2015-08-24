var starships = require('../starships.json');

// How many civilians can be transported in an emergency escape operation?
// 5 Imperial shuttle, 10 Theta-class T-2c shuttle, 2 Sentinel-class landing craft
var civilians = 0;
starships.forEach(function(starship) {
    if (starship.name === 'Imperial shuttle') {
        civilians += 5 * parseInt(starship.passengers, 10);
    }
    else if (starship.name === 'Theta-class T-2c shuttle') {
        civilians += 10 * parseInt(starship.passengers, 10);
    }
    else if (starship.name === 'Sentinel-class landing craft') {
        civilians += 2 * parseInt(starship.passengers, 10);
    }
});
console.log('civilians = ' + civilians);

// How many crew members would be required for the same operation?
var crew = 0;
starships.forEach(function(starship) {
    if (starship.name === 'Imperial shuttle') {
        crew += 5 * parseInt(starship.crew, 10);
    }
    else if (starship.name === 'Theta-class T-2c shuttle') {
        crew += 10 * parseInt(starship.crew, 10);
    }
    else if (starship.name === 'Sentinel-class landing craft') {
        crew += 2 * parseInt(starship.crew, 10);
    }
});
console.log('crew = ' + crew);

// Total cost of the operation?
// 1 crew = 10 credit
var cost = 0;
starships.forEach(function(starship) {
    if (starship.name === 'Imperial shuttle') {
        cost += 5 * (parseInt(starship.cost_in_credits, 10) + parseInt(starship.crew, 10) * 10);
    }
    else if (starship.name === 'Theta-class T-2c shuttle') {
        cost += 10 * (parseInt(starship.cost_in_credits, 10) + parseInt(starship.crew, 10) * 10);
    }
    else if (starship.name === 'Sentinel-class landing craft') {
        cost += 2 * (parseInt(starship.cost_in_credits, 10) + parseInt(starship.crew, 10) * 10);
    }
});
console.log('cost = ' + cost);
