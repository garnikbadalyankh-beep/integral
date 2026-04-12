function add(value) {
    document.getElementById("input").value += value;
}

function clearInput() {
    document.getElementById("input").value = "";
}

function solve() {
    const expr = document.getElementById("input").value;

    document.getElementById("result").innerText =
        "∫(" + expr + ") dx = (demo result)";
}

// ՍԱ Է ԿԱՐԵՎՈՐԸ 👇
function openChat() {
    window.location.href = "https://chat.openai.com";
}
