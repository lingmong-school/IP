document.addEventListener("DOMContentLoaded", function () {
    const wheel = document.querySelector(".wheel");
    const spinButton = document.querySelector(".button");
    const messageContainer = document.getElementById("messageContainer");

    spinButton.addEventListener("click", () => {
        const degrees = Math.floor(Math.random() * 360) + 980; // Spin between 2 to 3 full rotations
        wheel.style.transition = "transform 3s ease-out";
        wheel.style.transform = `translate(-50%, -50%) rotate(${degrees}deg)`;
    });

    wheel.addEventListener("transitionend", () => {
        wheel.style.transition = "none";
        wheel.style.transform = "translate(-50%, -50%) rotate(0deg)";

        // Display message after wheel finishes spinning
        setTimeout(() => {
            messageContainer.textContent = "CONGRATULATIONS! You won 25% OFF!";
        }, 500); // Adjust the timeout duration as needed
    });
});