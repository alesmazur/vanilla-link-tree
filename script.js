VANTA.BIRDS({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  colorMode: "variance",
  wingSpan: 14.0,
  separation: 53.0,
  alignment: 40.0,
  cohesion: 35.0,
  quantity: 3.0,
  backgroundAlpha: 0,
});

setTimeout(() => {
  const main = document.querySelector("main");
  main.style.opacity = 1;
  main.style.filter = "blur(0px)";
}, 1000);
