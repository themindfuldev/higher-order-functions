var starships = require('./starships.json');

// How many civilians can be transported in an emergency escape operation?
// 5 Imperial shuttle, 10 Theta-class T-2c shuttle, 2 Sentinel-class landing craft
var civilians = 0;
for (var i = 0; i < starships.length; i++) {
    var starship = starships[i];
    if (starship.name === 'Imperial shuttle') {
        civilians += 5 * parseInt(starship.passengers, 10);
    }
    else if (starship.name === 'Theta-class T-2c shuttle') {
        civilians += 10 * parseInt(starship.passengers, 10);
    }
    else if (starship.name === 'Sentinel-class landing craft') {
        civilians += 2 * parseInt(starship.passengers, 10);
    }
}
console.log('civilians = ' + civilians);

// How many crew members would be required for the same operation?
var crew = 0;
for (var i = 0; i < starships.length; i++) {
    var starship = starships[i];
    if (starship.name === 'Imperial shuttle') {
        crew += 5 * parseInt(starship.crew, 10);
    }
    else if (starship.name === 'Theta-class T-2c shuttle') {
        crew += 10 * parseInt(starship.crew, 10);
    }
    else if (starship.name === 'Sentinel-class landing craft') {
        crew += 2 * parseInt(starship.crew, 10);
    }
}
console.log('crew = ' + crew);

// Total cost of the operation?
// 1 crew = 10 credit
var cost = 0;
for (var i = 0; i < starships.length; i++) {
    var starship = starships[i];
    if (starship.name === 'Imperial shuttle') {
        cost += 5 * (parseInt(starship.cost_in_credits, 10) + parseInt(starship.crew, 10) * 10);
    }
    else if (starship.name === 'Theta-class T-2c shuttle') {
        cost += 10 * (parseInt(starship.cost_in_credits, 10) + parseInt(starship.crew, 10) * 10);
    }
    else if (starship.name === 'Sentinel-class landing craft') {
        cost += 2 * (parseInt(starship.cost_in_credits, 10) + parseInt(starship.crew, 10) * 10);
    }
}
console.log('cost = ' + cost);

// Can the whole operation travel faster than 1000 mph?
var canOperationTravelFasterThan1000mph = true;
for (var i = 0; i < starships.length; i++) {
    var starship = starships[i];
    if (starship.name === 'Imperial shuttle'
        || starship.name === 'Theta-class T-2c shuttle'
        || starship.name === 'Sentinel-class landing craft') {
        canOperationTravelFasterThan1000mph = canOperationTravelFasterThan1000mph && parseInt(starship.max_atmosphering_speed, 10) >= 1000;
    }
}
console.log('canOperationTravelFasterThan1000mph = ' + canOperationTravelFasterThan1000mph);


// Can any starship travel faster than 1000 mph?
var canShipTravelFasterThan1000mph = false;
for (var i = 0; i < starships.length; i++) {
    var starship = starships[i];
    if (starship.name === 'Imperial shuttle'
        || starship.name === 'Theta-class T-2c shuttle'
        || starship.name === 'Sentinel-class landing craft') {
        canShipTravelFasterThan1000mph = canShipTravelFasterThan1000mph || parseInt(starship.max_atmosphering_speed, 10) >= 1000;
    }
}
console.log('canShipTravelFasterThan1000mph = ' + canShipTravelFasterThan1000mph);


// Which is the first ship that can travel faster than 2000 mph?
var firstShipThatCanTravelFasterThan2000mph;
var firstShipThatCanTravelFasterThan2000mphIndex;
for (var i = 0; i < starships.length; i++) {
    var starship = starships[i];
    if ((starship.name === 'Imperial shuttle'
        || starship.name === 'Theta-class T-2c shuttle'
        || starship.name === 'Sentinel-class landing craft')
        && parseInt(starship.max_atmosphering_speed, 10) >= 2000) {
        firstShipThatCanTravelFasterThan2000mph = starship;
        firstShipThatCanTravelFasterThan2000mphIndex = i;
        break;
    }
}
firstShipThatCanTravelFasterThan2000mph &&
    console.log('firstShipThatCanTravelFasterThan2000mph = ' + firstShipThatCanTravelFasterThan2000mph.name);

console.log('firstShipThatCanTravelFasterThan2000mphIndex = ' + firstShipThatCanTravelFasterThan2000mphIndex);
