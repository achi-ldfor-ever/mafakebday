function startCelebration() {
    let button = document.getElementById("celebrateBtn");
    button.style.backgroundColor = "red";
    button.innerText = "🎈 Let's Party! 🎉";
    
    startConfetti(); // Call the confetti animation
}

// Confetti Animation
function startConfetti() {
    const confettiCanvas = document.getElementById("confetti");
    const ctx = confettiCanvas.getContext("2d");

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    let confettiParticles = [];

    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 5 + 5,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

        confettiParticles.forEach((p) => {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function updateConfetti() {
        confettiParticles.forEach((p) => {
            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y > confettiCanvas.height) {
                p.y = 0;
                p.x = Math.random() * window.innerWidth;
            }
        });
    }

    function animateConfetti() {
        drawConfetti();
        updateConfetti();
        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}
