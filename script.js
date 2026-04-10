function add(value) {
    document.getElementById("input").value += value;
}

function solve() {
    const expr = document.getElementById("input").value;

    try {
        // պարզ մոտեցում (ոչ լրիվ symbolic)
        let result = "∫(" + expr + ") dx = (demo mode)";

        document.getElementById("result").innerText = result;
    } catch (e) {
        document.getElementById("result").innerText = "Error";
    }
}