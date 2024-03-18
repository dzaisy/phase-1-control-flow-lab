const heightOfride = '';
let freeRide, twentyBuckfee, thirtyBuckfee, noRide;

function scuberGreetingForFeet(heightOfride){
  // Write your code here!
  if (heightOfride <= 400) {
    freeRide = 'This one is on me!';
    return freeRide
  } 
  else if (heightOfride > 400 && heightOfride < 2000) {
      twentyBuckfee = 'That will be twenty bucks.';
      return twentyBuckfee
  }
  else if (heightOfride > 2000 && heightOfride < 2500) {
      thirtyBuckfee = 'I will gladly take your thirty bucks.';
      return thirtyBuckfee
  }
  else if (heightOfride > 2500) {
      noRide = 'No can do.';
      return noRide
  }
}


function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous') {
    return 'Thank you so much.'
  }
  else if (tip === 'not as generous') {
    return 'Thank you.'
  }
  else {
    return 'Bye.'
  }
}