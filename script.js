function nextPages() {
    window.location.href = "yes.html";
}

function moveButton() {
    const button = document.getElementById("noButton");

    // Tambahkan efek getar
    button.classList.add("wiggle");
    setTimeout(() => {
        button.classList.remove("wiggle");
    }, 500);

    // Dapatkan ukuran layar dan batas pergerakan tombol
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    // Pastikan tombol tetap berada dalam layar
    const randomX = Math.max(0, Math.random() * maxX);
    const randomY = Math.max(0, Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Pastikan tombol juga bisa bergerak di perangkat sentuh
document.getElementById("noButton").addEventListener("click", moveButton);
