$(document).ready(function() {
  

  // EVERYTHING GOES BELOW HERE 
let babyNames = ["jack", "benjamin","sophie","charlotte","atticus","aaron","xanna","logan","chase","hochwald","aashana","marshall","lily","amelie","madelyn","lauren","henry","john","oliver","goose","mav","violet","elijah","quinn","avery","harper", ]

function randomName(namePicker){

  let namesLength = namePicker.length;
  let randomIndex = Math.floor(Math.random() * namesLength);
  return namePicker[randomIndex]
  //pick a random baby name
}
  $(".baby").click(() => {
    randomName(babyNames);
    console.log (randomName(babyNames));
    //print babyname to console
    document.getElementById("baby")
    .innerHTML =  randomName(babyNames);
    //set text in p to be baby name
    
  }
  )
  
  // EVERYTHING GOES ABOVE HERE
});
