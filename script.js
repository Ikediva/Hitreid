
// Reid Cry Game Logic
let hitCount = 0;
const reidImage = document.getElementById("reid-image");
const message = document.getElementById("message");

reidImage.addEventListener("click", () => {
    hitCount++;
    if (hitCount < 5) {
        reidImage.style.transform = `scale(${1 + hitCount * 0.05})`; // Slight zoom effect
    } else {
        reidImage.src = "reid_cry.jpg"; // Change image
        message.textContent = "You made Reid cry."; // Show message
        reidImage.style.transform = "scale(1)"; // Reset scale
    }
});
