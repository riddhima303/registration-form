// Get the ID from the URL
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// Show the registration ID
document.getElementById("registrationId").textContent = id;

// Generate the QR Code
const verifyUrl =
`https://registration-page01.pages.dev/verify.html?id=${id}`;

document.getElementById("qrImage").src =
`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(verifyUrl)}`;


qrImage.width = 250;
qrImage.height = 250;
