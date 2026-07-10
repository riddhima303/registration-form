console.log("verify.js loaded");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyc1b1c88Y-BuDVGj_AilWYgkmEgmxyAITKrH8Hd7n9D2nf7M9KtnSXxfEbJsmzaTSXyw/exec?id=" + id;

fetch(SCRIPT_URL)
  .then(res => res.json())
  .then(data => {
    if (data.status === "valid") {

  document.getElementById("result").innerHTML = `
    <div class="ticket valid">
      <video
        autoplay
        muted
        playsinline
        width="120"
        height="120">
        <source src="./success-check.mp4" type="video/mp4">
      </video>

      <h1>VERIFIED</h1>
    </div>
  `;

}
    else if (data.status === "used") {

      document.getElementById("result").innerHTML = `
        <div class="ticket used">
          <h1>⚠️ TICKET ALREADY USED</h1>
          <p>This QR code has already been scanned.</p>
        </div>
      `;

    } else {

      document.getElementById("result").innerHTML = `
        <div class="ticket invalid">
          <h1>❌ INVALID TICKET</h1>
          <p>Entry Denied</p>
        </div>
      `;

    }

  })
  .catch(err => {
    console.error(err);

    document.getElementById("result").innerHTML = `
      <div class="ticket invalid">
        <h1>⚠️ Error</h1>
        <p>Unable to verify ticket.</p>
      </div>
    `;
  });