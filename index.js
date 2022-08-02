////
//flags
//g - global - look for more than one match
//i - case insensitive

//looking for the name ninja - globally, case insensitive

let pattern = /ninja/gi;  //matching the word ninja
let text = "This is the net ninja";
let result = pattern.test(text);
