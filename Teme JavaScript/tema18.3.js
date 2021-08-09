class Character {
    constructor(name, health, strength) {
            this.name = name;
            this.health = health;
            this.strength = strength;
            this.xp = 0; //punctele XP vor fi intodeuna 0 pentru un nou caracter
        }
        // Returneaza descrierea unui caracter
    describe() {
        return `${this.name} has ${this.health} health points, ${this
    .strength} as strength and ${this.xp} XP points`;
    }
}
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
// Aurora este ranita de o sageata
aurora.health -= 20;
// Aurora primeste un colier cu puncte extra de putere
aurora.strength += 10;
// Aurora dobandeste o noua abilitate
aurora.xp += 15;
console.log(aurora.describe());
console.log(glacius.describe());

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0; // XP este intodeuna egala cu 0 pentru un nou caracter
    }

    // Ataca o tinta
    attack(target) {
            if (this.health > 0) {
                const damage = this.strength;
                console.log(`${this.name} ataca ${target.name} si afectieaza cu ${damage} puncte atac`);
                target.health -= damage;
                if (target.health > 0) {
                    console.log(`${target.name} are ${target.health} puncte de viata ramase`);
                } else {
                    target.health = 0;
                    const bonusXP = 10;
                    console.log(`${this.name} a fost eliminat ${target.name} si castiga ${bonusXP} puncte experienta `);
                    this.xp += bonusXP;

                }
            } else {
                console.log(`${this.name} nu poate ataca a fost eliminat`);
            }
        } // returneaza descrierea caracterului
    describe() {
        return `${this.name} has ${this.health} puncte de viata, ${this.strength} puteri si ${this.xp} puncte XP `;
    }
}

//Acum vom putea
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
console.log("Bine a-ti venit in aventura noastra numele eroilor nostru sunt :");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("O bestie salbatica a inceput sa atace,numele sau este:" + monster.name);
monster.attack(aurora);
monster.attack(glacius);

aurora.attack(monster);
glacius.attack(monster);
console.log(aurora.describe());
console.log(glacius.describe());

aurora.attack(monster);
glacius.attack(monster);
console.log(aurora.describe());
console.log(glacius.describe());