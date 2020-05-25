console.log('script working!')

var game = {};

game.scenes = {

  field: {
    image: 'field.png',
    text: 'You find yourself at a crossroads. Many pass through here each day, though most determine their destination beforehand.',
    buttons: [
      {
        text: 'Head straight to the farm.',
        next: 'farm1',
        color: 'pastel-orange'
      },
      {
        text: 'Head left to the forest.',
        next: 'forest1',
        color: 'pastel-green'
      },
      {
        text: 'Head right to the town.',
        next: 'town1',
        color: 'pastel-red'
      },
      {
        text: 'Head behind you to the lake.',
        next: 'lake1',
        color: 'pastel-yellow'
      },
    ],
  },
  field2: {
    image: 'field.png',
    text: "You've had an eventful time in this small part of the world. Maybe you'll wander a while longer...",
    buttons: [
      {
        text: 'Meander.',
        next: 'end',
        color: 'pastel-pink'
      },
    ],
  },
  farm1: {
    image: 'farm1.png',
    text: 'The road out here is not so well worn, and the grass grows tall and wild. This house looks like it could have stood here since before you were born.',
    buttons: [
      {
        text: '"Hello, is anyone home?"',
        next: 'farm2',
        color: 'pastel-green'
      },
      {
        text: 'Leave the house alone and go back to the field. Wouldn\'t want to disturb anyone.',
        next: 'field',
        color: 'pastel-orange'
      },
    ],
  },
  farm2: {
    image: 'farm2.png',
    text: "\"Why, hello there. Sure has been a while since a youngun like you has come around here.\" You stay and chat a while, as old friends might. The weather is warm and time moves slowly.",
    buttons: [
      {
        text: 'Old folks have lived some interesting lives. Head back to the field with newfound wisdom.',
        next: 'field',
        color: 'pastel-green'
      },
    ],
  },
  forest1: {
    image: 'forest1.png',
    text: 'Life surrounds you, and it sure can be noisy. Birdsong and bugchirps echo all about, and every so often you catch glimpses of critters scurrying away from you.',
    buttons: [
      {
        text: "Let's see what else is here. Go deeper into the forest.",
        next: 'forest2',
        color: 'pastel-green'
      },
      {
        text: "I hate bugs, let's get out of here. Go back to the field.",
        next: 'field',
        color: 'pastel-orange'
      },
    ],
  },
  forest2: {
    image: 'forest2.png',
    text: "The noisy woods have gone quiet as a bear shambles out of the brush at the side of the trail. It's likely been a while since this fellow has seen another person.",
    buttons: [
      {
        text: 'Uh oh.',
        next: 'forest3',
        color: 'pastel-red'
      },
    ],
  },
  forest3: {
    image: 'forest1.png',
    text: "Its dark eyes size you up for a moment before it scrambles across the trail into the brush again. It's interesting to wonder where it's going, but now is probably not the time to find out.",
    buttons: [
      {
        text: 'Phew. Hurry back to the field.',
        next: 'field',
        color: 'pastel-green'
      },
    ],
  },
  town1: {
    image: 'town1.png',
    text: "A bustling town, full of strangers and still growing. So many people's memories and habits are woven through every part of it.",
    buttons: [
      {
        text: 'See what work needs doing.',
        next: 'town2',
        color: 'pastel-green'
      },
      {
        text: "It's a bit too busy here. Head back to the field.",
        next: 'field',
        color: 'pastel-orange'
      },
    ],
  },
  town2: {
    image: 'town2.png',
    text: "The job board says you can stay a night at the inn free and eat a good meal if you can cut a load of firewood for them. In need of both, you take the innkeeper up on the offer. His demeanor is pleasant, but he's not chatty, and neither are the other patrons. The food tastes great after a day of labor though, and you sleep like a rock.",
    buttons: [
      {
        text: 'Time to get going again. Head back to the field.',
        next: 'field',
        color: 'pastel-green'
      },
    ],
  },
  lake1: {
    image: 'lake1.png',
    text: "The water looks cool, and there's hardly anyone around. Frogs hop about in the mud, and cattails bob in the breeze.",
    buttons: [
      {
        text: 'Go for a swim.',
        next: 'lake2',
        color: 'pastel-green'
      },
      {
        text: 'Not much to do here. Head back to the field.',
        next: 'field',
        color: 'pastel-orange'
      },
    ],
  },
  lake2: {
    image: 'lake2.png',
    text: 'You climb out of the water feeling tired and refreshed. The breeze can be a little chilly, but the hot sun dries you quickly.',
    buttons: [
      {
        text: 'Head back to the field.',
        next: 'field',
        color: 'pastel-green'
      },
    ],
  },
  end: {
    image: 'end.png',
    text: "You've seen all there is to see!",
    buttons: [],
  },
  one: {
    image: 'test.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'two',
        color: 'pastel-green'
      },
      {
        text: 'world',
        next: 'one',
        color: 'pastel-orange'
      },
    ],
  },
  
  two: {
    image: 'test2.png',
    text: 'this is scene two.',
    buttons: [
      {
        text: 'hello again',
        next: 'one',
        color: 'pastel-green'
      },
      {
        text: 'world again',
        next: 'two',
        color: 'pastel-orange'
      },
    ],
  },

};

function loadScene(sceneName) {

  if (sceneName == 'field' &&
      localStorage.getItem('farm2') &&
      localStorage.getItem('forest2') &&
      localStorage.getItem('lake2') &&
      localStorage.getItem('town2')) {
    sceneName = 'field2';
  }

  let scene = game.scenes[sceneName];
  localStorage.setItem(sceneName, true);

  document.getElementById('art').src = scene.image;

  document.getElementById('text').textContent = scene.text;

  let choices = document.getElementById('choices');
  
  while (choices.firstChild) {
    choices.removeChild(choices.firstChild);
  }
  
  for (let butt of scene.buttons) { // haha
    let div = document.createElement('div');
    div.classList.add('col-12');
    
    let button = document.createElement('button');
    button.classList.add('btn', butt.color);
    button.textContent = butt.text;
    button.onclick = ()=>{loadScene(butt.next);};
    
    div.appendChild(button);
    choices.appendChild(div);
  }

}

function main() {
  loadScene('field');
}

main();