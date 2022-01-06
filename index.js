/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...

let fullName = "Anas Aljobbeh" 
let yearOfBirth = 1993
let hobby = "Fishing"
let funFact = "Love to eat sometimes i eat 4:00 AM"
var image = "https://scontent.fkwi12-1.fna.fbcdn.net/v/t39.30808-6/266969053_4700390556681249_3224164317308081660_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=i3YC7bFDASEAX80Oh-N&_nc_ht=scontent.fkwi12-1.fna&oh=00_AT_jDbZsczaBvzK7wmKjS51tWhxh2e2vEkOIrrB_U1c-kg&oe=61DB0774"






/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My name is ${ fullName }`;
const yearOfBirthString = `I am ${2022 - yearOfBirth}`;
const hobbyString = `My hobby is ${ hobby }`;




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars ++
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars --
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars = stars+2
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars = stars-2
}
