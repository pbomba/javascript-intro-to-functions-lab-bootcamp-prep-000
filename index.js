let upperCase
let lowerCase

function shout (String) {
  return String.toUpperCase ();
}

function whisper (String) {
  return String.toLowerCase ();
}


function logShout (String) {
  console.log(String.toUpperCase ());
}

function logWhisper (String) {
  console.log(String.toLowerCase ());
}

function sayHiToGrandma(String){
  upperCase = String;
  lowerCase = String;
  if (String == "I love you, Grandma."){
    return "I love you, too.";
  }
  else if (upperCase === upperCase.toUpperCase()){
    return "I can't hear you";
  } else if (lowerCase === lowerCase.toLowerCase()){
    return "YES INDEED!"
  }
}