document.querySelector('#tile-4-0').addEventListener('click', () => {
  const bird = document.querySelector('#clumsy-bird');

  // Step 1: Wobble on the beam
  bird.animate([
    { transform: 'rotate(0deg)' },
  { transform: 'rotate(-10deg)' },
  { transform: 'rotate(10deg)' },
  { transform: 'rotate(0deg)' }
  ], {
    duration: 600,
    easing: 'ease-in-out'
  });

  // Step 2: Slip off the beam
  setTimeout(() => {
    bird.animate([
      { transform: 'translate(70px,8px) rotate(30deg)' },
      { transform: 'translate(75px,30px) rotate(60deg)' }
    ], {
      duration: 400,
      fill: 'forwards',
      easing: 'ease-in'
    });
  }, 600);

  // Step 3: Catch itself mid-air
  setTimeout(() => {
    bird.animate([
      { transform: 'translate(75px,30px) rotate(60deg)' },
      { transform: 'translate(60px,0px) rotate(0deg)' }
    ], {
      duration: 500,
      fill: 'forwards',
      easing: 'ease-out'
    });
  }, 1000);

  // Step 4: Fly around the torii gate
  setTimeout(() => {
    bird.animate([
      { transform: 'translate(60px,0px) rotate(0deg)' },
      { transform: 'translate(20px,20px) rotate(-20deg)' },
      { transform: 'translate(90px,40px) rotate(10deg)' },
      { transform: 'translate(70px,8px) rotate(30deg)' }
    ], {
      duration: 1500,
      fill: 'forwards',
      easing: 'ease-in-out'
    });
  }, 1500);
});
