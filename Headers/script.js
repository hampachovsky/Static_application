const input = document.querySelector("input");
const header = document.querySelector("h1");
bindValue();

function bindValue() {
    const label = document.querySelector("label");
    label.innerText = `${input.value}px`;
}

function resetValue(standartValue) {
    input.value = standartValue;
    bindValue();
}

input.addEventListener("change", event => {
    bindValue();

    header.style.fontSize = `${event.target.value}px`;
});

const resetBtn = document.querySelector(".btn");

resetBtn.addEventListener("click", () => {
    resetValue(32);
});
