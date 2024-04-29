---
layout: post
title: "Interactive Hyperbolic Plane"
---

Explore the hyperbolic plane with this interactive tool, designed to illustrate principles of non-Euclidean geometry.

<style>
  #hyperbolic-geometry-explorer {
    position: relative; /* Essential for correct positioning */
    margin: 0 auto; /* Center the container horizontally */
    max-width: 800px; /* Maximum width to maintain usability and aesthetics */
    height: auto; /* Height is auto to maintain the aspect ratio */
    aspect-ratio: 1 / 1; /* Maintain a square aspect ratio for proper geometric representation */
  }

  @media (max-width: 800px) {
    #hyperbolic-geometry-explorer {
      width: 90vw;
      height: 90vw; /* Adjust size for smaller screens to maintain the aspect ratio */
    }
  }

  @media (max-height: 800px) {
    #hyperbolic-geometry-explorer {
      width: 90vh;
      height: 90vh; /* Adjust based on height in landscape orientations */
    }
  }
</style>

<div id="hyperbolic-geometry-explorer"></div>
<script src="https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/stats.js"></script>
<script type="module">
  import { createScene } from '../../../assets/js/hyperbolicScene.js'; // Adjust the path as necessary
  createScene('hyperbolic-geometry-explorer');
</script>

Further exploration and contemplation are encouraged as we consider the broader implications of hyperbolic geometry in various mathematical and physical theories.
