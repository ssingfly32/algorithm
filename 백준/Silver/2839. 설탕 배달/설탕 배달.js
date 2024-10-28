const input = require('fs').readFileSync('dev/stdin').toString().trim();

let target = parseInt(input);

const result = () => {
    const remainder5 = target % 5;
    const remainder3 = target % 3;
    
    let decreasedD5 = parseInt(target / 5);
    let decreasedD3 = parseInt(target / 3);
    
    let minBag = 0;

    if (!remainder5 && decreasedD5) {
        minBag = decreasedD5;
    } else if (!remainder3 && decreasedD3) {
        minBag = decreasedD3;
    }
    
    while (decreasedD5) {
        const tempDivine3 = (target - (decreasedD5 * 5)) % 3;
        
        if(!tempDivine3) {
            
            const result = decreasedD5 + parseInt((target - decreasedD5 * 5) / 3);

            if(!minBag) {
                minBag = result;
            } else {
                minBag = result < minBag ? result : minBag;
            }
        }

        decreasedD5--;
    }
    
    minBag = minBag ? minBag : -1;

    return minBag;   
};

const answer = result();
console.log(answer);
