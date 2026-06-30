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
 <svg id="tile-world" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
    <!-- 5x5 grid of 100x100 tiles -->
    <!-- Just light grey squares for now -->
    <!-- Row 0 -->
    <g id="tile-0-0" transform="translate(0,0)">
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
    <g id="tile-1-0" transform="translate(100,0)">
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
    <g id="tile-2-0" transform="translate(200,0)">
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
    <g id="tile-3-0" transform="translate(300,0)">
      <rect x="0" y="0" width="100" height="100" fill="#6cc66c" />
      <!-- Roads + booths + lights (all rotate together) -->
      <g class="road" data-rotation="0">
        <!-- Top → Center -->
        <path d="M 50 -1 L 50 30" stroke="#555" stroke-width="28" stroke-linecap="butt" fill="none" />
        <path d="M 50 -1 L 50 30" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" fill="none" />
        <!-- Left → Center -->
        <path d="M -1 50 L 30 50" stroke="#555" stroke-width="28" stroke-linecap="butt" fill="none" />
        <path d="M -1 50 L 30 50" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" fill="none" />
        <!-- Right → Center -->
        <path d="M 101 50 L 70 50" stroke="#555" stroke-width="28" stroke-linecap="butt" fill="none" />
        <path d="M 101 50 L 70 50" stroke="#ffdd33" stroke-width="4" stroke-linecap="butt" fill="none" />
        <!--White Cross Lines-->
        <line x1="36" y1="30" x2="64" y2="30" stroke="#f8f8f8" stroke-width="2" /> 
        <line x1="36" y1="35" x2="64" y2="35" stroke="#f8f8f8" stroke-width="2" /> 
        <line x1="30" y1="35" x2="35" y2="35" stroke="#f8f8f8" stroke-width="2" /> 
        <line x1="30" y1="36" x2="30" y2="64" stroke="#f8f8f8" stroke-width="2" /> 
        <line x1="35" y1="36" x2="35" y2="64" stroke="#f8f8f8" stroke-width="2" /> 
        <line x1="70" y1="36" x2="70" y2="64" stroke="#f8f8f8" stroke-width="2" />
        <line x1="65" y1="36" x2="65" y2="64" stroke="#f8f8f8" stroke-width="2" /> 
        <!-- Left Main Market Booth (bottom side) -->
        <rect x="5" y="78" width="30" height="22" fill="#d96" stroke="#633" stroke-width="2" />
        <rect x="5" y="68" width="30" height="12" fill="#fdd" stroke="#633" stroke-width="2" />
        <line x1="5" y1="68" x2="35" y2="68" stroke="#c33" stroke-width="3" />
        <!-- Middle Main Market Booth (bottom side) -->
        <rect x="35" y="78" width="30" height="22" fill="#d96" stroke="#633" stroke-width="2" />
        <rect x="35" y="68" width="30" height="12" fill="#fdd" stroke="#633" stroke-width="2" />
        <line x1="35" y1="68" x2="65" y2="68" stroke="#c33" stroke-width="3" />
        <!-- Right Main Market Booth (bottom side) -->
        <rect x="65" y="78" width="30" height="22" fill="#d96" stroke="#633" stroke-width="2" />
        <rect x="65" y="68" width="30" height="12" fill="#fdd" stroke="#633" stroke-width="2" />
        <line x1="65" y1="68" x2="95" y2="68" stroke="#c33" stroke-width="3" />
        <!-- Side Booth (left corner) -->
        <rect x="5" y="5" width="25" height="15" fill="#d96" stroke="#633" stroke-width="2" />
        <rect x="5" y="20" width="25" height="8" fill="#fdd" stroke="#633" stroke-width="2" />
        <g><!-- Pedestrian Light (right corner) -->
          <rect x="75" y="5" width="8" height="25" fill="#333" rx="2" />
          <circle cx="79" cy="10" r="3" fill="red" />
          <circle cx="79" cy="20" r="3" fill="green" />
        </g>
      </g>
      <g class="decor"></g>
      </g>
      <g id="tile-4-0" transform="translate(400,0)">
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
          <animate id="spinningValve1" attributeName="opacity" values="1;0.999;1" dur="15s" repeatCount="indefinite" fill="remove" />
        </g>
        <!-- Leak puddle at bottom-left end -->
        <ellipse id="puddle" cx="15" cy="85" rx="10" ry="6" fill="rgba(0,150,255,0.4)">
        <animate attributeName="rx" values="10;14;10" dur="3s" repeatCount="indefinite" />
        <animate attributeName="ry" values="6;9;6" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <animate id="spillingWater1" attributeName="opacity" values="1;0.999;1" dur="5s" repeatCount="indefinite" fill="remove" />
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
          <animate id="flashGood1" attributeName="opacity" values="1;0.999;1" dur="11s" repeatCount="indefinite" fill="remove"/>
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
          <animate id="flashBad1" attributeName="opacity" values="1;0.999;1" dur="13s" repeatCount="indefinite" fill="remove" />
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
          <animate id="flashBolt1" attributeName="opacity" values="1;0.999;1" dur="17s" repeatCount="indefinite" fill="remove" />
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
          <animate id="flashHero1" attributeName="opacity" values="1;0.999;1" dur="19s" repeatCount="indefinite" fill="remove" />
        </g>
        <g transform="translate(26, 88)" opacity="1"><!-- ROMANTIC HEART FLASH (bottom-left window) -->
          <path d="M 0 -10 C -8 -18, -20 -6, 0 10 C 20 -6, 8 -18, 0 -10" fill="pink" opacity="0">
            <!-- Soft pink glow -->
            <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin="flashHeart1.repeatEvent"/>
            <!-- Gentle heartbeat expansion -->
            <animateTransform attributeName="transform" type="scale" values="0.4;1.9;0.4" dur="0.9s" begin="flashHeart1.repeatEvent" />
          </path>
          <!-- Timer trigger -->
          <animate id="flashHeart1" attributeName="opacity" values="1;0.999;1" dur="15s" repeatCount="indefinite" fill="remove" />
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
          <animate id="flashBreak1" attributeName="opacity" values="1;0.999;1" dur="21s" repeatCount="indefinite" fill="remove" />
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
          <animate id="flashEye2" attributeName="opacity" values="1;0.999;1" dur="23s" repeatCount="indefinite" fill="remove" />
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
          <animate id="flashMusic1" attributeName="opacity" values="1;0.999;1" dur="9s" repeatCount="indefinite" fill="remove" />
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
