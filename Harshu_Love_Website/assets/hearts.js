
setInterval(function () {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);
    let rise = setInterval(() => {
        heart.style.top = parseFloat(heart.style.top) - 2 + "px";
        if (parseFloat(heart.style.top) < -50) {
            clearInterval(rise);
            heart.remove();
        }
    }, 50);
}, 400);
