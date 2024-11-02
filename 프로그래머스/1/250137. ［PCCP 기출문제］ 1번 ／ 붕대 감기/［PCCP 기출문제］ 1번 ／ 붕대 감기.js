function solution(bandage, health, attacks) {
    const [skillRunT, healPerSec, extraHeal] = bandage;
    const attackTimes = attacks.map(v => v[0]);
    const lastAttackT = attacks[attacks.length - 1][0];
    let curHealth = health;
    let continuousSucCnt = 0;
    
    for (let i = 1; i <= lastAttackT; i++) {
        if (curHealth === -1) break;
        const attackIndex = attackTimes.indexOf(i);
        if (attackIndex > -1) {
            const damage = attacks[attackIndex][1]
            curHealth = (curHealth - damage <= 0) ? -1 : curHealth - damage;
            continuousSucCnt = 0;
            continue;
        }
        curHealth = heal(healPerSec);
        continuousSucCnt++;
        if (continuousSucCnt === skillRunT) {
            curHealth = heal(extraHeal);
            continuousSucCnt = 0;
        }  
    }
    
    function heal(healHealth) {
       return (curHealth + healHealth > health) ? health : curHealth + healHealth; 
    }

    return curHealth;
}