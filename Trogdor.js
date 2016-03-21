var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    if (youHit) {
        console.log("You hit Trogdor for " + damageThisRound " !");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You killed Trogdor!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You missed! Trogdor has burninated the countryside.");
    }
    slaying = false;
}
