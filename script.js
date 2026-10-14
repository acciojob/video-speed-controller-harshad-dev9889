const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4.0;
  
  // Constrain percent between 0 and 1 to prevent overflow
  const clampedPercent = Math.max(0, Math.min(1, percent));
  
  const height = Math.round(clampedPercent * 100) + '%';
  const playbackRate = clampedPercent * (max - min) + min;
  
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);