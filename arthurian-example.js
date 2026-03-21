function exploreTheCastle(hero, enemy) {
    if (hero.health < 25) {
        console.log("You are too weak to explore the castle. Go rest!")
    } else {
        switch (hero.weapon) {
            case "Excalibur":
                enemy.health = 0;
                console.log("Fatal blow to the nearest enemy!");
                break;
            case "Knight's Sword":
                enemy.health = enemy.health - 20;
                console.log("Massive strike to the nearest enemy!");
                break;
            case "Dagger":
                enemy.health = enemy.health - 10;
                console.log("Small wound to the nearest enemy!");
                break;
            default:
                enemy.health = enemy.health - 3;
                console.log("Attempt a punch at a foe!");
                break;
        }
        console.log("The enemy's health is now " + enemy.health);
    }
}


const hero = {
    name: "Sir Lancelot",
    health: 95,
    weapon: "Excalibur",
    armor: "Blue Crest Mail",
    specialPower: function() {
        console.log("All of the foes are vanquished!!");
    },
};

const enemy = {
    name: "Mordred",
    health: 85,
    weapon: "Dark Dagger",
    armor: "Black Mail",
    specialPower: function() {
        console.log("Dark burst of magic consumes the hero!!");
    },
};

exploreTheCastle(hero, enemy);