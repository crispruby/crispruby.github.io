---
title: "Cycle Circuit"
permalink: /cycle-circuit/
layout: single
author_profile: true
header:
  image: /assets/images/WidePeaks.jpg
css: /assets/css/strava-dashboard.css
---
<div class="tile-world-wrapper">
 <!--<object data="/assets/images/tile-world.svg" type="image/svg+xml" width="500" height="500"></object> -->
  <svg id="tile-world" width="500" height="500" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
  <!-- 5x5 grid of 100x100 pixel tiles -->
  <!-- Row 0 -->
  <g id="tile-0-0" transform="translate(0,0)">
   <rect x="0" y="0" width="100" height="100" fill="#6cc66c" /> <!-- Grass -->
   <g class="road" data-rotation="0">
     <!-- Bottom → Right turn -->
    <path d="M 50 101 Q 54 54 101 50" stroke="#555" stroke-width="28" fill="none" stroke-linecap="butt" />
    <path d="M 50 101 Q 54 54 101 50" stroke="#ffdd33" stroke-width="4" fill="none" stroke-linecap="butt" />
    <g id="yoga-person" transform="translate(25,25)">
     <circle cx="0" cy="-3" r="3" fill="#333" /><!-- Head -->
     <line id="yogaTorso" x1="0" y1="0" x2="0" y2="12" stroke="#333" stroke-width="2"/>
     <!--Legs-->
     <line x1="0" y1="12" x2="-10" y2="18" stroke="#333" stroke-width="2" />
     <line x1="0" y1="12" x2="10" y2="18" stroke="#333" stroke-width="2" />
     <!--Left arm-->
     <line id="yogaArmLeft" x1="0" y1="2" x2="-10" y2="18" stroke="#333" stroke-width="2">
      <animate attributeName="x2" values="-10;-10;-10" dur="5s" repeatCount="indefinite" />
      <animate attributeName="y2" values="-8;18;-8" dur="5s" repeatCount="indefinite" />
     </line>
     <!--Right arm-->
     <line id="yogaArmRight" x1="0" y1="4" x2="10" y2="4" stroke="#333" stroke-width="2">
      <animate attributeName="x2" values="10;10;10" dur="5s" repeatCount="indefinite" />
      <animate attributeName="y2" values="18;-8;18" dur="5s" repeatCount="indefinite" />
     </line>
    </g>
    <g id="meditation-person" transform="translate(60,20)">
     <circle cx="0" cy="-4" r="3" fill="#333" /><!-- Head -->
     <!-- Torso (breathing only here) -->
     <ellipse cx="0" cy="5" rx="3" ry="6" fill="#333">
      <animate attributeName="rx" values="3;2;3" dur="6s" repeatCount="indefinite" />
     </ellipse>
     <!-- Arms (resting on knees) -->
     <line x1="-2" y1="4" x2="-7" y2="10" stroke="#333" stroke-width="2" />
     <line x1="2" y1="4" x2="7" y2="10" stroke="#333" stroke-width="2" />
     <!-- Legs (crossed) -->
     <line x1="-6" y1="12" x2="0" y2="8" stroke="#333" stroke-width="2" />
     <line x1="6" y1="12" x2="0" y2="8" stroke="#333" stroke-width="2" />
     <!-- Calves -->
     <line x1="-6" y1="12" x2="-1" y2="12" stroke="#333" stroke-width="2" />
     <line x1="6" y1="12" x2="1" y2="12" stroke="#333" stroke-width="2" />
     <!-- Feet -->
     <line x1="-1" y1="12" x2="2" y2="11" stroke="#333" stroke-width="2" />
     <line x1="1" y1="12" x2="-2" y2="11" stroke="#333" stroke-width="2" />
     <!-- Calm breath bubble -->
     <circle cx="4" cy="-4" r="1.5" fill="#fff" opacity="0.3">
      <animate attributeName="r" values="1.5;3;1.5" dur="6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite" />
     </circle>
    </g>
    <!-- Radio Music Box -->
    <g id="music-box" transform="translate(6,55)">
     <rect x="0" y="0" width="34" height="14" rx="3" fill="#b07a3c" stroke="#6a4a28" stroke-width="1" /><!-- Radio body -->
     <!-- Left speaker grill -->
     <circle cx="10" cy="7" r="3" fill="#333">
      <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite" /><!-- To play sound, id="yogaMusic" -->
     </circle>
     <!-- Left speaker: LEFT-side waves -->
     <path d="M 6 5 Q 3 7 6 9" stroke="#333" stroke-width="1" fill="none" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
     </path>
     <!-- Left speaker: RIGHT-side waves -->
     <path d="M 14 5 Q 17 7 14 9" stroke="#333" stroke-width="1" fill="none" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
     </path>
     <!-- Right speaker grill -->
     <circle cx="24" cy="7" r="3" fill="#333">
      <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite" />
     </circle>
     <!-- Right speaker: LEFT-side waves -->
     <path d="M 20 5 Q 17 7 20 9" stroke="#333" stroke-width="1" fill="none" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
     </path>
     <!-- Right speaker: RIGHT-side waves -->
     <path d="M 28 5 Q 31 7 28 9" stroke="#333" stroke-width="1" fill="none" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
     </path>
     <line x1="4" y1="0" x2="4" y2="-6" stroke="#333" stroke-width="1" /><!-- antenna -->
    </g>
   </g>
  </g>
  <g id="tile-1-0" transform="translate(100,0)">
   <!-- Background -->
   <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
   <!-- Alley Wall -->
   <rect x="0" y="0" width="100" height="40" fill="#e5e5e5" />
   <rect x="0" y="70" width="100" height="30" fill="#8B0000" />
   <!-- Road group (rotates) -->
   <g class="road" data-rotation="0">
    <path d="M -1 50 L 101 50" stroke="#555" stroke-width="28" stroke-linecap="butt" />
    <path d="M -1 50 L 101 50" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
     <!-- Ground clutter -->
     <path d="M 20 70 Q 25 75 30 70" stroke="#ccc" stroke-width="1" />
     <ellipse cx="40" cy="80" rx="6" ry="3" fill="#e0e0e0" />
     <!-- Graffiti: Sleeping Eye -->
     <g id="graffiti-dragon" transform="translate(10,8)">
      <path d="M 0 20 Q 20 0 40 20 Q 20 30 0 20" fill="#cfcfcf" stroke="#999" stroke-width="2" />
      <circle cx="20" cy="15" r="4" fill="#bbb" stroke="#888" stroke-width="1" />
      <path d="M 18 15 Q 20 17 22 15" stroke="#777" stroke-width="1" fill="none" />
      <text x="45" y="22" font-size="8" fill="#aaa">Zzz</text>
     </g>
     <!-- Old Pipe -->
     <g id="old-pipe" transform="translate(5,10)">
      <path d="M -1 50 L 50 100" stroke="#888" stroke-width="5" stroke-linecap="round" />
      <!-- Drip -->
      <ellipse id="pipe-drip" cx="45" cy="6" rx="2" ry="3" fill="#d0eaff" opacity="0.9">
       <animate attributeName="cy" values="6; 20" dur="0.6s" repeatCount="indefinite" />
       <animate attributeName="opacity" values="0.9; 0" dur="0.6s" repeatCount="indefinite" />
      </ellipse>
     </g>
     <!-- Sewer Grate -->
     <g id="sewer-grate" transform="translate(40,65)">
      <rect x="0" y="0" width="20" height="8" fill="#444" stroke="#222" stroke-width="2" rx="2" />
      <line x1="3" y1="2" x2="3" y2="6" stroke="#222" stroke-width="1"/>
      <line x1="7" y1="2" x2="7" y2="6" stroke="#222" stroke-width="1"/>
      <line x1="11" y1="2" x2="11" y2="6" stroke="#222" stroke-width="1"/>
      <line x1="15" y1="2" x2="15" y2="6" stroke="#222" stroke-width="1"/>
     </g>
     <!-- Garbage Bin -->
     <g id="garbage-bin" transform="translate(70,45)">
      <rect x="0" y="0" width="25" height="20" fill="#6a6a6a" stroke="#444" stroke-width="2" rx="3" />
      <!-- Bin Lid -->
      <rect x="-2" y="-6" width="29" height="8" fill="#555" stroke="#333" stroke-width="2" rx="2" />
     </g>
     <!-- Cat -->
     <g id="stray-cat" transform="translate(78,46)">
      <circle cx="0" cy="0" r="6" fill="#333" />
      <circle cx="-2" cy="-1" r="1" fill="#fff" />
      <circle cx="2" cy="-1" r="1" fill="#fff" />
      <polygon points="-3,2 0,4 3,2" fill="#d89" />
     </g>
     <!-- Donut -->
     <g id="cat-donut" transform="translate(75,63)">
      <circle cx="0" cy="0" r="4" fill="#d9a" />
      <circle cx="0" cy="0" r="1.5" fill="#f9f9f9" />
     </g>
     <!-- Toy Mouse -->
     <g id="cat-mouse" transform="translate(85,63)">
      <ellipse cx="0" cy="0" rx="4" ry="2" fill="#aaa" />
      <circle cx="3" cy="-1" r="1" fill="#555" />
      <line x1="-4" y1="0" x2="-7" y2="0" stroke="#777" stroke-width="1" />
     </g>
    </g>
 </g>
<g id="tile-2-0" transform="translate(200,0)">
 <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" /> <!-- Background -->
 <!-- Road group (rotates) -->
 <g class="road" data-rotation="0">
  <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
  <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
 </g>
 <!-- Decorations (do NOT rotate) -->
 <g class="decor">
  <!-- icons or images here -->
 </g>
</g>
<g id="tile-3-0" transform="translate(300,0)">
 <rect x="0" y="0" width="100" height="100" fill="#6cc66c" />
 <!-- Roads + booths + lights (all rotate together) -->
 <g class="road" data-rotation="0">
  <!-- Road -->
  <path d="M 50 -1 L 50 36" stroke="#555" stroke-width="28" stroke-linecap="butt" fill="none" /><!--Top Road-->
  <path d="M 50 -1 L 50 30" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" fill="none" /><!--Yellow Line-->
  <path d="M -1 50 L 36 50" stroke="#555" stroke-width="28" stroke-linecap="butt" fill="none" /><!--Left Road-->
  <path d="M -1 50 L 30 50" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" fill="none" /><!--Yellow Line-->
  <path d="M 101 50 L 64 50" stroke="#555" stroke-width="28" stroke-linecap="butt" fill="none" /><!--Right Road-->
  <path d="M 101 50 L 70 50" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" fill="none" /><!--Yellow Line-->
  <rect x="36" y="36" width="28" height="28" fill="#555" /><!-- Intersection Square -->
  <!--White Cross Lines-->
  <line x1="35" y1="30" x2="65" y2="30" stroke="#f8f8f8" stroke-width="2" /> <!--First Top Line-->
  <line x1="34" y1="35" x2="66" y2="35" stroke="#f8f8f8" stroke-width="2" /> <!--Second Top Line-->
  <line x1="36" y1="30" x2="36" y2="35" stroke="#f8f8f8" stroke-width="2" /> <!--Top Cross-->
  <line x1="42" y1="30" x2="42" y2="35" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="49" y1="30" x2="49" y2="35" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="56" y1="30" x2="56" y2="35" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="64" y1="30" x2="64" y2="35" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="30" y1="35" x2="30" y2="65" stroke="#f8f8f8" stroke-width="2" /> <!--First Left Line-->
  <line x1="35" y1="34" x2="35" y2="65" stroke="#f8f8f8" stroke-width="2" /> <!--Second Left Line-->
  <line x1="30" y1="36" x2="35" y2="36" stroke="#f8f8f8" stroke-width="2" /> <!--Left Cross-->
  <line x1="30" y1="42" x2="35" y2="42" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="30" y1="49" x2="35" y2="49" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="30" y1="56" x2="35" y2="56" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="30" y1="64" x2="35" y2="64" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="70" y1="35" x2="70" y2="65" stroke="#f8f8f8" stroke-width="2" /> <!--First Right Line-->
  <line x1="66" y1="36" x2="66" y2="65" stroke="#f8f8f8" stroke-width="2" /> <!--Second Right Line-->
  <line x1="65" y1="36" x2="70" y2="36" stroke="#f8f8f8" stroke-width="2" /> <!--Right Cross-->
  <line x1="65" y1="42" x2="70" y2="42" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="65" y1="49" x2="70" y2="49" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="65" y1="56" x2="70" y2="56" stroke="#f8f8f8" stroke-width="2" /> 
  <line x1="65" y1="64" x2="70" y2="64" stroke="#f8f8f8" stroke-width="2" /> 
  <!-- Left Main Market Booth (bottom side) -->
  <rect x="5" y="78" width="30" height="20" fill="#d96" stroke="#633" stroke-width="2" />
  <rect x="5" y="68" width="30" height="12" fill="#fdd" stroke="#633" stroke-width="2" />
  <line x1="5" y1="68" x2="35" y2="68" stroke="#c33" stroke-width="3" />
  <!-- Middle Main Market Booth (bottom side) -->
  <rect x="35" y="78" width="30" height="20" fill="#d96" stroke="#633" stroke-width="2" />
  <rect x="35" y="68" width="30" height="12" fill="#fdd" stroke="#633" stroke-width="2" />
  <line x1="35" y1="68" x2="65" y2="68" stroke="#c33" stroke-width="3" />
  <!-- Right Main Market Booth (bottom side) -->
  <rect x="65" y="78" width="30" height="20" fill="#d96" stroke="#633" stroke-width="2" />
  <rect x="65" y="68" width="30" height="12" fill="#fdd" stroke="#633" stroke-width="2" />
  <line x1="65" y1="68" x2="95" y2="68" stroke="#c33" stroke-width="3" />
  <!-- Left Side Booth -->
  <rect x="5" y="2" width="25" height="15" fill="#d96" stroke="#633" stroke-width="2" />
  <rect x="5" y="17" width="25" height="8" fill="#fdd" stroke="#633" stroke-width="2" />
  <!-- Right Side Booth -->
  <rect x="70" y="5" width="25" height="15" fill="#d96" stroke="#633" stroke-width="2" />
  <rect x="70" y="20" width="25" height="8" fill="#fdd" stroke="#633" stroke-width="2" />
  <!-- Fish Tank + Splash + Sewer Drip Animation (Updated Placement) -->
  <g id="fish-tank-group">
   <!-- Fish Tank -->
   <rect x="5" y="27" width="14" height="8" fill="#66aadd" stroke="#225577" stroke-width="1.2" rx="2" />
   <rect x="5" y="27" width="14" height="8" fill="none" stroke="#ffffff" stroke-width="0.7" opacity="0.4" />
   <!-- Jumping Fish / Shrimp -->
   <circle cx="12" cy="33" r="1.4" fill="#ff9966">
    <!-- Jump arc -->
    <animate attributeName="cy" values="33;24;33" dur="2.8s" repeatCount="indefinite" />
    <animate attributeName="cx" values="12;10;12" dur="2.8s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="1;1;0.2;1" dur="2.8s" repeatCount="indefinite" />
   </circle>
   <!-- Splash Arc -->
   <path d="M 8 26 Q 12 22 16 26" stroke="#aeeaff" stroke-width="1.2" fill="none" opacity="0">
    <animate attributeName="opacity" values="0;1;0" dur="0.6s" begin="0.4s" repeatCount="indefinite" />
   </path>
   <!-- Falling Droplet (toward sewer beside road) -->
   <circle cx="12" cy="26" r="1.1" fill="#000077" opacity="0">
    <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
    <animate attributeName="cy" values="26;32;38" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
    <animate attributeName="cx" values="12;16;21" dur="1.8s" begin="0.6s" repeatCount="indefinite" />
   </circle>
   <!-- Sewer Grate -->
   <rect x="19" y="37" width="6" height="6" fill="#333" stroke="#111" stroke-width="1" rx="1" />
   <line x1="19" y1="38" x2="26" y2="38" stroke="#666" stroke-width="1" />
   <line x1="19" y1="40" x2="26" y2="40" stroke="#666" stroke-width="1" />
   <!-- Ripple -->
   <ellipse cx="22" cy="40" rx="1" ry="1" fill="none" stroke="#88ccff" stroke-width="1" opacity="0">
    <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="1.8s" repeatCount="indefinite" />
    <animate attributeName="rx" values="1;3;5" dur="1.2s" begin="1.8s" repeatCount="indefinite" />
    <animate attributeName="ry" values="1;2;3" dur="1.2s" begin="1.8s" repeatCount="indefinite" />
   </ellipse>
  </g>
  <!-- Stir-Fry Mist Animation (Bottom Middle Booth) -->
  <g id="mist-group">
   <!-- Mist Puff 1 -->
   <circle cx="50" cy="60" r="2" fill="white" opacity="0.0">
    <animate attributeName="r" values="2;12;18;2" dur="4.5s" repeatCount="indefinite" /><!-- To play sound, id="stirFry" -->
    <animate attributeName="opacity" values="0;0.45;0.18;0" dur="4.5s" repeatCount="indefinite" />
    <animate attributeName="cx" values="50;46;54;50" dur="4.5s" repeatCount="indefinite" />
   </circle>
   <!-- Mist Puff 2 -->
   <circle cx="50" cy="60" r="2" fill="white" opacity="0.0">
    <animate attributeName="r" values="2;12;18;2" dur="4.5s" begin="1.2s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="0;0.45;0.18;0" dur="4.5s" begin="1.2s" repeatCount="indefinite" />
    <animate attributeName="cx" values="50;54;46;50" dur="4.5s" begin="1.2s" repeatCount="indefinite" />
   </circle>
   <!-- Mist Puff 3 -->
   <circle cx="50" cy="60" r="2" fill="white" opacity="0.0">
    <animate attributeName="r" values="2;12;18;2" dur="4.5s" begin="2.4s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="0;0.45;0.18;0" dur="4.5s" begin="2.4s" repeatCount="indefinite" />
    <animate attributeName="cx" values="50;48;52;50" dur="4.5s" begin="2.4s" repeatCount="indefinite" />
   </circle>
  </g>
 </g>
</g>
<g id="tile-4-0" transform="translate(400,0)">
 <rect x="0" y="0" width="100" height="100" fill="#6cc66c" /> <!-- Grass -->
 <!-- Road group (rotates) -->
 <g class="road" data-rotation="0">
  <!-- Left → Bottom Road turn -->
  <path d="M -1 50 Q 54 54 50 101" stroke="#555" stroke-width="28" fill="none" stroke-linecap="butt" />
  <path d="M -1 50 Q 54 54 50 101" stroke="#ffdd33" stroke-width="4" fill="none" stroke-linecap="butt" />
  <!-- Torii Gate -->
  <g id="torii-gate" transform="translate(0,0)">
   <!-- Left Stone Base -->
   <polygon points="34,32 46,38 43,44 31,38" fill="#777" stroke="#444" stroke-width="2" />
   <!-- Right Stone Base -->
   <polygon points="67,56 79,62 76,68 64,62" fill="#777" stroke="#444" stroke-width="2" />
   <!-- Left Post -->
   <polygon points="34,32 46,38 62,8 50,3" fill="#c33" stroke="#622" stroke-width="2" />
   <!-- Right Post -->
   <polygon points="67,56 79,62 98,28 86,22" fill="#c33" stroke="#622" stroke-width="2" />
   <!-- Top Beam -->
   <polygon points="45,5 98,32 93,34 48,10" fill="#d44" stroke="#622" stroke-width="2" />
   <!-- Lower Beam -->
   <polygon points="38,12 95,39 92,43 37,16" fill="#d44" stroke="#622" stroke-width="2" />
  </g>
  <g id="clumsy-bird-wrapper" transform="translate(70,8) rotate(30)">
   <!-- Bird inner (animated) -->
   <g id="clumsy-bird">
    <ellipse cx="0" cy="6" rx="6" ry="5" fill="#333"/><!-- Body -->
    <circle cx="0" cy="0" r="4" fill="#333"/><!-- Head -->
    <circle cx="1.5" cy="-1" r="1" fill="#fff"/><!-- Eye -->
    <polygon points="3,-1 6,0 3,1" fill="#d89"/><!-- Beak -->
    <path id="wing-left" d="M -4 6 Q -8 8 -4 10" stroke="#222" stroke-width="2" fill="none"/><!-- Wing (left) -->
    <path id="wing-right" d="M 4 6 Q 8 8 4 10" stroke="#222" stroke-width="2" fill="none"/><!-- Wing (right) -->
    <polygon id="tail" points="-2,10 -6,12 -2,14" fill="#222"/><!-- Tail -->
    <line x1="-2" y1="11" x2="-3" y2="13" stroke="#222" stroke-width="1"/><!-- Feet -->
    <line x1="2" y1="11" x2="3" y2="13" stroke="#222" stroke-width="1"/>
   </g>
  </g>
  <g id="bird-bath" transform="translate(70,73)">
   <rect x="7" y="12" width="12" height="14" fill="#9c9292" stroke="#5a5555" stroke-width="2" rx="3"/><!-- Pedestal -->
   <ellipse cx="13" cy="10" rx="14" ry="6" fill="#bfbaba" stroke="#6a6464" stroke-width="2"/><!-- Bowl -->
   <ellipse cx="13" cy="10" rx="11" ry="4" fill="#7ec8e3" stroke="#5aa9c8" stroke-width="1.5"/><!-- Water -->
   <ellipse id="bath-ripple" cx="13" cy="10" rx="1" ry="1" fill="none" stroke="#b3e9ff" stroke-width="1.4" opacity="0.9">
    <animate attributeName="rx" values="1; 7; 9" dur="3s" repeatCount="indefinite" begin="1s"/>
    <animate attributeName="ry" values="1; 3; 5" dur="3s" repeatCount="indefinite" begin="1s"/>
    <animate attributeName="opacity" values="0.9; 0.5; 0" dur="3s" repeatCount="indefinite" begin="1s"/>
   </ellipse>
   <ellipse cx="10" cy="8" rx="5" ry="1.6" fill="rgba(255,255,255,0.35)"/>
  </g>
 </g>
</g>
<!-- Row 1 -->
  <g id="tile-0-1" transform="translate(0,100)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-1-1" transform="translate(100,100)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-2-1" transform="translate(200,100)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-3-1" transform="translate(300,100)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-4-1" transform="translate(400,100)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>

  <!-- Row 2 -->
  <g id="tile-0-2" transform="translate(0,200)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-1-2" transform="translate(100,200)">
      <rect x="0" y="0" width="100" height="100" fill="#6cc66c" /> <!-- Grass -->
      <!-- Roads -->
      <g class="road" data-rotation="0">
        <!-- Water pipe in the center gap -->
        <rect x="46" y="0" width="8" height="100" transform="rotate(45 50 50)" fill="#888" rx="3" />
        <circle cx="85" cy="15" r="4" fill="#444" />
        <circle cx="50" cy="50" r="4" fill="#444" />
        <circle cx="15" cy="85" r="4" fill="#444" />
        <circle cx="85" cy="15" r="6" fill="#666" />
        <!-- Valve wheel at top-right end -->
        <g transform-origin="85 15">
          <circle cx="85" cy="15" r="9" fill="#666" />
          <line x1="85" y1="11" x2="85" y2="19" stroke="#ccc" stroke-width="2" />
          <line x1="81" y1="15" x2="89" y2="15" stroke="#ccc" stroke-width="2" />
          <!-- Spin forward twice -->
          <animateTransform attributeName="transform" type="rotate" values="0;720;0" dur="10s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.999;1" dur="15s" repeatCount="indefinite" fill="remove" /><!-- To play sound, id="spinningValve1" -->
        </g>
        <!-- Leak puddle at bottom-left end -->
        <ellipse cx="15" cy="85" rx="10" ry="6" fill="rgba(0,150,255,0.4)"><!-- To play sound, id="puddle" -->
        <animate attributeName="rx" values="10;14;10" dur="3s" repeatCount="indefinite" />
        <animate attributeName="ry" values="6;9;6" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <animate attributeName="opacity" values="1;0.999;1" dur="5s" repeatCount="indefinite" fill="remove" /><!-- To play sound, id="spillingWater1" -->
        <!-- Top → Left turn -->
        <path d="M 50 -1 Q 46 46 -1 50" stroke="#555" stroke-width="28" fill="none" stroke-linecap="butt" />
        <path d="M 50 -1 Q 46 46 -1 50" stroke="#ffdd33" stroke-width="4" fill="none" stroke-linecap="butt" />
        <!-- Bottom → Right turn -->
        <path d="M 50 101 Q 54 54 101 50" stroke="#555" stroke-width="28" fill="none" stroke-linecap="butt" />
        <path d="M 50 101 Q 54 54 101 50" stroke="#ffdd33" stroke-width="4" fill="none" stroke-linecap="butt" />
      </g>
      <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-2-2" transform="translate(200,200)">
      <!-- 1. Full-tile decoration (behind road) -->
      <g class="decor-bg">
        <polygon points="0,0 100,0 60,40 40,40" fill="#b33" /><!-- Top wall -->
        <polygon points="40,60 60,60 100,100 0,100" fill="#b33" /><!-- Bottom wall -->
        <polygon points="0,0 40,40 40,60 0,100" fill="#a22" /><!-- Left wall -->
        <polygon points="60,40 100,0 100,100 60,60" fill="#a22" /><!-- Right wall -->
        <rect x="44" y="20" width="12" height="16" fill="#3a6ff7" rx="2" /><!-- Top door -->
        <circle cx="54" cy="28" r="2" fill="#ffdd33" /><!-- Top door knob -->
        <rect x="44" y="64" width="12" height="16" fill="#3a6ff7" rx="2" /><!-- Bottom door -->
        <circle cx="48" cy="72" r="2" fill="#ffdd33" /><!-- Bottom door knob -->
        <rect x="19" y="44" width="16" height="12" fill="#3a6ff7" rx="2" /><!-- Left door -->
        <circle cx="27" cy="48" r="2" fill="#ffdd33" /><!-- Left door knob -->
        <rect x="64" y="44" width="16" height="12" fill="#3a6ff7" rx="2" /><!-- Right door -->
        <circle cx="70" cy="52" r="2" fill="#ffdd33" /><!-- Right door knob -->
      </g>
        <!-- 2. Road (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- 3. Foreground decorations (optional, do NOT rotate) -->
      <g class="decor-fg">
        <!-- Windows -->
        <rect x="20" y="5" width="12" height="8" fill="white" rx="2" />
        <rect x="68" y="5" width="12" height="8" fill="white" rx="2" />
        <rect x="5" y="20" width="8" height="12" fill="white" rx="2" />
        <rect x="5" y="68" width="8" height="12" fill="white" rx="2" />
        <rect x="85" y="20" width="8" height="12" fill="white" rx="2" />
        <rect x="85" y="68" width="8" height="12" fill="white" rx="2" />
        <rect x="20" y="85" width="12" height="8" fill="white" rx="2" />
        <rect x="68" y="85" width="12" height="8" fill="white" rx="2" />
        <!-- GOOD STAR FLASH (top-left window) -->
        <g transform="translate(26,9)" opacity="1">
          <polygon points="0,-20 6,-6 20,0 6,6 0,20 -6,6 -20,0 -6,-6" fill="rgba(255,240,150,0.9)" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="0.5s" begin="flashGood1.repeatEvent" />
            <animateTransform attributeName="transform" type="scale" values="0.2;2.0;0.2" dur="0.5s" begin="flashGood1.repeatEvent" />
          </polygon>
          <!-- Timer trigger -->
          <animate attributeName="opacity" values="1;0.999;1" dur="11s" repeatCount="indefinite" fill="remove"/> <!-- To play sound, id="flashGood1" -->
        </g>
        <!-- BAD STAR FLASH (top-right window) -->
        <g transform="translate(74, 9)" opacity="1">
          <polygon points="0,-22 7,-7 22,0 7,7 0,22 -7,7 -22,0 -7,-7" fill="black" opacity="0">
            <animate attributeName="fill" values="black;white;black" dur="0.25s" begin="flashBad1.repeatEvent" />
            <!-- Flash visibility -->
            <animate attributeName="opacity" values="0;1;0" dur="0.25s" begin="flashBad1.repeatEvent" />
            <!-- Flash expansion -->
            <animateTransform attributeName="transform" type="scale" values="0.2;2.4;0.2" dur="0.25s" begin="flashBad1.repeatEvent" />
          </polygon>
          <!-- Timer trigger -->
          <animate attributeName="opacity" values="1;0.999;1" dur="13s" repeatCount="indefinite" fill="remove" /> <!-- To play sound, id="flashBad1" -->
        </g>
        <!-- BAD LIGHTNING FLASH (left-top window) -->
        <g transform="translate(9, 26)" opacity="1">
          <polygon points="-4,-18 2,-6 -6,-6 4,6 -2,6 6,18" fill="black" opacity="0">
          <animate attributeName="fill" values="black;white;black" dur="0.22s" begin="flashBolt1.repeatEvent" />
          <!-- Visibility -->
          <animate attributeName="opacity" values="0;1;0" dur="0.22s" begin="flashBolt1.repeatEvent" />
          <!-- Violent expansion -->
          <animateTransform attributeName="transform" type="scale" values="0.2;2.6;0.2" dur="0.22s" begin="flashBolt1.repeatEvent" />
          </polygon>
          <!-- Timer trigger -->
          <animate attributeName="opacity" values="1;0.999;1" dur="17s" repeatCount="indefinite" fill="remove" /> <!-- To play sound, id="flashBolt1" -->
        </g>
        <g transform="translate(88, 26)" opacity="1"><!-- GOOD LIGHTNING FLASH (right-top window) -->
          <polygon points="-4,-22 3,-10 -5,-10 6,2 -2,2 8,18 2,18 10,30" fill="yellow" opacity="0">
            <animate attributeName="fill" values="yellow;white;yellow" dur="0.28s" begin="flashHero1.repeatEvent" />
            <!-- Visibility -->
            <animate attributeName="opacity" values="0;1;0" dur="0.28s" begin="flashHero1.repeatEvent" />
            <!-- Heroic expansion -->
            <animateTransform attributeName="transform" type="scale" values="0.2;2.8;0.2" dur="0.28s" begin="flashHero1.repeatEvent" />
          </polygon>
          <!-- Timer trigger -->
          <animate attributeName="opacity" values="1;0.999;1" dur="19s" repeatCount="indefinite" fill="remove" /> <!-- To play sound, id="flashHero1" -->
        </g>
        <g transform="translate(26, 88)" opacity="1"><!-- ROMANTIC HEART FLASH (bottom-left window) -->
          <path d="M 0 -10 C -8 -18, -20 -6, 0 10 C 20 -6, 8 -18, 0 -10" fill="pink" opacity="0">
            <!-- Soft pink glow -->
            <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin="flashHeart1.repeatEvent"/>
            <!-- Gentle heartbeat expansion -->
            <animateTransform attributeName="transform" type="scale" values="0.4;1.9;0.4" dur="0.9s" begin="flashHeart1.repeatEvent" />
          </path>
          <!-- Timer trigger -->
          <animate attributeName="opacity" values="1;0.999;1" dur="15s" repeatCount="indefinite" fill="remove" /> <!-- To play sound, id="flashHeart1" -->
        </g>
        <!-- HEART-BREAKING FLASH -->
        <g transform="translate(74, 88)" opacity="1"> <!-- Left half -->
          <path d="M -10 -10 C -18 -18, -28 -6, -10 8 L 0 16 L 0 -2 Z" fill="red" opacity="0">
            <animate attributeName="fill" values="red;white;red" dur="1.2s" begin="flashBreak1.repeatEvent" />
            <!-- Visibility -->
            <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="flashBreak1.repeatEvent" />
            <!-- Shrink-collapse (heart breaking inward) -->
            <animateTransform attributeName="transform" type="rotate" values="0 -10 -2; -32 -10 -2; 0 -10 -2" dur="1.2s" begin="flashBreak1.repeatEvent" />
            <animateTransform attributeName="transform" additive="sum" type="scale" values="1.6;0.5;1.6" dur="1.2s" begin="flashBreak1.repeatEvent" />
          </path>
          <path d="M 10 -10 C 18 -18, 28 -6, 10 8 L 0 16 L 0 -2 Z" fill="red" opacity="0"> <!-- Right half -->
            <animate attributeName="fill" values="red;white;red" dur="1.2s" begin="flashBreak1.repeatEvent" />
            <!-- Visibility -->
            <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="flashBreak1.repeatEvent" />
            <!-- Shrink-collapse -->
            <animateTransform attributeName="transform" type="rotate" values="0 10 -2; 32 10 -2; 0 10 -2" dur="1.2s" begin="flashBreak1.repeatEvent" />
            <animateTransform attributeName="transform" additive="sum" type="scale" values="1.6;0.5;1.6" dur="1.2s" begin="flashBreak1.repeatEvent" />
          </path>
          <!-- Timer trigger -->
          <animate attributeName="opacity" values="1;0.999;1" dur="21s" repeatCount="indefinite" fill="remove" /><!-- To play sound, id="flashBreak1" -->
        </g>
        <!-- MONSTER EYE FLASH -->
        <g transform="translate(88, 74)" opacity="1">
          <!-- Eyelid (black cover) -->
          <ellipse cx="0" cy="0" rx="12" ry="6" fill="black" opacity="0">
            <!-- Eyelid fade-in/out -->
            <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin="flashEye2.repeatEvent" />
            <!-- Wink (squish vertically) -->
            <animate attributeName="ry" values="6;2;6" dur="0.9s" begin="flashEye2.repeatEvent" />
          </ellipse>
          <!-- Sclera (white) -->
          <ellipse cx="0" cy="0" rx="10" ry="4" fill="white" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin="flashEye2.repeatEvent" />
            <!-- Wink -->
            <animate attributeName="ry" values="4;1.5;4" dur="0.9s" begin="flashEye2.repeatEvent" />
          </ellipse>
          <!-- Iris (red) -->
          <circle cx="0" cy="0" r="3" fill="red" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin="flashEye2.repeatEvent" />
          </circle>
          <!-- Pupil (black) -->
          <circle cx="0" cy="0" r="1.5" fill="black" opacity="0">
            <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin="flashEye2.repeatEvent" />
          </circle>
          <!-- Timer trigger -->
          <animate attributeName="opacity" values="1;0.999;1" dur="23s" repeatCount="indefinite" fill="remove" /><!-- To play sound, id="flashEye2" -->
        </g>
        <!-- MUSICAL NOTE FLASH -->
        <g transform="translate(9, 74)" opacity="1">
          <path d="M -4 -10 L 4 -12 L 4 4 C 4 10, -2 12, -4 8 C -6 4, -2 2, 2 4 L 2 -8 Z" fill="purple" opacity="0">
            <animate attributeName="fill" values="purple;hotpink;purple" dur="1.3s" begin="flashMusic1.repeatEvent" />
            <!-- Visibility -->
            <animate attributeName="opacity" values="0;1;0" dur="1.3s" begin="flashMusic1.repeatEvent" />
            <!-- Beat expansion -->
            <animateTransform attributeName="transform" type="scale" values="0.6;1.8;0.6" dur="1.3s" begin="flashMusic1.repeatEvent" />
          </path>
          <!-- Timer -->
          <animate attributeName="opacity" values="1;0.999;1" dur="9s" repeatCount="indefinite" fill="remove" /><!-- To play sound, id="flashMusic1" -->
        </g>
      </g>
    </g>
    <g id="tile-3-2" transform="translate(300,200)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-4-2" transform="translate(400,200)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <!-- Row 3 -->
    <g id="tile-0-3" transform="translate(0,300)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-1-3" transform="translate(100,300)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-2-3" transform="translate(200,300)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-3-3" transform="translate(300,300)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-4-3" transform="translate(400,300)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <!-- Row 4 -->
    <g id="tile-0-4" transform="translate(0,400)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-1-4" transform="translate(100,400)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-2-4" transform="translate(200,400)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-3-4" transform="translate(300,400)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
    <g id="tile-4-4" transform="translate(400,400)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road group (rotates) -->
      <g class="road" data-rotation="0">
        <path d="M 50 -1 L 50 101" stroke="#555" stroke-width="28" stroke-linecap="butt" />
        <path d="M 50 -1 L 50 101" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" />
      </g>
        <!-- Decorations (do NOT rotate) -->
      <g class="decor">
        <!-- icons or images here -->
      </g>
    </g>
</svg>
</div>
<script>
document.querySelectorAll('#tile-world g').forEach(tile => {
  const road = tile.querySelector('.road');
  if (!road) return;
  tile.addEventListener('click', () => {
    let r = parseInt(road.dataset.rotation || 0);
    r = (r + 90) % 360;
    road.dataset.rotation = r;

    // rotate ONLY the road group, not the tile
    road.setAttribute("transform", `rotate(${r} 50 50)`);
  });
});
</script>
<script src="/assets/js/sounds.js"></script>
<script src="/assets/js/animations.js"></script>
