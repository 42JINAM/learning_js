const rangeInput = document.querySelector("#gameForm #range");
const guessInput = document.querySelector("#gameForm #guess");
const result = document.querySelector("#results");
const gameForm = document.querySelector("#gameForm");

function runGame(event) {
  event.preventDefault();
  const rN = rangeInput.value;
  const gN = guessInput.value;

  if ((rN === "" && gN === "") || rN < gN) {
    alert("please chose right numbers!");
  } else if (rN !== "" && gN !== "") {
    result.classList.remove("hidden");
    const cN = Math.floor(Math.random() * rN);
    result.innerHTML = `<h3>You chose: ${gN}, the machine chose: ${cN}</h3>`;
    if (cN > gN) {
      result.innerHTML += "<h3>You Lost!</h3>";
    } else {
      result.innerHTML += "<h3>You Win!</h3>";
    }
  }
}

gameForm.addEventListener("submit", runGame);
