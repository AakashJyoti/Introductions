import "./style.css";
import anime from "animejs";

anime({
  targets: ".box",
  // translateX: [300],
  rotateZ: "360deg",
  keyframes: [
    {
      rotateY: "360deg",
      background: "rgb(3, 252, 44)",
    },
  ],
  // translateX: [100],
  translateX: (e, i) => 100 * i,
  // translateY: [100],
  translateY: (e, i) => -200 * i,
  translateZ: (e, i) => -100 * i,
  duration: 10000,
  // delay: 500,
  delay: anime.stagger(200),
  loop: true,
  direction: "alternate",
  // easing: "linear"
  // easing: "easeInOutSine"
});
