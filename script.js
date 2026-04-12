function add(value) {
    document.getElementById("input").value += value;
}

function clearInput() {
    document.getElementById("input").value = "";
}

function solve() {
    const expr = document.getElementById("input").value;

    // պարզ demo տարբերակ
    document.getElementById("result").innerText =
        "∫(" + expr + ") dx = (demo result)";
}
function openChat() {
    window.open("https://chat.openai.com", "_blank");
}
