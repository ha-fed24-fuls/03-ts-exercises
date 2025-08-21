// TODO Vilka strängar är tillåtna för lamporna? Med en type (ts)
type LightColors = "red" | "yellow" | "green";

// TODO Bestämma ordning på lamporna. Med en array som vi kommer cyckla/loopa igenom.
const Order: LightColors[] = ["red", "yellow", "green"];

// TODO Selektera och lägga in divarna och knappen i variabler.
const redEl = document.querySelector<HTMLDivElement>(".light-red")!;
const yellowEl = document.querySelector<HTMLDivElement>(".light-yellow")!;
const greenEl = document.querySelector<HTMLDivElement>(".light-green")!;

const switchBtn = document.querySelector<HTMLButtonElement>("#next-btn")!;

// TODO En funktion som tar bort on classen från alla divar.
function offAll(): void {
  redEl.classList.remove("on");
  yellowEl.classList.remove("on");
  greenEl.classList.remove("on");
}

// TODO Bestämma vilken position och lampa som ska vara tänd, default är röda lampan ska lysa (index 0)
let index = 0;

// TODO En funktion som första använder "ta bort funktionen" sen ge on classen till den lampa som ska lysa.
function switchOn(): void {
  offAll();
  const id = Order[index];

  if (id === "red") redEl.classList.add("on");
  if (id === "yellow") yellowEl.classList.add("on");
  if (id === "green") greenEl.classList.add("on");
}

// TODO Ge knappen en event listener som ökar index med 1 (flyttar oss i färg-array) och ritar om lamporna.
switchBtn.addEventListener("click", () => {
  index = (index + 1) % Order.length; //DEnna modulo (%) loopar från 0>1>2>0>1 osåvidare.
  switchOn();
});

// TODO Använda/köra "Bestämma vilken default position och lampa" funktion.
switchOn();
