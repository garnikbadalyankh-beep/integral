async function send() {
    const expr = document.getElementById("input").value;

    const res = await fetch("https://YOUR-SERVER.com/solve", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ expression: expr })
    });

    const data = await res.json();

    document.getElementById("result").innerText = data.answer;
