const form = document.getElementById("registrationForm");

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyc1b1c88Y-BuDVGj_AilWYgkmEgmxyAITKrH8Hd7n9D2nf7M9KtnSXxfEbJsmzaTSXyw/exec";

const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    message.textContent = "";

    const data = {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    number: document.getElementById("phone").value,
    studio: document.getElementById("studio").value
};

    try {

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.status === "duplicate") {

            message.textContent = "❌  already registered.";
            message.className = "error";
            return;
        }

        window.location.href = `success.html?id=${result.id}`;

    } catch (error) {
        console.error(error);

        message.textContent = "❌ Registration failed. Please try again.";
        message.className = "error";
    }
});