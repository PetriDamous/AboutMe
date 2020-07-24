const form = document.getElementById("form");
const entries = document.getElementById("entries");

form.addEventListener("submit", (e) => {
    console.log(e.target)
    e.preventDefault();
});