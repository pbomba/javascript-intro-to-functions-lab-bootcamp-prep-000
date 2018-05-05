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
  if (String == "I love you, Grandma."){
    return "I love you, too.";
  }
  else if (String.isLowerCase){
    return "I can't hear you";
  } else {
    return "YES INDEED!"
  }
}