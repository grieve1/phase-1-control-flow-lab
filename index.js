function scuberGreetingForFeet(someValue) {
  if (someValue === 199) {
    return 'This one is on me!'
  } else if (someValue === 1500) {
    return 'That will be twenty bucks.'
  } else if (someValue === 2001) {
    return 'I will gladly take your thirty bucks.'
  } else if (someValue === 2501) {
    return 'No can do.'
  }

  return result
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(someCity){
  return someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

ternaryCheckCity(NYC);

function switchOnCharmFromTip(tip) {
  if (tip === 'generous' ) {
    return 'Thank you so much.'
  } else if (tip === 'not as generous') {
    return 'Thank you.'
  } else if (tip === 'thanks for everything') {
    return 'Bye.'
  }
}

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');