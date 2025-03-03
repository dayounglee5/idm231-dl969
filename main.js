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



const signs = [
  {
    name: 'aries',
    animal: 'bartholomew bear',
    image: '/media/pictures/bear,jpg',
    sound: '/media/sounds/bear-sound-effect.mp3'
  },
  {
    name: 'sagittarius',
    animal: 'munro scottie dog',
    image: '/media/pictures/dog.jpg',
    sound: '/media/sounds/dog-sound-effect.mp3'

  },
  {
    name: 'gemini',
    animal: 'brooke otter',
    image: '/media/pictures/otter.jpg',    
    sound: '/media/sounds/otter-sound-effect.mp3'

  },
  {
    name: 'aquarius',
    animal: 'willow hedgehot',
    image: '/media/pictures/hedgehog.jpg',
    sound: '/media/sounds/axolotl-sound-effect.mp3'

  },
  {
    name: 'cancer',
    animal: 'delia duck',
    image: 'duck.jpg',
    sound: '/media/sounds/duck-sound-effect.mp3'

  },
  {
    name: 'leo',
    animal: 'peanut penguin',
    image: '/media/pictures/penguin.jpg',
    sound: '/media/sounds/penguin-sound-effect.mp3'

  },
  {
    name: 'libra',
    animal: 'iris siamese cat',
    image: '/media/pictures/cat.jpg',
    sound: '/media/sounds/cat-sound-effect.mp3'

  },
  {
    name: 'pisces',
    animal: 'tully turtle',
    image: '/media/pictures/turtle.jpg',
    sound: '/media/sounds/turtle-sound-effect.mp3'

  },
  {
    name: 'taurus',
    animal:'clyde capybara',
    image: '/media/pictures/capybara.jpg',
    sound: '/media/sounds/capybara-sound-effect.mp3'

  },
  {
    name: 'scorpio',
    animal: 'odyssey octopus',
    image: '/media/pictures/octopus.jpg',
    sound: '/media/sounds/octopus-sound-effect.mp3'

  },
  {
    name: 'virgo',
    animal: 'archie dinosaur',
    image: '/media/pictures/dinosaur.jpg',
    sound: '/media/sounds/dinosaur-sound-effect.mp3'

  },
  {
    name: 'capricorn',
    animal: 'myrtle hippopotamus',
    image: '/media/pictures/hippo.jpg',
    sound: '/media/sounds/hippo-sound-effect.mp3'

  },

];


// close out button
const closeBtn = document.querySelector('.close-btn');
function closeCard(){
  const card = document.getElementById('.jellycat-card');
  card.style.display = 'none';
}
closeBtn.addEventListener('click', closeCard);




const userSubmitButton = document.getElementById('submit-button');

userSubmitButton.addEventListener('click', () => {
  console.log('button clicked')
  const userBirthday = document.getElementById('date-picker').value;
  console.log('this is your birthday ', userBirthday);
})


const helpImg = document.querySelector('.help-button');
const helpBubble = document.getElementById('need-help');
const helpText = document.querySelector('.help-text');

helpImg.addEventListener('click', function() {
    helpBubble.classList.add('expand');
    helpText.textContent = 'instructions:';
});

// close out button for help
const closeButton = document.querySelector('.close-btn-help');
function closeHelp() {
    const helpContent = document.getElementById('need-help');
    helpContent.style.display = 'none'; 
}
closeButton.addEventListener('click', closeHelp);


