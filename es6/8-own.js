'use strict';

Array.prototype.produceRandomElements = randomSeed => {
	var remainingIndexes = Array.apply(null, Array(this.length)).map((item, index) => index);

	return () => {
        let remainingTotal = remainingIndexes.length;
        if ( remainingTotal > 0 ) {
            let newIndex = randomSeed(remainingTotal);
            return this[remainingIndexes.splice(newIndex, 1)];
        }
		return undefined;
	}.bind(this);
};


var starships = require('../starships.json');

var randomSeed = max => {
	return Math.floor(Math.random() * max);
};

var producer = starships.produceRandomElements( randomSeed );
console.log(producer());
console.log(producer());
console.log(producer());

var shuffled = starships.map(starships.produceRandomElements( randomSeed ));
console.log(shuffled);