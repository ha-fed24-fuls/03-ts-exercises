// TALARMANUS: "Vi börjar med att beskriva tillåtna strängar för våra lampor.
// I TS undviker vi 'magiska strängar' och använder en union-typ."
type LightColor = "red" | "yellow" | "green";

// TALARMANUS: "Det här är ordningen i övningen: rött → gult → grönt.  Vi cyklar igenom den här arrayen."
const ORDER: LightColor[] = ["red", "yellow", "green"];

// TALARMANUS: "Plocka DOM-elementen. Jag använder generics så editorn vet vilken typ varje element har.
// '!' betyder: jag garanterar att elementet finns i HTML (annars är det ett dev-fel)."
const redEl = document.querySelector<HTMLDivElement>(".light-red")!;
const yellowEl = document.querySelector<HTMLDivElement>(".light-yellow")!;
const greenEl = document.querySelector<HTMLDivElement>(".light-green")!;
const btnNext = document.querySelector<HTMLButtonElement>("#next-btn")!;

// TALARMANUS: "Reset-funktion: stäng av alla lampor. Då har vi en ren bas varje gång vi ritar om."
function offAll(): void {
  redEl.classList.remove("on");
  yellowEl.classList.remove("on");
  greenEl.classList.remove("on");
}

// TALARMANUS: "State = vilken position vi är på i ORDER. Startar på 0 (rött)."
let i = 0;

// TALARMANUS: "render() = allt som ritar UI. Först reset, sen tända exakt en lampa.
// ORDER[i]! använder '!' för att slippa TS-varning när vi indexerar i en array."
function render(): void {
  offAll();
  // non-null assertion (!) pga noUncheckedIndexedAccess
  const id = ORDER[i]!;
  if (id === "red") redEl.classList.add("on");
  if (id === "yellow") yellowEl.classList.add("on");
  if (id === "green") greenEl.classList.add("on");
}

// TALARMANUS: "När man klickar: öka i med 1 och 'wrapa' med modulo så vi går 0→1→2→0→…
// Sen ritar vi om. Poängen: separera 'uppdatera state' från 'rita'."
btnNext.addEventListener("click", () => {
  // TALARMANUS: “Vi ökar index med 1 och använder modulo för att hoppa tillbaka till början när vi nått slutet — som en rund bana: 0→1→2→0→…”
  i = (i + 1) % ORDER.length;
  render();
});

// TALARMANUS: "Init: rita första läget direkt (rött tänt)."
render();

// Mini-manus

// Mål
// “Vi bygger ett trafikljus där en knapp tänder nästa lampa. Fokus: grundläggande DOM-manipulation i TypeScript.”

// Domän först (union-typ)
// “Med type LightColor = 'red' | 'yellow' | 'green' låser vi vårt språk — editorn stoppar fel färgnamn.”

// Sekvensen
// “ORDER beskriver ordningen. Vi kan lika gärna byta senare till en ‘realistisk’ sekvens utan att röra resten.”

// DOM-noder + !
// “querySelector<HTMLDivElement> ger mig rätt typer i editorn. ! säger ‘jag lovar att HTML:en finns’ — annars är det mitt fel i markupen.”

// Render-mönster
// “Vi har state (i) och en render() som alltid: reset → tänd exakt en. Den här separationen gör koden lätt att förstå och felsöka.”

// Event + modulo
// “(i + 1) % ORDER.length är ett enkelt sätt att ‘wrapa’ index 0→1→2→0… Perfekt för karuseller och vårt trafikljus.”

// Init
// “Alltid bra att visa något direkt: render() sätter rött på en gång.”

// Debug-tips
// “Öppna Elements i DevTools och titta när .on flyttas mellan divarna. Om inget händer: kolla att klassnamnen i HTML och i JS matchar.”
