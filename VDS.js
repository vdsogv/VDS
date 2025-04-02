document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".animated-text");
    text.innerHTML = text.textContent.split("").map((letter, i) => 
        <span style="animation-delay:${i * 0.2}s">${letter}</span>
    ).join("");
});
