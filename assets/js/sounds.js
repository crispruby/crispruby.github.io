// 1. Load sounds
const sounds = {
  goodstar: new Audio('/assets/sounds/star_twinkle.wav'),
  badstar:  new Audio('/assets/sounds/star_glimmer.wav'),
  musicnote:  new Audio('/assets/sounds/music_note.wav'),
  romanticchime:  new Audio('/assets/sounds/romantic_chime.wav'),
  winkingeye:  new Audio('/assets/sounds/winking_eye.wav'),
  electriczap:  new Audio('/assets/sounds/electric_zap.wav'),
  goodthunder:  new Audio('/assets/sounds/good_thunder.wav'),
  heartbreak:  new Audio('/assets/sounds/heart_break.wav'),
  liquidbubbles:  new Audio('/assets/sounds/water_bubble.wav'),
  screwingvalve:  new Audio('/assets/sounds/screw_unscrew.wav'),
  stirfry:  new Audio('/assets/sounds/sizzling_stir_fry.wav')
};
sounds.stirfry.loop = true;
sounds.stirfry.volume = 0.35; // gentle background sizzle
sounds.stirfry.play();
// 2. Map blink animation IDs to sounds
const blinkToSound = {
  flashGood1: sounds.goodstar,
  flashBad1:  sounds.badstar,
  flashMusic1:  sounds.musicnote,
  flashHeart1:  sounds.romanticchime,
  flashEye2:  sounds.winkingeye,
  flashBolt1:  sounds.electriczap,
  flashHero1:  sounds.goodthunder,
  flashBreak1:  sounds.heartbreak,
  spinningValve1: sounds.screwingvalve,
  spillingWater1: sounds.liquidbubbles,
  stirFry: sounds.stirfry
};

// 3. Attach listeners to SVG animations
Object.keys(blinkToSound).forEach(animId => {
  const anim = document.getElementById(animId);
  if (!anim) return;

  anim.addEventListener("repeatEvent", () => {
    const snd = blinkToSound[animId];
    const clone = snd.cloneNode();
    clone.play();
  });
});
