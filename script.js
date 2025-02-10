function nextPages() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    // Tambahkan efek getar
    noButton.classList.add("wiggle");
    setTimeout(() => {
        noButton.classList.remove("wiggle");
    }, 500);

    // Dapatkan ukuran layar dan batas pergerakan tombol
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    // Pastikan tombol tetap berada dalam layar
    const randomX = Math.max(0, Math.random() * maxX);
    const randomY = Math.max(0, Math.random() * maxY);

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Membesarkan tombol "Yes"
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`; // Membesar 20% setiap klik
}

// Pastikan tombol juga bisa bergerak di perangkat sentuh
document.getElementById("noButton").addEventListener("click", moveButton);
