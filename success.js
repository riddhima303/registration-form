// Get the ID from the URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Show the registration ID
document.getElementById("registrationId").textContent = id;

// Generate QR Code
const verifyUrl =
`https://registration-form-flame-theta.vercel.app/verify.html?id=${id}`;

document.getElementById("qrImage").src =
`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(verifyUrl)}`;

document.getElementById("qrImage").width = 250;
document.getElementById("qrImage").height = 250;