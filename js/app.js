const rating_cards = document.querySelectorAll(".ratings span");
const submit = document.querySelector(".submit");
const rate_point = document.getElementById("rate");
const section = document.querySelector(".section");
const thanks = document.querySelector(".thanks");

let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove("checked")
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})

