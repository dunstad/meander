console.log('script working!')

var game = {};

game.scenes = {

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

function loadScene(scene) {

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
    button.onclick = ()=>{loadScene(game.scenes[butt.next]);};
    
    div.appendChild(button);
    choices.appendChild(div);
  }

}

function main() {
  loadScene(game.scenes.one);
}

main();