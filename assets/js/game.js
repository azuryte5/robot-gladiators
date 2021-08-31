var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (21) + min);

  return value;
};



// fight function (now with parameter for enemy's name)
var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + ' . ' + enemy.name + ' now has ' + enemy.health + 'health remaining.'
      );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    console.log(
      enemy.name + 'attacked ' + playerInfo.name + '.' + playerInfo.name + ' now has ' + playerInfo.health  + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};

// start a new game

var startGame = function () {
  //reset the game board
playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemyHealth before starting new fight
      pickedEnemyObj.health = randomNumber (40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);

      // if weren't not a the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

        var storeConfirm = window.confirm("The round is over. Do you want to shop before the next round?");
      // if yes, enter the shop
      if (storeConfirm) {}
        shop();
      }
    }
    // if player isn't alive, stop the game
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
     
    
}
// after loop ends, player is either out or enemies are over
endGame ();
};
//Oh we need to power on the app. time to execute


// function to end the entire game

var endGame = function () {
  // if the player is still alive, player wins
  if (playerInfo.health > 0) {
    window.alert("You won you now have a score of " + playerInfo.money + '.')
  } 
  else {
    window.alert("You didn't make it");
  }

  // ask if you want to try again

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //start a new game
    startGame();
  } 
  else {
    window.alert("Thank you for playing. Come back again soon!");
  }
}

var shop = function () {
  //ask player what they'd like to do
  var shopOptionPrompt= window.prompt(
    'Would you like to refill your health, upgrade your attack or leave? Please enter REFILL, UPGRADE, LEAVE to make a choice'
    );
  //  use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL": //new case
    case "refill":
      playerInfo.refillHealth();
    break;
    case "UPGRADE": // backup case
    case "upgrade":
      playerInfo.upgradeAtttack();
    break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store");
      
    //do nothing, yep.
    break;
  default:
    window.alert("You didn't pick a valid option. Try Again.");

    // call shop() again to force player to pick a valid option
    shop ();
    break;
  }
  }

// player information
  var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
      this.health = 100;
      this.attack = 10;
      this.money = 10;
    },
  refillHealth: function () {
    if(this.money >= 7) {
      window.alert("Refill player's health by 20 for 7 dollars.")
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough credits");
    }
  },
  upgradeAtttack: function() {
    if(this.money >= 7) {
      window.alert("Upgrade attack power by 6 for 7 dollars")
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough credits");
    }
  }
};

var enemyInfo = [
  { 
    name: 'Roborto',
    attack: randomNumber(10,14)
  },
  {
    name: 'Amy Android',
    attack: randomNumber (10,14)
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber (10,14)
  }
]

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0.]['attack']);

// Run game
startGame();
