var starships = require('../starships.json');

// 5 Imperial shuttle, 10 Theta-class T-2c shuttle, 2 Sentinel-class landing craft
var operation = {
    'Imperial shuttle': 5,
    'Theta-class T-2c shuttle': 10,
    'Sentinel-class landing craft': 2
};

var canOperationTravelFasterThan1000mph = starships
    .filter( starship => starship.name in operation )
    .every( starship => parseInt(starship.max_atmosphering_speed, 10) >= 1000 );

console.log('canOperationTravelFasterThan1000mph = ' + canOperationTravelFasterThan1000mph);
