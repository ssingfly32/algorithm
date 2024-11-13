const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [logCase, ...logs] = input;
const logMap = new Map();
logs.forEach(log => {
    const [name, status] = log.split(' ');
    logMap.set(name, status);
})
logMap.forEach((v, k) => (v === 'leave' || v === 'leave\r') && logMap.delete(k));
console.log(Array.from(logMap.keys()).sort().reverse().join('\n'));