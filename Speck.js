let alati = ["čekić", "bušilica", "guma", "mač"];

let toolbox = [];

window.addEventListener("DOMContentLoaded", event => {
    osvjeziPogled();
});

function osvjeziPogled() {
    let ul = document.getElementById("alati");

    ul.innerHTML = '';

    for (let stavka of alati) {
        let li = document.createElement("li");
        li.innerHTML = stavka;
        li.addEventListener('click', () => {
            uToolbox(stavka);
        });
        ul.appendChild(li);


    }

    ul = document.getElementById("toolbox");

    ul.innerHTML = '';

    for (let stavka of toolbox) {
        let li = document.createElement("li");
        li.innerHTML = stavka;
        li.addEventListener('click', () => {
            izToolboxa(toolbox.indexOf(stavka));
        });
        ul.appendChild(li);
    }

}

function uToolbox(alat) {
    toolbox = [alat, ...toolbox];

    osvjeziPogled();
}

function izToolboxa(index) {
    toolbox.splice(index, 1);

    osvjeziPogled();
}