const names=['Guadalupe','Ollie','Aki'];
const event = "surprise";

 
 function writeCards( names, event ) {
  let personalCards = []
  for ( let i = 0; i < names.length; i++ ) {
    personalCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` )
  }
  return personalCards
}
 

function countDown(){
  let numCountdown=11;
  
  
  while(numCountdown--){
    console.log(numCountdown)
  }
} 

countDown();
 

//for (let age =30; age < 40; age++){
    //console.log(`I am ${age} years old. Happy Birthday to me!`);
    //debugger;
 ///}

  // for loop in arrays
  
// Code your solutions in this file
