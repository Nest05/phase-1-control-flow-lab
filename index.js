function scuberGreetingForFeet(someValue){
  // Write your code here!
  someValue = parseInt(someValue, 10);

  if (someValue <= 400){
    return 'This one is on me!';
  }
  else if (someValue > 2500){
    return 'No can do.';
    
  }
  else if (someValue > 2000 ){
    return 'I will gladly take your thirty bucks.';
    
  }
}
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? 'Ok, sounds good.': 'No go.';
  
}
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(response){
  // Write your code here!
  switch (response){
    case response = 'generous':
      return 'Thank you so much.'
      case response = 'not as generous':
        return "Thank you." 
        default:
          return "Bye."
  }
}