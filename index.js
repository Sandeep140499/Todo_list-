const main = document.getElementById("main");
const btn = document.getElementById("btn");

function addListener(button){
    const input = button.previousElementSibling;
    addCard(input.value);
}

function addCard(val){
    const container = document.createElement("div");
    container.className = "card";
    container.innerHTML = `
        <b>${val}</b>
        <button>Submit</button>`;

    main.appendChild(container);
}

