let birdBusy = false;
function runBirdAnimation() {
  birdBusy = true;
  const bird = document.querySelector('#clumsy-bird');
  const wingLeft = document.querySelector('#wing-left');
  const wingRight = document.querySelector('#wing-right');
  const tail = document.querySelector('#tail');
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
  // Wobble
  bird.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-10deg)' },
    { transform: 'rotate(10deg)' },
    { transform: 'rotate(0deg)' }
  ], {
    duration: 600,
    easing: 'ease-in-out'
  });
  // Slip
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

  // Catch + flap
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
  // Fly around + tail twitch
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
setTimeout(() => {
  birdBusy = false;
}, 3200);
}
setInterval(() => {
  if (birdBusy) return; // skip if bird is flying
  const bird = document.querySelector('#clumsy-bird');
  bird.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-5deg)' },
    { transform: 'rotate(5deg)' },
    { transform: 'rotate(0deg)' }
  ], {
    duration: 800,
    easing: 'ease-in-out'
  });
}, 5000 + Math.random() * 3000); // 5–8 seconds
setInterval(() => {
  if (birdBusy) return;
  // Pick a random chirp
  const chirps = [
    sounds.chirp1,
    sounds.chirp2,
    sounds.chirp3,
    sounds.chirp4,
    sounds.delayed_chirp3,
    sounds.delayed_chirp4
  ];

  const randomChirp = chirps[Math.floor(Math.random() * chirps.length)];
  const clone = randomChirp.cloneNode();
  clone.play();
  runBirdAnimation();
}, 12000 + Math.random() * 3000); // 12–15 seconds
