// ===============================
// Övning 4b – Realistiskt trafikljus
// Sekvens: red → redYellow → green → yellow → red
// ===============================

type LightState = "red" | "redYellow" | "green" | "yellow";
const ORDER: LightState[] = ["red", "redYellow", "green", "yellow"];

const redEl = document.querySelector<HTMLDivElement>(".light-red")!;
const yellowEl = document.querySelector<HTMLDivElement>(".light-yellow")!;
const greenEl = document.querySelector<HTMLDivElement>(".light-green")!;
const btnNext = document.querySelector<HTMLButtonElement>("#next-btn")!;

function offAll(): void {
  redEl.classList.remove("on");
  yellowEl.classList.remove("on");
  greenEl.classList.remove("on");
}

let i = 0;

function render(): void {
  offAll();
  const state = ORDER[i]!;
  if (state === "red") {
    redEl.classList.add("on");
  } else if (state === "redYellow") {
    redEl.classList.add("on");
    yellowEl.classList.add("on"); // två lampor samtidigt
  } else if (state === "green") {
    greenEl.classList.add("on");
  } else if (state === "yellow") {
    yellowEl.classList.add("on");
  }
}

btnNext.addEventListener("click", () => {
  i = (i + 1) % ORDER.length;
  render();
});

render();
