import "../style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="card">
      <p id="current_counter">Current Counter</p>
      <button id="inc" type="button">Increment</button>
      <button id="dec" type="button">Decrement</button>
    </div>
  </div>
`;

import("./counter.js").then(({ setupCounter }) => {
  setupCounter();
});
