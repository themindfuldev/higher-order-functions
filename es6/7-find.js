var starships = require('../starships.json');

// 5 Imperial shuttle, 10 Theta-class T-2c shuttle, 2 Sentinel-class landing craft
var operation = {
    'Imperial shuttle': 5,
    'Theta-class T-2c shuttle': 10,
    'Sentinel-class landing craft': 2
};

// Find ship
var firstShipThatCanTravelFasterThan2000mph = starships
    .filter( starship => starship.name in operation )
    .find( starship => parseInt(starship.max_atmosphering_speed, 10) >= 2000 );

firstShipThatCanTravelFasterThan2000mph
    && console.log('firstShipThatCanTravelFasterThan2000mph = ' + firstShipThatCanTravelFasterThan2000mph.name);

// Find index
var firstShipThatCanTravelFasterThan2000mphIndex = starships
    .findIndex( starship => starship.name in operation && parseInt(starship.max_atmosphering_speed, 10) >= 2000 );

console.log('firstShipThatCanTravelFasterThan2000mphIndex = ' + firstShipThatCanTravelFasterThan2000mphIndex);
