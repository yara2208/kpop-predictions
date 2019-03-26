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
  "twice dahyun will dye her hair in rainbow colors and scream 'gay rights'",
  "red velvet irene will defeat thanos",
  "blackpink will be legally allowed by the korean government to kill 3 people ",
  "apink will find the philosopher stone and rule the world",
  "red velvet will learn how to wield swords for their next comeback",
  "exid hani will take you on a date and give you her jacket",
  "mamamoo will come to your house and do your homework",
  "f(x) will...have a comeback...maybe...",
  "iu will adopt the twice members and her own daughters",
  "next big music award on mars, idols will perform in spacesuits",
  "gfriend will show up at mamas and sing gregorian chants",
  "wjsn will open a youtube channel where they prank other idols",
  "sm will debut nct antarctica, line up: 10 penguins wearing wigs",
  "park bom will have a nice and peaceful life, not a prediction just my heartfelt wish for her",
  "pristin will become a bowling team",
  "gugudan",
  "oh my girl",
  "chungha",
  "snsd",
  "boa",
  "clc",
  "weki meki will adopt dachshund named sausage and sausage will appear in their mvs wearing cute outfits that match with the girls' outfits",
  "g(i)-dle will cover rick astley's never gonna give you up",
  "lovelyz",
  "new girl group named flower girls, cute concept, main genre: death metal",
  "tiffany young",
  "new variety show where canadians idols live in australia for a week and australian idols live in canada for a week",
  "ah",
  "text"
];


function randomNumber(){
  try{
    number = Math.floor(Math.random() * 40); 
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
