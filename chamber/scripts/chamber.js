document.getElementById("date").textContent = document.lastModified;

// ============Navigation============
const navButton = document.getElementById("nav-button");

navButton.addEventListener("click", () =>
    {
    document.getElementById("nav-button").classList.toggle("active");
    document.getElementById("menu").classList.toggle("show");
    }
)