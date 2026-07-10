console.log("verify.js loaded");

// Get ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Google Apps Script URL
const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyc1b1c88Y-BuDVGj_AilWYgkmEgmxyAITKrH8Hd7n9D2nf7M9KtnSXxfEbJsmzaTSXyw/exec?id=" + id;

// Verify Ticket
fetch(SCRIPT_URL)
  .then(response => response.json())
  .then(data => {

    const result = document.getElementById("result");

    if (data.status === "valid") {

      result.innerHTML = `
        <div class="ticket valid">
          <img src="./icon.jpeg" alt="Verified" class="success-icon">
          <h1>VERIFIED</h1>
          <p>Access Granted</p>
        </div>
      `;

    } else if (data.status === "used") {

      result.innerHTML = `
        <div class="ticket used">

          <h1>⚠️ TICKET ALREADY USED</h1>

          <p>This QR Code has already been scanned.</p>

        </div>
      `;

    } else {

      result.innerHTML = `
        <div class="ticket invalid">

          <h1>❌ INVALID TICKET</h1>

          <p>Entry Denied</p>

        </div>
      `;

    }

  })
  .catch(error => {

    console.error(error);

    document.getElementById("result").innerHTML = `
      <div class="ticket invalid">

        <h1>⚠️ Error</h1>

        <p>Unable to verify ticket.</p>

      </div>
    `;

  });