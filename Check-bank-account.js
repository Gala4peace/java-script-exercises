//first transaction

var balance = 325.00;
var checkBalance = true;
var isActive = false;


if(checkBalance=== true && isActive===true){
  balance = balance.toFixed(2)
}

else
 {console.log(`Thank you. Have a nice day!`)}

//second transaction
if(isActive=== true){
  console.log(`Your account is no longer active`)
}

//third transaction

var balance = 325.00;
var checkBalance = true;
var isActive = false;

 if (isActive===false && balance === 0) {
   console.log(`Your balance is negative. Please contact your bank.`)
 }

 else {
   console.log(`Your account is empity`)
 }
