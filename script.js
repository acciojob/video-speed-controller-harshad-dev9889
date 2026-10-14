
const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector("video");

function handleMove(e) {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;

  const min = 0.4;
  const max = 4;
  const playbackRate = percent * (max - min) + min;

  bar.style.height = `${percent * 100}%`;
  bar.textContent = `${playbackRate.toFixed(1)}×`;

  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleMove);
