---
title: "Strava Activity Dashboard"
permalink: /strava-dashboard/
layout: single
author_profile: true
header:
  image: /assets/images/live-banner.svg
  caption: "Animated Training Banner"
---

<div id="dashboard">

  <!-- Hero Banner -->
  <section class="hero">
    <h1>Daniel’s Strava Activity Dashboard</h1>
    <p>Live analytics from my cycling, running, hiking, skiing, and training.</p>
    <img id="live-banner" src="/assets/images/banner-placeholder.jpg" alt="Training Banner">
  </section>

  <!-- Overview -->
  <section id="overview">
    <h2>Overview</h2>
    <div class="mm-grid">
      <div class="mm-card">Total Distance: <span id="total-distance">—</span></div>
      <div class="mm-card">Total Time: <span id="total-time">—</span></div>
      <div class="mm-card">Total Elevation: <span id="total-elevation">—</span></div>
      <div class="mm-card">Activities Logged: <span id="activity-count">—</span></div>
    </div>
  </section>

  <!-- Charts -->
  <section id="charts">
    <h2>Charts</h2>
    <canvas id="distanceChart"></canvas>
    <canvas id="sportBreakdownChart"></canvas>
  </section>

  <!-- Recent Activities -->
  <section id="recent">
    <h2>Recent Activities</h2>
    <div id="activity-list"></div>
  </section>

</div>

<script src="/assets/js/strava-dashboard.js"></script>
