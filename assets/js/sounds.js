window.addEventListener("load", () => {
  // 1. Load normal HTML <audio> sounds 
  const sounds = {
    goodstar: new Audio('/assets/sounds/star_twinkle.wav'),
    badstar: new Audio('/assets/sounds/star_glimmer.wav'),
    musicnote: new Audio('/assets/sounds/music_note.wav'),
    romanticchime: new Audio('/assets/sounds/romantic_chime.wav'),
    winkingeye: new Audio('/assets/sounds/winking_eye.wav'),
    electriczap: new Audio('/assets/sounds/electric_zap.wav'),
    goodthunder: new Audio('/assets/sounds/good_thunder.wav'),
    heartbreak: new Audio('/assets/sounds/heart_break.wav'),
    liquidbubbles: new Audio('/assets/sounds/water_bubble.wav'),
    screwingvalve: new Audio('/assets/sounds/screw_unscrew.wav'),
    stirfry: new Audio('/assets/sounds/sizzling_stir_fry.wav'),
    yogamusic: new Audio('/assets/sounds/yoga_music.wav'),
    chirp1: new Audio('/assets/sounds/chirp1.wav'),
    chirp2: new Audio('/assets/sounds/chirp2.wav'),
    chirp3: new Audio('/assets/sounds/chirp3.wav'),
    chirp4: new Audio('/assets/sounds/chirp4.wav')
  };
  // 2. Web Audio API for sewer drip (autoplay-safe)
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  let sewerBuffer = null;
  // Load sewer sound into an audio buffer
  fetch('/assets/sounds/sewer_drops.wav')
    .then(res => res.arrayBuffer())
    .then(data => audioCtx.decodeAudioData(data))
    .then(buffer => {
      sewerBuffer = buffer;
      console.log("DEBUG: sewer sound loaded");
    });
  // Function to play sewer drip sound
  function playSewerSound() {
    if (!sewerBuffer) return; // not loaded yet
    const source = audioCtx.createBufferSource();
    source.buffer = sewerBuffer;
    source.connect(audioCtx.destination);
    source.start(0);
  }
  // Load spark sound into an audio buffer
  let sparkBuffer = null;
  fetch('/assets/sounds/Sparks.wav')
   .then(res => res.arrayBuffer())
   .then(data => audioCtx.decodeAudioData(data))
   .then(buffer => {
     sparkBuffer = buffer;
     console.log("DEBUG: spark sound loaded");
  });
  // Function to play Propane Tank Spark sound
  function playSparkSound() {
   if (!sparkBuffer) return;
   const source = audioCtx.createBufferSource();
   source.buffer = sparkBuffer;
   source.connect(audioCtx.destination);
   source.start(0);
  }
  let tankCycle = 0;
  setInterval(() => {
   tankCycle++;
   if (tankCycle % 3 === 0) {        // every 3rd cycle
    if (Math.random() < 0.9) {      // 90% chance
      playSparkSound();
    }
   }
  }, 3000); // matches tank roll duration
  // 3. Unlock HTML <audio> sounds (bird chirps etc.)
  setTimeout(() => {
    const unlockList = [sounds.chirp1, sounds.chirp2, sounds.chirp3, sounds.chirp4];
    unlockList.forEach(snd => {
      snd.play().then(() => {
        snd.pause();
        snd.currentTime = 0;
      }).catch(() => {});
    });
  }, 500);
  window.addEventListener("click", () => {
    Object.values(sounds).forEach(snd => {
      snd.play().then(() => {
        snd.pause();
        snd.currentTime = 0;
      }).catch(() => {});
    });
  }, { once: true });
  // 4. Blink animation → sound mapping
  const blinkToSound = {
    flashGood1: sounds.goodstar,
    flashBad1: sounds.badstar,
    flashMusic1: sounds.musicnote,
    flashHeart1: sounds.romanticchime,
    flashEye2: sounds.winkingeye,
    flashBolt1: sounds.electriczap,
    flashHero1: sounds.goodthunder,
    flashBreak1: sounds.heartbreak,
    spinningValve1: sounds.screwingvalve,
    spillingWater1: sounds.liquidbubbles,
    stirFry: sounds.stirfry,
    yogaMusic: sounds.yogamusic,
    birdChirp1: sounds.chirp1,
    birdChirp2: sounds.chirp2,
    birdChirp3: sounds.chirp3,
    birdChirp4: sounds.chirp4
  };
  Object.keys(blinkToSound).forEach(animId => {
    const anim = document.getElementById(animId);
    if (!anim) return;
    anim.addEventListener("repeatEvent", () => {
      const snd = blinkToSound[animId];
      const clone = snd.cloneNode();
      clone.play();
    });
  });
  // 5. Automatic sewer drip timer (Web Audio API)
  let sewerCounter = 0;
  setInterval(() => {
    sewerCounter++;
    console.log("DEBUG: sewer tick", sewerCounter);
    if (sewerCounter >= 7) {
      sewerCounter = 0;
      playSewerSound(); // Web Audio API version
    }
  }, 1000);
});
