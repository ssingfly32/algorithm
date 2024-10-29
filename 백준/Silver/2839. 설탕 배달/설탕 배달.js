const input = require('fs').readFileSync('dev/stdin').toString().trim();

const target = parseInt(input);

function minBags(target) {
    let count = 0;

    while (target >= 0) {
        if (target % 5 === 0) {    
            count += Math.floor(target / 5);
            console.log(count);
            return;
        }
        target -= 3;               
        count++;              
    }

    console.log(-1);          
}

minBags(target);