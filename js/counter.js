export function setupCounter() {
  // setupCounter(
  //   document.querySelector("#inc"),
  //   document.querySelector("#dec"),
  //   document.querySelector("#current_counter")
  // );

  const inc = document.querySelector("#inc");
  const dec = document.querySelector("#dec");
  const current_counter = document.querySelector("#current_counter");
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    current_counter.innerHTML = count;
  };
  inc.addEventListener("click", () => setCounter(counter + 1));
  dec.addEventListener("click", () => setCounter(counter - 1));

  setCounter(0);
}
