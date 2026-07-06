document.querySelector('#tile-4-0').addEventListener('click', () => {
  const bird = document.querySelector('#clumsy-bird');

  // Step 1: Wobble on the beam (relative)
  bird.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-10deg)' },
    { transform: 'rotate(10deg)' },
    { transform: 'rotate(0deg)' }
  ], {
    duration: 600,
    easing: 'ease-in-out'
  });

  // Step 2: Slip off the beam (relative)
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

  // Step 3: Catch itself mid-air (relative)
  setTimeout(() => {
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
