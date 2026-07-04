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
 <object data="/assets/images/tile-world.svg" type="image/svg+xml"></object>
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
