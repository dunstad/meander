console.log('script working!')

var game = {};

game.scenes = {

  field: {
    image: 'field.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'farm1',
        color: 'pastel-green'
      },
      {
        text: 'hello hello hello',
        next: 'forest1',
        color: 'pastel-green'
      },
      {
        text: 'hello hello hello',
        next: 'town1',
        color: 'pastel-green'
      },
      {
        text: 'world',
        next: 'lake1',
        color: 'pastel-orange'
      },
    ],
  },
  farm1: {
    image: 'farm1.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'farm2',
        color: 'pastel-green'
      },
      {
        text: 'world',
        next: 'field',
        color: 'pastel-orange'
      },
    ],
  },
  farm2: {
    image: 'farm2.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'field',
        color: 'pastel-green'
      },
    ],
  },
  forest1: {
    image: 'forest1.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'forest2',
        color: 'pastel-green'
      },
      {
        text: 'world',
        next: 'field',
        color: 'pastel-orange'
      },
    ],
  },
  forest2: {
    image: 'forest2.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'field',
        color: 'pastel-green'
      },
    ],
  },
  town1: {
    image: 'town1.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'town2',
        color: 'pastel-green'
      },
      {
        text: 'world',
        next: 'field',
        color: 'pastel-orange'
      },
    ],
  },
  town2: {
    image: 'town2.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'field',
        color: 'pastel-green'
      },
    ],
  },
  lake1: {
    image: 'lake1.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'lake2',
        color: 'pastel-green'
      },
      {
        text: 'world',
        next: 'field',
        color: 'pastel-orange'
      },
    ],
  },
  lake2: {
    image: 'lake2.png',
    text: 'this is scene one.',
    buttons: [
      {
        text: 'hello hello hello',
        next: 'field',
        color: 'pastel-green'
      },
    ],
  },
  end: {
    image: 'end.png',
    text: "You've seen all there is to see. Thanks!",
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