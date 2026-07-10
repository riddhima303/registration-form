// Get the ID from the URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Generate the verification URL
const verifyUrl =
`https://registration-form-flame-theta.vercel.app/verify.html?id=${id}`;

// Generate the QR Code
const qrImage = document.getElementById("qrImage");

qrImage.src =
`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(verifyUrl)}`;

qrImage.width = 250;
qrImage.height = 250;