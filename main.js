function getZodiac(month, day) {
  let yourSign;
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      yourSign =  'capricorn';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      yourSign = 'sagittarius';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      yourSign = 'scorpio';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      yourSign = 'libra';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      yourSign= 'virgo';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      yourSign= 'leo';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      yourSign= 'cancer';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      yourSign= 'gemini';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      yourSign= 'taurus';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      yourSign= 'aries';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      yourSign= 'pisces';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      yourSign= 'aquarius';
    } else return null;

    return yourSign;
  }

// console.log(getZodiac(1, 20));


//help 
const helpImg = document.querySelector('.help-button');
const helpBubble = document.getElementById('need-help');
const helpText = document.querySelector('.help-text');
const closeButton = document.querySelector('.close-btn-help');
closeButton.style.display = 'none';



helpImg.addEventListener('click', function() {
    if (helpBubble.classList.contains('expand')) {
      collapseHelp();
    } else {
      expandHelp();
    }
});
helpBubble.addEventListener('click', function(){
  if (helpBubble.classList.contains('expand')) {
    collapseHelp();
  } else {
    expandHelp();
  }
});
function expandHelp() {
  helpBubble.classList.add('expand');
  helpText.textContent = 'instructions:';
  closeButton.style.display = 'block';
}

function collapseHelp() {
  helpBubble.classList.remove('expand');
  document.getElementById('need-help').style.display = 'block';
  helpText.textContent = 'click me for help!';
  closeButton.style.display = 'none';
}

closeButton.addEventListener('click', collapseHelp);



//bear-card
document.addEventListener("DOMContentLoaded", function () {
  const bearImage = document.querySelector("img[alt='bear']");
  const bearCard = document.getElementById("bear"); 
  const closeButton = bearCard.querySelector(".close-btn"); 
  const bearAudio= document.getElementById("audio-bear");
  
  function closeCard(){
    bearCard.classList.add("hidden");
    bearAudio.pause();
  }
  bearImage.addEventListener("click", function () {
      bearCard.classList.remove("hidden");
      bearAudio.play();

  });

  closeButton.addEventListener("click", closeCard);
});

//capybara-card
document.addEventListener("DOMContentLoaded", function () {
  const capybaraImage = document.querySelector("img[alt='capybara']");
  const capybaraCard = document.getElementById("capybara"); 
  const closeButton = capybaraCard.querySelector(".close-btn"); 
  const capybaraAudio= document.getElementById("audio-capybara");
  
  function closeCard(){
    capybaraCard.classList.add("hidden");
    capybaraAudio.pause();
  }
  capybaraImage.addEventListener("click", function () {
      capybaraCard.classList.remove("hidden");
      capybaraAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});


//otter-card
document.addEventListener("DOMContentLoaded", function () {
  const otterImage = document.querySelector("img[alt='otter']");
  const otterCard = document.getElementById("otter"); 
  const closeButton = otterCard.querySelector(".close-btn"); 
  const otterAudio= document.getElementById("audio-otter");
  
  function closeCard(){
    otterCard.classList.add("hidden");
    otterAudio.pause();
  }
  otterImage.addEventListener("click", function () {
      otterCard.classList.remove("hidden");
      otterAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

//duck-card
document.addEventListener("DOMContentLoaded", function () {
  const duckImage = document.querySelector("img[alt='duck']");
  const duckCard = document.getElementById("duck"); 
  const closeButton = duckCard.querySelector(".close-btn"); 
  const duckAudio= document.getElementById("audio-duck");
  
  function closeCard(){
    duckCard.classList.add("hidden");
    duckAudio.pause();
  }
  duckImage.addEventListener("click", function () {
      duckCard.classList.remove("hidden");
      duckAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

//penguin-card
document.addEventListener("DOMContentLoaded", function () {
  const penguinImage = document.querySelector("img[alt='penguin']");
  const penguinCard = document.getElementById("penguin"); 
  const closeButton = penguinCard.querySelector(".close-btn"); 
  const penguinAudio= document.getElementById("audio-penguin");
  
  function closeCard(){
    penguinCard.classList.add("hidden");
    penguinAudio.pause();
  }
  penguinImage.addEventListener("click", function () {
      penguinCard.classList.remove("hidden");
      penguinAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

// dinosaur-card
document.addEventListener("DOMContentLoaded", function () {
  const dinosaurImage = document.querySelector("img[alt='dinosaur']");
  const dinosaurCard = document.getElementById("dinosaur"); 
  const closeButton = dinosaurCard.querySelector(".close-btn"); 
  const dinosaurAudio= document.getElementById("audio-dinosaur");
  
  function closeCard(){
    dinosaurCard.classList.add("hidden");
    dinosaurAudio.pause();
  }
  dinosaurImage.addEventListener("click", function () {
      dinosaurCard.classList.remove("hidden");
      dinosaurAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

//cat-card
document.addEventListener("DOMContentLoaded", function () {
  const catImage = document.querySelector("img[alt='cat']");
  const catCard = document.getElementById("cat"); 
  const closeButton = catCard.querySelector(".close-btn"); 
  const catAudio= document.getElementById("audio-cat");
  
  function closeCard(){
    catCard.classList.add("hidden");
    catAudio.pause();
  }
  catImage.addEventListener("click", function () {
      catCard.classList.remove("hidden");
      catAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

//octopus-card
document.addEventListener("DOMContentLoaded", function () {
  const octopusImage = document.querySelector("img[alt='octopus']");
  const octopusCard = document.getElementById("octopus"); 
  const closeButton = octopusCard.querySelector(".close-btn"); 
  const octopusAudio= document.getElementById("audio-octopus");
  
  function closeCard(){
    octopusCard.classList.add("hidden");
    octopusAudio.pause();
  }
  octopusImage.addEventListener("click", function () {
      octopusCard.classList.remove("hidden");
      octopusAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

//dog-card
document.addEventListener("DOMContentLoaded", function () {
  const dogImage = document.querySelector("img[alt='dog']");
  const dogCard = document.getElementById("dog"); 
  const closeButton = dogCard.querySelector(".close-btn"); 
  const dogAudio= document.getElementById("audio-dog");
  
  function closeCard(){
    dogCard.classList.add("hidden");
    dogAudio.pause();
  }
  dogImage.addEventListener("click", function () {
      dogCard.classList.remove("hidden");
      dogAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

//hippo-card
document.addEventListener("DOMContentLoaded", function () {
  const hippoImage = document.querySelector("img[alt='hippo']");
  const hippoCard = document.getElementById("hippo"); 
  const closeButton = hippoCard.querySelector(".close-btn"); 
  const hippoAudio= document.getElementById("audio-hippo");
  
  function closeCard(){
    hippoCard.classList.add("hidden");
    hippoAudio.pause();
  }
  hippoImage.addEventListener("click", function () {
      hippoCard.classList.remove("hidden");
      hippoAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

//hedgehog-card
document.addEventListener("DOMContentLoaded", function () {
  const hedgehogImage = document.querySelector("img[alt='hedgehog']");
  const hedgehogCard = document.getElementById("hedgehog"); 
  const closeButton = hedgehogCard.querySelector(".close-btn"); 
  const hedgehogAudio= document.getElementById("audio-hedgehog");
  
  function closeCard(){
    hedgehogCard.classList.add("hidden");
    hedgehogAudio.pause();
    
  }
  hedgehogImage.addEventListener("click", function () {
      hedgehogCard.classList.remove("hidden");
      hedgehogAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});


//turtle-card
document.addEventListener("DOMContentLoaded", function () {
  const turtleImage = document.querySelector("img[alt='turtle']");
  const turtleCard = document.getElementById("turtle"); 
  const closeButton = turtleCard.querySelector(".close-btn"); 
  const turtleAudio= document.getElementById("audio-turtle");
  
  function closeCard(){
    turtleCard.classList.add("hidden");
    turtleAudio.pause();
    
  }
  turtleImage.addEventListener("click", function () {
      turtleCard.classList.remove("hidden");
      turtleAudio.play();
  });

  closeButton.addEventListener("click", closeCard);
});

// user input
const userSubmitButton = document.getElementById('submit-button');

userSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const dateInput = document.getElementById('date-picker');
  const userBirthday = new Date(dateInput.value);
  const month = userBirthday.getMonth()+1;
  const day = userBirthday.getDate() +1;
  const year = userBirthday.getFullYear();

  const zodiac = getZodiac(month,day,year);
  // console.log('your zodiac is', zodiac);

  showCardBasedonZodiac(zodiac);

  // console.log('button clicked')
  // console.log('this is your birthday ', userBirthday);
})

function showCardBasedonZodiac(zodiac) {

  const bearCard = document.getElementById('bear');
  const dogCard = document.getElementById('dog');
  const otterCard = document.getElementById('otter');
  const hedgehogCard = document.getElementById('hedgehog');
  const duckCard = document.getElementById('duck');
  const penguinCard = document.getElementById('penguin');
  const catCard = document.getElementById('cat');
  const turtleCard = document.getElementById('turtle');
  const capybaraCard = document.getElementById('capybara');
  const octopusCard = document.getElementById('octopus');
  const dinosaurCard = document.getElementById('dinosaur');
  const hippoCard = document.getElementById('hippo');

  if (zodiac === 'aries') {
    bearCard.classList.remove('hidden');
    document.getElementById('audio-bear').play();
  } else if (zodiac === 'sagittarius') {
    dogCard.classList.remove('hidden');
    document.getElementById('audio-dog').play();
  } else if (zodiac === 'gemini') {
    otterCard.classList.remove('hidden');
    document.getElementById('audio-otter').play();
  } else if (zodiac === 'aquarius') {
    hedgehogCard.classList.remove('hidden');
    document.getElementById('audio-hedgehog').play();
  } else if (zodiac === 'cancer') {
    duckCard.classList.remove('hidden');
    document.getElementById('audio-duck').play();
  } else if (zodiac === 'leo') {
    penguinCard.classList.remove('hidden');
    document.getElementById('audio-penguin').play();
  } else if (zodiac === 'libra') {
    catCard.classList.remove('hidden');
    document.getElementById('audio-cat').play();
  } else if (zodiac === 'pisces') {
    turtleCard.classList.remove('hidden');
    document.getElementById('audio-turtle').play();
  } else if (zodiac === 'taurus') {
    capybaraCard.classList.remove('hidden');
    document.getElementById('audio-capybara').play();
  } else if (zodiac === 'scorpio') {
    octopusCard.classList.remove('hidden');
    document.getElementById('audio-octopus').play();
  } else if (zodiac === 'virgo') {
    dinosaurCard.classList.remove('hidden');
    document.getElementById('audio-dinosaur').play();
  } else if (zodiac === 'capricorn') {
    hippoCard.classList.remove('hidden');
    document.getElementById('audio-hippo').play();
  }

}
