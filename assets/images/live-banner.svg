<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 2000 220"
     preserveAspectRatio="xMidYMid slice">

  <!-- Sky -->
  <rect width="2000" height="220" fill="#87CEEB" />

  <!-- Sun -->
  <circle cx="1750" cy="40" r="25" fill="#FFD966" />

  <!-- Clouds -->
  <g fill="#FFFFFF" opacity="0.8">
    <ellipse cx="300" cy="40" rx="40" ry="18" />
    <ellipse cx="330" cy="35" rx="30" ry="14" />
    <ellipse cx="360" cy="42" rx="35" ry="16" />

    <ellipse cx="900" cy="30" rx="35" ry="16" />
    <ellipse cx="930" cy="25" rx="25" ry="12" />
    <ellipse cx="955" cy="32" rx="28" ry="13" />
  </g>

  <!-- Hill Path (background) -->
  <path id="hillPath"
        d="M 2000 120 C 1500 20, 500 20, 0 120"
        fill="none"
        stroke="#3CB371"
        stroke-width="8" />

  <!-- Road Path (foreground) -->
  <path id="roadPath"
        d="M 0 180 L 2000 180"
        fill="none"
        stroke="#444"
        stroke-width="10"
        stroke-linecap="round" />

  <!-- Water Stop -->
  <g transform="translate(1200,150)">
    <rect x="-10" y="-20" width="20" height="20" fill="#1e88e5" rx="3" />
    <rect x="-4" y="-28" width="8" height="8" fill="#bbdefb" />
  </g>

  <!-- Road Sign -->
  <g transform="translate(400,145)">
    <rect x="-3" y="-25" width="6" height="25" fill="#555" />
    <rect x="-18" y="-45" width="36" height="20" fill="#ffb300" rx="3" />
    <text x="0" y="-30" text-anchor="middle" font-size="10" fill="#222" font-family="sans-serif">
      RIDE
    </text>
  </g>

  <!-- Cyclist Silhouette -->
  <g id="cyclist" fill="#000" stroke="none">

    <!-- Rear wheel -->
    <g id="rearWheel" transform="translate(-18,0)">
      <circle r="10" fill="none" stroke="#000" stroke-width="2" />
      <animateTransform attributeName="transform"
                        type="rotate"
                        from="0 0 0"
                        to="360 0 0"
                        dur="1s"
                        repeatCount="indefinite" />
    </g>

    <!-- Front wheel -->
    <g id="frontWheel" transform="translate(18,0)">
      <circle r="10" fill="none" stroke="#000" stroke-width="2" />
      <animateTransform attributeName="transform"
                        type="rotate"
                        from="0 0 0"
                        to="360 0 0"
                        dur="1s"
                        repeatCount="indefinite" />
    </g>

    <!-- Bike frame -->
    <polyline points="-18,0 -5,-15 18,0" fill="none" stroke="#000" stroke-width="2" />
    <line x1="-5" y1="-15" x2="-2" y2="-25" stroke="#000" stroke-width="2" />
    <line x1="5" y1="-18" x2="18" y2="-5" stroke="#000" stroke-width="2" />

    <!-- Rider -->
    <circle cx="-2" cy="-30" r="5" />
    <line x1="-2" y1="-25" x2="-10" y2="-10" stroke="#000" stroke-width="2" />
    <line x1="-10" y1="-10" x2="-5" y2="0" stroke="#000" stroke-width="2" />
    <line x1="-2" y1="-25" x2="8" y2="-10" stroke="#000" stroke-width="2" />
    <line x1="8" y1="-10" x2="5" y2="0" stroke="#000" stroke-width="2" />
  </g>

  <!-- Cyclist Motion -->
  <g id="motionGroup">

    <!-- Phase 1: Ride right on road -->
    <use href="#cyclist">
      <animateMotion dur="6s" begin="0s;hillRide.end"
                     fill="freeze"
                     path="M 0 180 L 2000 180"
                     id="roadRide" />
      <animate attributeName="opacity" from="1" to="1" dur="6s" begin="0s" fill="freeze" />
    </use>

    <!-- Phase 2: Ride left on hill -->
    <use href="#cyclist">
      <animateMotion dur="6s" begin="roadRide.end"
                     fill="freeze"
                     path="M 2000 120 C 1500 20, 500 20, 0 120"
                     id="hillRide" />
      <animate attributeName="opacity" from="1" to="1" dur="6s" begin="roadRide.end" fill="freeze" />
    </use>

  </g>

</svg>
