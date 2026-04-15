/* if statement */
let shacklesMadeOfVengestone = true;

if (shacklesMadeOfVengestone === true) {
    console.log('Zane cannot use his elemental ice power.'); // {} indicate a code block, which is a group of statements that belong together
}

shacklesMadeOfVengestone = false;

if (shacklesMadeOfVengestone === false) {
    console.log('Zane will obliterate the Skull Sorcerer.');
}

/* else statement */
if (shacklesMadeOfVengestone === true) {
    console.log('Zane cannot use his elemental ice power.');
} else {
    console.log('Zane will obliterate the Skull Sorcerer.');
}

/* if-else statement */

let elementalPower = 'Ice';

if (elementalPower === 'Ice') {
    console.log('The ninja is Zane.');
} else if (elementalPower === 'Fire') {
    console.log('The ninja is Kai.');
} else if (elementalPower === 'Lightening') {
    console.log('The ninja is Jay.');
} else if (elementalPower === 'Earth') {
    console.log('The ninja is Cole.');
} else {
    console.log('It must be a different ninja.');
}

/* switch statement */

switch (elementalPower) {
    case 'Ice':
        console.log('The ninja is Zane.');
        break;
    case 'Fire':
        console.log('The ninja is Kai.');
        break;
    case 'Lightening':
        console.log('The ninja is Jay.');
        break;
    case 'Earth':
        console.log('The ninja is Cole.');
        break;
    default:
        console.log('It must be a different ninja.');
}

/* boolean "AND" with if statement */
let numberOfArms = 2;
let eyeColor = 'Red';

if (numberOfArms === 4 && eyeColor === 'Red') {
    console.log('Garmadon is evil.');
} else if (numberOfArms === 2 && eyeColor === 'Red') {
    console.log('Garmadon is evil.');
} else if (numberOfArms === 2 && eyeColor === 'Brown') {
    console.log('Garmadon is good.');
}

/* shortcut with true/false evaluations */
let hasFirePower = true;

if (hasFirePower === true) {
    console.log('You are Kai!');
}

//shorter form of the above if statement
if (hasFirePower) {
    console.log('You are Kai!');
}

/* truthy and falsy values */
let hasIcePower = false;

if (hasIcePower === false) {
    console.log('You are not Zane!');
}

// shorter form of the above if statement
if (!hasIcePower) { // false is a falsy value, so this block will run
    console.log('You are not Zane!');
}

hasIcePower = undefined;

if (!hasIcePower) { // undefined is a falsy value, so this block will run
    console.log('You are not Zane!');
}

hasIcePower = null;

if (!hasIcePower) { // null is a falsy value, so this block will run
    console.log('You are not Zane!');
}

let numberOfNinjas = 1;

if (numberOfNinjas) { // 1 is a truthy value, so this block will run
    console.log('There are ' + numberOfNinjas + ' ninjas!');
} else {
    console.log('There are no ninjas!');
}

numberOfNinjas = 0;

if (numberOfNinjas) { // 0 is a falsy value, so this block will not run
    console.log('There are ' + numberOfNinjas + ' ninjas!');
} else {
    console.log('There are no ninjas!');
}

numberOfNinjas = 4 * 'Ninja'; // evaluates to NaN (Not a Number)

if (numberOfNinjas) { // NaN is a falsy value, so this block will not run
    console.log('There are ' + numberOfNinjas + ' ninjas!');
} else {
    console.log('There are no ninjas!');
}

let ninjaName = 'Cole';

if (ninjaName) { // 'Cole' is a truthy value, so this block will run
    console.log('The ninja is ' + ninjaName + '!');
} else {
    console.log('There is no ninja!');
}

ninjaName = ''; // '' is an empty string, which is a falsy value

if (ninjaName) { // '' is a falsy value, so this block will not run
    console.log('The ninja is ' + ninjaName + '!');
} else {
    console.log('There is no ninja!');
}

// summary of truthy and falsy values
// falsy values: false, 0, NaN, '', undefined, null
// truthy values: all values that are not falsy (e.g. true, 1, 'Ninja', etc.)