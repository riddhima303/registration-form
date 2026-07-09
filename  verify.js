console.log("verify.js loaded");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyc1b1c88Y-BuDVGj_AilWYgkmEgmxyAITKrH8Hd7n9D2nf7M9KtnSXxfEbJsmzaTSXyw/exec?id=" + id;

fetch(SCRIPT_URL)
  .then(res => res.json())
  .then(data => {

    if (data.status === "valid") {

      document.getElementById("result").innerHTML = `
        <h1>✅ VALID TICKET</h1>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.number}</p>
        <p><b>College:</b> ${data.college}</p>
        <p><b>ID:</b> ${data.id}</p>
      `;

    } else {

      document.getElementById("result").innerHTML = `
        <h1 style="color:red;">❌ INVALID TICKET</h1>
      `;

    }

  })
  .catch(err => {
    console.error(err);
    document.getElementById("result").innerHTML =
      "<h1 style='color:red'>Error connecting to server.</h1>";
  });