// 1. Load sounds
const sounds = {
  good: new Audio('/assets/sounds/star_twinkle.wav'),
  bad:  new Audio('/assets/sounds/star_glimmer.wav')
};

// 2. Map blink animation IDs to sounds
const blinkToSound = {
  flashGood1: sounds.good,
  flashBad1:  sounds.bad
};

// 3. Attach listeners to SVG animations
Object.keys(blinkToSound).forEach(animId => {
  const anim = document.getElementById(animId);
  if (!anim) return;

  anim.addEventListener("repeatEvent", () => {
    const snd = blinkToSound[animId];
    snd.currentTime = 0;
    snd.play();
  });
});
