var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

//enemyhealth - player attack
enemyHealth = enemyHealth - playerAttack;



//log message to say what happened
console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining." 
);
// if compare enemyhealth=0, round over you win, if not next step
if (enemyHealth <=0) {
    window.alert(enemyName + " has died! ");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}

// playerhealth - enemy attack
playerHealth = playerHealth - enemyAttack;

//log message to say what happened
console.log(
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining." 
);
// put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
//if compare playerhealth=0, round over you loose, if not loop
};

fight ();