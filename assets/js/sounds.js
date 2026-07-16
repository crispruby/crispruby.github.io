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
  stirfry:  new Audio('/assets/sounds/sizzling_stir_fry.wav'),
  yogamusic:  new Audio('/assets/sounds/yoga_music.wav'),
  clumsybird:  new Audio('/assets/sounds/clumsy_bird.wav'),
  chirp1:  new Audio('/assets/sounds/chirp1.wav'),
  chirp2:  new Audio('/assets/sounds/chirp2.wav'),
  chirp3:  new Audio('/assets/sounds/chirp3.wav'),
  chirp4:  new Audio('/assets/sounds/chirp4.wav'),
  sewer_drops:  new Audio('/assets/sounds/sewer_drops.wav')
};
// Unlock audio autoplay for all bird chirps
//setTimeout(() => {
//const unlockList = [sounds.chirp1, sounds.chirp2, sounds.chirp3, sounds.chirp4];
 // unlockList.forEach(snd => {
 //   snd.play().then(() => {
 //     snd.pause();
 //     snd.currentTime = 0;
 //   }).catch(() => {});
 // });
//}, 500);
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
  stirFry: sounds.stirfry,
  yogaMusic: sounds.yogamusic,
  birdChirps: sounds.clumsybird,
  birdChirp1: sounds.chirp1,
  birdChirp2: sounds.chirp2,
  birdChirp3: sounds.chirp3,
  birdChirp4: sounds.chirp4,
  sewerDrops: sounds.sewer_drops
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
let sewerCounter = 0;
const sewerAnim = document.getElementById("sewerDrops");
if (sewerAnim) {
  sewerAnim.addEventListener("repeatEvent", () => {
    sewerCounter++;

    if (sewerCounter >= 7) {
      sewerCounter = 0;
      const snd = sounds.sewer_drops.cloneNode();
      snd.play();
    }
  });
}
