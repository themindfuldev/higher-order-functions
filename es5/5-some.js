var starships = require('../starships.json');

// 5 Imperial shuttle, 10 Theta-class T-2c shuttle, 2 Sentinel-class landing craft
var operation = {
    'Imperial shuttle': 5,
    'Theta-class T-2c shuttle': 10,
    'Sentinel-class landing craft': 2
};

var canShipTravelFasterThan1000mph = starships
    .filter( function (starship) {
        return starship.name in operation;
    } )
    .some( function (starship) {
        return parseInt(starship.max_atmosphering_speed, 10) >= 1000
    });

console.log('canShipTravelFasterThan1000mph = ' + canShipTravelFasterThan1000mph);
