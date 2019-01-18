/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Ms. Van Cleve";
var weapon = "knife";
var solved = true;

if (suspect = "Ms. Van Cleve") {
    console.log(true);

} else if (room = weapon) {
     console.log(true);

} else if (weapon = suspect) {
    console.log(true);


} else if (weapon=room) {
    console.log(true);
}





/* With Logical conditionals*/
/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room ==="gallery" && suspect ==="Ms. Van Cleve") {
  weapon = "trophy"
  solved = true
}

else if (room ==="ballroom" && suspect ==="Mr. Kalehoff") {
  weapon = "poison"
  solved = true
}

else if (room ==="dining room" && suspect ==="Mr. Parkes") {
  weapon = "pool stick"
  solved = true
}


else {
  weapon = "pool stick"
  solved = true
}

if (solved) {
console.log (`${suspect} did it in the ${room} with the ${weapon}!`)}
