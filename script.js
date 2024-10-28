document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");

    const cardData = {
        number: "1234 5678 9012 3456",
        expiry: "01/25",
        cvv: "123"
    };

    document.getElementById("card-number").textContent = cardData.number;
    document.getElementById("cvv").textContent = cardData.cvv;
    document.getElementById("expiry-date").textContent = cardData.expiry;
    
    cardContainer.addEventListener("click", () => {
        cardContainer.classList.toggle("is-flipped");
    });
});
