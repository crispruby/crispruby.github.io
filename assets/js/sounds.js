window.addEventListener("DOMContentLoaded", () => {
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
  // 2. Web Audio API (autoplay-safe)
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // --- Sewer drip ---
  let sewerBuffer = null;
  fetch('/assets/sounds/sewer_drops.wav')
    .then(res => res.arrayBuffer())
    .then(data => audioCtx.decodeAudioData(data))
    .then(buffer => {
      sewerBuffer = buffer;
      console.log("DEBUG: sewer sound loaded");
    });
  function playSewerSound() {
    if (!sewerBuffer) return;
    const source = audioCtx.createBufferSource();
    source.buffer = sewerBuffer;
    source.connect(audioCtx.destination);
    source.start(0);
  }
  // --- Propane spark ---
  let sparkBuffer = null;
  fetch('/assets/sounds/Sparks.wav')
    .then(res => res.arrayBuffer())
    .then(data => audioCtx.decodeAudioData(data))
    .then(buffer => {
      sparkBuffer = buffer;
      console.log("DEBUG: spark sound loaded");
    });
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
    if (tankCycle % 3 === 0) {
      if (Math.random() < 0.9) {
        playSparkSound();
      }
    }
  }, 3000);
  // --- Propane explosion burst ---
  let burstBuffer = null;
  fetch('/assets/sounds/propane_burst.wav')
    .then(res => res.arrayBuffer())
    .then(data => audioCtx.decodeAudioData(data))
    .then(buffer => {
      burstBuffer = buffer;
      console.log("DEBUG: Burst sound loaded");
    });
  function playBurstSound() {
    if (!burstBuffer) return;
    const source = audioCtx.createBufferSource();
    source.buffer = burstBuffer;
    source.connect(audioCtx.destination);
    source.start(0);
  }
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
  // 5. Automatic sewer drip timer
  let sewerCounter = 0;
  setInterval(() => {
    sewerCounter++;
    console.log("DEBUG: sewer tick", sewerCounter);
    if (sewerCounter >= 7) {
      sewerCounter = 0;
      playSewerSound();
    }
  }, 1000);
  // Unlock AudioContext
  let audioUnlocked = false;
  function unlockAudioCtx() {
    const buffer = audioCtx.createBuffer(1, 1, audioCtx.sampleRate);
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start(0);
    audioUnlocked = true;
  }
  window.addEventListener("click", () => {
    unlockAudioCtx();
  }, { once: true });
  // Explosion beginEvent → play burst
  const shockRingAnim = document.getElementById('shockRingAnim');
  if (shockRingAnim) {
    shockRingAnim.addEventListener("beginEvent", () => {
      console.log("Explosion beginEvent fired");
      playBurstSound();
    });
  }
  // 6. CAT RUMMAGE SOUND 
  let rummageBuffer = null;
  function loadRummageSound() {
    fetch('/assets/sounds/rummage.wav')
      .then(res => res.arrayBuffer())
      .then(data => audioCtx.decodeAudioData(data))
      .then(buffer => {
        rummageBuffer = buffer;
        console.log("DEBUG: rummage sound loaded");
      });
  }
  function playRummage() {
    if (!rummageBuffer) return;
    const src = audioCtx.createBufferSource();
    src.buffer = rummageBuffer;
    src.connect(audioCtx.destination);
    src.start(0);
  }
  // Cat animation: begin="2s" dur="3s" → ends at 5s
  function scheduleCatRummage() {
    setTimeout(() => {
      console.log("DEBUG: cat rummage triggered");
      playRummage();
    }, 5000);
  }
  // Load rummage sound + schedule playback once audio is unlocked
  window.addEventListener("click", () => {
    if (!audioUnlocked) return;
    loadRummageSound();
    scheduleCatRummage();
  }, { once: true });
});
