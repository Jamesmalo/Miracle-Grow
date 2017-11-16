const require = ('./tree.js');
const require = ('./queue.js');
const require = ('./Random.js');

const miraclegrow = function(size){

    let forestSize = size;

    let plantingSeeds = new Queue();

    for(let i=0;i<forestSize;i++){
        plantingSeeds.enqueue(random.discreteRangeIn(1,1000000))
    }

    let forest = new Tree(0);

    for(let i=0;i<;i++){

    }





};

module.exports = miraclegrow;
