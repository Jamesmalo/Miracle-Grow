const Tree = require('./tree.js');
const Queue = require('./queue.js');
const Random = require('./Random.js');

const miraclegrow = function(size){

    let forestSize = size;

    let plantingSeeds = new Queue();

    for(let i=0;i<forestSize;i++){
        plantingSeeds.enqueue(Random().discreteRangeIn(1,1000000))
    }

    let forest = new Tree(0);

    for(let i=0;i<forestSize;i++){
        forest.add(plantingSeeds.dequeue())
    }

    return forest;

};

module.exports = miraclegrow;
