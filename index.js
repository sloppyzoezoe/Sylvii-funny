 function generateCardNumber() {
      let digits = "";
      for (let i = 0; i < 16; i++) {
        digits += Math.floor(Math.random() * 10);
      }
      return digits.replace(/(.{4})/g, "$1 ").trim();
    }

    function generateExpirationDate() {
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
      const year = String(Math.floor(Math.random() * 6) + 25);
      return `${month}/${year}`;
    }

    function generateCVVNumber() {
      return Math.floor(100 + Math.random() * 900);
    }

    function rerollCard() {
      document.getElementById("cardNumber").textContent = generateCardNumber();
      document.getElementById("expiration").style.display = "none";
      document.getElementById("expButtons").style.display = "none";
      document.getElementById("cvv").style.display = "none";
      document.getElementById("cvvButtons").style.display = "none";
    }

    function confirmCard() {
      document.getElementById("expiration").textContent =
        "Expiration Date: " + generateExpirationDate();
      document.getElementById("expiration").style.display = "block";
      document.getElementById("expButtons").style.display = "flex";
      document.getElementById("cvv").style.display = "none";
      document.getElementById("cvvButtons").style.display = "none";
    }

    function rerollExpiration() {
      document.getElementById("expiration").textContent =
        "Expiration Date: " + generateExpirationDate();
      document.getElementById("cvv").style.display = "none";
      document.getElementById("cvvButtons").style.display = "none";
    }

    function generateCVV() {
      document.getElementById("cvv").textContent =
        "CVV: " + generateCVVNumber();
      document.getElementById("cvv").style.display = "block";
      document.getElementById("cvvButtons").style.display = "flex";
    }

    function rerollCVV() {
      document.getElementById("cvv").textContent =
        "CVV: " + generateCVVNumber();
    }

    function confirmCVV() {
      alert("no way that's true");
    }

    window.onload = function () {
      rerollCard();
    };