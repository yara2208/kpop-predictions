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
  "red velvet will accidentally summon a demon during one of their concerts",
  "exid hani will take you on a date and give you her jacket",
  "mamamoo will come to your house and do your homework",
  "f(x) will...have a comeback...maybe...",
  "iu will adopt the twice members as her own daughters",
  "next big music award on mars, idols will perform in spacesuits",
  "gfriend will show up at mamas and sing gregorian chants",
  "wjsn will open a youtube channel where they prank other idols",
  "sm will debut nct antarctica, line up: 10 penguins wearing wigs",
  "park bom will have a nice and peaceful life, not a prediction just my heartfelt wish for her",
  "pristin will become a bowling team",
  "gugudan wil try genres never touched by kpop before, like power noise and progressive bluegrass",
  "oh my girl will learn how to wield swords for their next comeback",
  "chungha will be the first idol to say 'yeet'",
  "jk rowling will write a song for snsd",
  "boa will collab with enya and smash mouth",
  "clc will cover 'Some People Know All Too Well How Bad Liquorice, Or Any Candy For That Matter, Can Taste When Having Laid Out In The Sun Too Long - And I Think I Just Ate Too Much' (yes this song exists, google it)",
  "weki meki will adopt a dachshund named sausage and sausage will appear in their mvs wearing cute outfits that match with the girls' outfits",
  "g(i)-dle will cover rick astley's never gonna give you up",
  "during awards season, lovelyz will wear cowboy hats at red carpets, but the hats will keep getting bigger and bigger at every event. they will never explain this",
  "new girl group named flower girls, cute concept, main genre: death metal",
  "tiffany young will start tweeting in scottish out of nowhere",
  "new variety show where canadians idols live in australia for a week and australian idols live in canada for a week",
  "collab between seventeen and got7 called: 'seventeenxgot7=119' (i had to use a calculator to make this stupid joke)",
  "exid will release kidz bop version of all their songs"
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
