---
title: "Strava Dashboard"
permalink: /strava-dashboard/
layout: single
author_profile: true
header:
  image: /assets/images/WidePeaks.jpg
css: /assets/css/strava-dashboard.css
---

<div class="tile-world-wrapper">
  <svg id="tile-world"
       viewBox="0 0 500 500"
       preserveAspectRatio="xMidYMid meet">
    <!-- 5x5 grid of 100x100 tiles -->
    <!-- Just light grey squares for now -->
    <!-- Row 0 -->
    <g id="tile-0-0" transform="translate(0,0)">
      <!-- Background -->
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" /><!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" /><!-- Yellow center line -->
      <!-- Decorations -->
      <g class="decorations">
        tile.addEventListener('click', () => {
          let r = (parseInt(tile.dataset.rotation) + 90) % 360;
          tile.dataset.rotation = r;
        
          // rotate only the road layer
          tile.querySelector('.road').setAttribute("transform",`rotate(${r} 50 50)`);
        });
      </g>
    <g id="tile-1-0" transform="translate(100,0)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-2-0" transform="translate(200,0)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-3-0" transform="translate(300,0)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-4-0" transform="translate(400,0)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>

    <!-- Row 1 -->
    <g id="tile-0-1" transform="translate(0,100)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-1-1" transform="translate(100,100)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-2-1" transform="translate(200,100)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-3-1" transform="translate(300,100)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-4-1" transform="translate(400,100)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>

    <!-- Row 2 -->
    <g id="tile-0-2" transform="translate(0,200)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-1-2" transform="translate(100,200)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-2-2" transform="translate(200,200)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-3-2" transform="translate(300,200)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-4-2" transform="translate(400,200)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>

    <!-- Row 3 -->
    <g id="tile-0-3" transform="translate(0,300)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-1-3" transform="translate(100,300)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-2-3" transform="translate(200,300)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-3-3" transform="translate(300,300)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-4-3" transform="translate(400,300)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>

    <!-- Row 4 -->
    <g id="tile-0-4" transform="translate(0,400)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-1-4" transform="translate(100,400)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-2-4" transform="translate(200,400)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-3-4" transform="translate(300,400)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>
    <g id="tile-4-4" transform="translate(400,400)">
      <rect x="0" y="0" width="100" height="100" fill="#f9f9f9" stroke="#ddd" />
      <!-- Wide dark road -->
      <path d="M 50 0 L 50 100" stroke="#555" stroke-width="28" stroke-linecap="round" />
      <!-- Yellow center line -->
      <path d="M 50 0 L 50 100" stroke="#ffdd33" stroke-width="4" stroke-linecap="round" />
    </g>

  </svg>
</div>
<script>
// Attach rotation behavior to every tile
document.querySelectorAll('#tile-world g').forEach(tile => {
  tile.dataset.rotation = 0; // store rotation state

  tile.addEventListener('click', () => {
    let r = parseInt(tile.dataset.rotation);
    r = (r + 90) % 360;
    tile.dataset.rotation = r;

    // rotate around tile center (50,50)
    const transform = tile.getAttribute("transform").split(")")[0] + ")";
    tile.setAttribute("transform", transform + ` rotate(${r} 50 50)`);
  });
});
</script>
