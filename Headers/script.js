const headerRange = document.querySelector("#range-header");
const header = document.querySelector("h1");
const gapRange = document.querySelector("#gap-range");
const headerRangeLabel = document.querySelectorAll("label")[0];
const gapRangeLabel = document.querySelectorAll("label")[1];

function bindValue(label, input) {
    label.innerText = `${input.value}px`;
}

function resetValue(standartHeaderValue, standartGapValue) {
    headerRange.value = standartHeaderValue;
    gapRange.value = standartGapValue;
    header.style.fontSize = `${standartHeaderValue}px`;
    header.style.margin = `${standartGapValue}px`;
    bindValue(headerRangeLabel, headerRange);
    bindValue(gapRangeLabel, gapRange);
}

gapRange.addEventListener("change", event => {
    bindValue(gapRangeLabel, gapRange);
    header.style.margin = `${event.target.value}px`;
});

headerRange.addEventListener("change", event => {
    bindValue(headerRangeLabel, headerRange);
    header.style.fontSize = `${event.target.value}px`;
});

const resetBtn = document.querySelector(".btn");

resetBtn.addEventListener("click", () => {
    resetValue(32, 10);
});

const container = document.querySelector(".container");
const removeBtn = document.querySelector(".remove-btn");

removeBtn.addEventListener("click", () => {
    container.remove();
});
