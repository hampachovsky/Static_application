const input = document.querySelector("input");

function bindValue() {
    const input = document.querySelector("input");
    const label = document.querySelector("label");
    label.innerText = input.value;
}

input.addEventListener("change", event => {
    bindValue();
    const header = document.querySelector("h1");
    header.style.fontSize = `${event.target.value}px`;
});
