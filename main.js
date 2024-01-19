// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. OK

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.OK      

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.OK

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto OK

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe OK

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva OK

// BONUS 2:
// Organizzare i singoli membri in card/schede OK

const arrayOggetti = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "./img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "./img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "./img/scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "./img/barbara-ramos-graphic-designer.jpg"
    }
];

console.log(arrayOggetti);

for (let i = 0; i < arrayOggetti.length; i++) {
    let elemento = arrayOggetti[i];

    document.querySelector("main .row").innerHTML += `
        <div class="card col">
            <img class="card-img-top" src='${elemento.foto}' alt="Title" />
            <div class="card-body">
                <h4 class="card-title">
                    ${elemento.nome}
                </h4>
                <p class="card-text">
                    ${elemento.ruolo}
                </p>
            </div>
        </div>`;
}