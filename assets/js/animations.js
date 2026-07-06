document.querySelector('#tile-4-0').addEventListener('click', () => {
  const bird = document.querySelector('#clumsy-bird');
  const wingLeft = document.querySelector('#wing-left');
  const wingRight = document.querySelector('#wing-right');

  // Wing flaps (during flight)
  function flapWings() {
    wingLeft.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(-25deg)' },
      { transform: 'rotate(0deg)' }
    ], {
      duration: 200,
      iterations: 6,
      easing: 'ease-in-out'
    });

    wingRight.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(25deg)' },
      { transform: 'rotate(0deg)' }
    ], {
      duration: 200,
      iterations: 6,
      easing: 'ease-in-out'
    });
  }
const tail = document.querySelector('#tail');

// Tail twitch (cute flick)
function twitchTail() {
  tail.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(15deg)' },
    { transform: 'rotate(-10deg)' },
    { transform: 'rotate(0deg)' }
  ], {
    duration: 300,
    iterations: 2,
    easing: 'ease-in-out'
  });
}

  //Wobble on the beam (relative)
  bird.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-10deg)' },
    { transform: 'rotate(10deg)' },
    { transform: 'rotate(0deg)' }
  ], {
    duration: 600,
    easing: 'ease-in-out'
  });

  //Slip off the beam (relative)
  setTimeout(() => {
    bird.animate([
      { transform: 'translate(0px,0px) rotate(0deg)' },
      { transform: 'translate(5px,25px) rotate(30deg)' }
    ], {
      duration: 400,
      fill: 'forwards',
      easing: 'ease-in'
    });
  }, 600);

  //Catch itself mid-air + flap wings
  setTimeout(() => {
    flapWings();
    bird.animate([
      { transform: 'translate(5px,25px) rotate(30deg)' },
      { transform: 'translate(-10px,-10px) rotate(-10deg)' }
    ], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-out'
    });
  }, 1000);

  // Step 4: Fly around the torii gate (relative)
  setTimeout(() => {
    twitchTail();
    bird.animate([
      { transform: 'translate(-10px,-10px) rotate(-10deg)' },
      { transform: 'translate(20px,10px) rotate(5deg)' },
      { transform: 'translate(0px,0px) rotate(0deg)' }
    ], {
      duration: 1500,
      fill: 'forwards',
      easing: 'ease-in-out'
    });
  }, 1500);
});
