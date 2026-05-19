---
title: "Strava Dashboard"
permalink: /strava-dashboard/
layout: single
author_profile: true
header:
  image: /assets/images/WidePeaks.jpg
---
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 800 600"
     preserveAspectRatio="xMidYMid meet">

  <!-- Background -->
  <rect width="800" height="600" fill="#f4f4f4" />

  <!-- Lake (Okanagan) -->
  <rect x="0" y="150" width="220" height="350" fill="#8ec5fc" />

  <!-- Downtown grid (simplified) -->
  <g stroke="#cccccc" stroke-width="1">
    <!-- Vertical streets -->
    <line x1="240" y1="140" x2="240" y2="520" />
    <line x1="270" y1="140" x2="270" y2="520" />
    <line x1="300" y1="140" x2="300" y2="520" />
    <line x1="330" y1="140" x2="330" y2="520" />
    <line x1="360" y1="140" x2="360" y2="520" />
    <line x1="390" y1="140" x2="390" y2="520" />
    <!-- Horizontal streets -->
    <line x1="240" y1="180" x2="420" y2="180" />
    <line x1="240" y1="220" x2="420" y2="220" />
    <line x1="240" y1="260" x2="420" y2="260" />
    <line x1="240" y1="300" x2="420" y2="300" />
    <line x1="240" y1="340" x2="420" y2="340" />
    <line x1="240" y1="380" x2="420" y2="380" />
    <line x1="240" y1="420" x2="420" y2="420" />
    <line x1="240" y1="460" x2="420" y2="460" />
  </g>

  <!-- Major north-south road (e.g., Highway 97-ish) -->
  <path d="M 450 120 L 470 200 L 480 320 L 490 520"
        fill="none"
        stroke="#333"
        stroke-width="4"
        stroke-linecap="round" />

  <!-- East-west connector (e.g., Harvey-style) -->
  <path d="M 260 260 L 520 260"
        fill="none"
        stroke="#555"
        stroke-width="3"
        stroke-linecap="round" />

  <!-- Example pathway / shortcut (you can add more) -->
  <path d="M 280 300 L 320 330 L 360 320"
        fill="none"
        stroke="#2e8b57"
        stroke-width="3"
        stroke-dasharray="6 4"
        stroke-linecap="round" />

  <!-- Labels (optional, you can remove text if you want it cleaner) -->
  <text x="40" y="180" font-size="14" fill="#004b7a">Okanagan Lake</text>
  <text x="250" y="160" font-size="14" fill="#555">Downtown Grid</text>
  <text x="480" y="150" font-size="14" fill="#333">Main North–South</text>
  <text x="530" y="255" font-size="14" fill="#555">Main East–West</text>
  <text x="290" y="295" font-size="12" fill="#2e8b57">Path / Shortcut</text>

</svg>
