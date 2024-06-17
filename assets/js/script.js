document.addEventListener("DOMContentLoaded", function () {
  const verificarButton = document.getElementById("verificar");
  const stickerMessage = document.getElementById("stickerMessage");

  verificarButton.addEventListener("click", function () {
    const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    const totalStickers = sticker1 + sticker2 + sticker3;

    if (totalStickers <= 10) {
      stickerMessage.textContent = `Llevas ${totalStickers} stickers.`;
    } else {
      stickerMessage.textContent = "Llevas demasiados stickers.";
    }
  });
});
