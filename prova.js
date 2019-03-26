var predictions = [
  "a group under sm will have a cowboy concept comeback and they'll say yeehaw at least once",
  "dreamcatcher will have their own sitcom",
  "new pokemon inspired by chuu of loona",
  "twice will invent a new type of pizza",
  "disney will reboot hannah montana and momoland will guest star",
  "snsd sooyoung will play a superhero in the marvel cinematic universe",
  "fromis_9 will solve one of the Millennium Prize problems",
  "hyuna will get 3 pet lizards and call them socrates, plato and aristotles",
  "sunmi will eat a croissant",
  "a group under jyp will make cheese on a variety show and jyp himself will slap the cheese like people who sell cars",
  "someone will create new zodiac signs based on loona members",
  "twice dahyun wil dye her hair in rainbow colors and scream 'gay rights'",
  "red velvet irene will defeat thanos",
  "blackpink will be legally allowed by the korean government to kill 3 people ",
  "apink will find the philosopher stone and rule the world",
  "red velvet will learn how to wield swords for their next comeback",
  "exid hani will take you on a date and give you her jacket",
  "mamamoo will come to your house and do your homework",
  "f(x)",
  "IU"
];


function randomNumber(){
  try{
    number = Math.floor((Math.random() * 20) + 1); /*(numero a caso tra 1 e 100)*/
    result.style.display='';
    result.textContent='Your Prediction: '+predictions[number];
    return;
  } catch (e){
    alert('randomNumber ' + e);
  }
}
function gestoreLoad(){
  try{
    var button = document.getElementById('bottone');
    button.onclick = randomNumber;
    var result = document.getElementById('result');
  } catch (e){
      alert('gestoreLoad ' + e);
  }
  
};

window.onload = gestoreLoad;
