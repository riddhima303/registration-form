const form = document.getElementById("registrationForm");

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbyc1b1c88Y-BuDVGj_AilWYgkmEgmxyAITKrH8Hd7n9D2nf7M9KtnSXxfEbJsmzaTSXyw/exec";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("phone").value,
        college: document.getElementById("college").value
    };

    try {

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await response.json();

        window.location.href = `success.html?id=${result.id}`;

    } catch (error) {
        console.error(error);
        alert("Registration failed.");
    }
});