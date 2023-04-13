const leftCard = document.querySelector(".card-1");
const rightCard = document.querySelector(".card-2");

const leftParagraph = document.querySelector(".card-1 p");
const rightParagraph = document.querySelector(".card-2 p");

const leftButton = document.querySelector(".card-1 button");
const rightButton = document.querySelector(".card-2 button");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let leftTimeline = gsap.timeline({ paused: true, reversed: true });

leftCard.addEventListener("click", (event) => {
  event.stopPropagation();
  leftTimeline.play();
});

leftTimeline.to(".card-2", {
  width: 0,
  height: 0,
  opacity: 0,
  duration: 0.5,
});

leftTimeline.to(
  ".card-1",
  {
    ease: Power1.easeInOut,
    height: "100%",
    width: "100%",
    duration: 0.5,
  },
  "<"
);

leftTimeline.from(
  ".card-1 p",
  {
    ease: Power1.easeInOut,
    duration: 0.3,
    opacity: 0,
    display: "none",
    y: 100,
  },
  "<"
);

leftTimeline.from(
  ".card-1 button",
  {
    ease: Power1.easeInOut,
    duration: 0.3,
    opacity: 0,
    display: "none",
    y: 100,
  },
  "<"
);

leftTimeline.from(
  ".card-1 svg",
  {
    ease: Power1.easeInOut,
    display: "none",
    opacity: 0,
    y: 100,
  },
  "<"
);

leftArrow.addEventListener("click", (event) => {
  event.stopPropagation();
  leftTimeline.reverse();
});

let rightTimeline = gsap.timeline({ paused: true, reversed: true });

rightCard.addEventListener("click", (event) => {
  event.stopPropagation();
  rightTimeline.play();
});

rightTimeline.to(".card-1", {
  width: 0,
  height: 0,
  opacity: 0,
  duration: 0.5,
});

rightTimeline.to(
  ".card-2",
  {
    ease: Power1.easeInOut,
    height: "100%",
    width: "100%",
    duration: 0.5,
  },
  "<"
);

rightTimeline.from(
  ".card-2 p",
  {
    ease: Power1.easeInOut,
    duration: 0.3,
    opacity: 0,
    display: "none",
    y: 100,
  },
  "<"
);

rightTimeline.from(
  ".card-2 button",
  {
    ease: Power1.easeInOut,
    duration: 0.3,
    opacity: 0,
    display: "none",
    y: 100,
  },
  "<"
);

rightTimeline.from(
  ".card-2 svg",
  {
    ease: Power1.easeInOut,
    display: "none",
    opacity: 0,
    y: 100,
  },
  "<"
);

rightArrow.addEventListener("click", (event) => {
  event.stopPropagation();
  rightTimeline.reverse();
});
