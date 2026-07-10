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
          <img src="./icons.png" alt="Verified" class="success-icon">
          <h1>VERIFIED</h1>
      `;

    } else if (data.status === "used") {

      result.innerHTML = `
          <img src="./caution.png" alt="Used" class="success-icon">
          <h1>This QR Code has already been scanned.</h1>

      `;

    } else {

      result.innerHTML = `
          <img src="./red.png" alt="Invalid" class="success-icon">
          <h1>Entry Denied</h1>
  
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