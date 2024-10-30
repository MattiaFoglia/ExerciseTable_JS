const persone=[

    {nome: "Gianpaolo", cognome: "Valdez", eta: "47" },
    {nome: "Nicco", cognome: "Valdez", eta: "9" },
    {nome: "Mamma", cognome: "Valdez", eta: "63" },
    {nome: "Babbo", cognome: "Valdez", eta: "50" },
    {nome: "Nonno", cognome: "Valdez", eta: "99" },
    {nome: "Nonna", cognome: "Valdez", eta: "93" }
]
const tabella = document.getElementById("tabella");
const array = ["Nome", "Cognome", "Età"];


function stampa(){
    let tr = document.createElement("tr");
    tabella.appendChild(tr);
    for(let i = 0; i < 3; i++){
        let th = document.createElement("th");
        th.innerHTML = array[i];
        tr.appendChild(th);
    }

    for(let i = 0; i < persone.length; i++){
        let tr = document.createElement("tr")
        const persona = persone[i];
        for(let x in persona){
            let td = document.createElement("td");
            td.innerHTML = persona[x];
            tr.appendChild(td);
        }
        tabella.appendChild(tr);
    }
}


document.addEventListener("DOMContentLoaded",stampa);
























