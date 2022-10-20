'use strict';
/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
x Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
x Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
x Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e stilarli a vostro gusto
BONUS 3:
Aggiungere attraverso un form un membro al team
*/

//creo l'array del team
const team = [
    //dove ogni membro del team sarà un OGGETTO
    {   //OGGETTO 1 INDEX 0
        nome: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {   //OGGETTO 2 INDEX 1
        nome: 'Angela Caroll',
        role: 'Chief Editor',
        image: "angela-caroll-chief-editor.jpg"
    },
    {   // OGGETTO 3 INDEX 2
        nome: 'Walter Gordon',
        role: 'Office Manager',
        image: "walter-gordon-office-manager.jpg"
    },
    {   //OGGETTO 4 INDEX 3
        nome: 'Angela Lopez',
        role: 'Social Media Manager',
        image: "angela-lopez-social-media-manager.jpg"
    },
    {   // OGGETTO 5 INDEX 4
        nome: 'Scott Estrada',
        role: 'Developer',
        image: "scott-estrada-developer.jpg"
    },
    {   //OGGETTO 6 INDEX 5
        nome: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: "barbara-ramos-graphic-designer.jpg"
    }
];
// Stampo in console!
console.log(team);

//ora devo stamparlo sul DOM, quindi estraggo il div nell'html
const ourTeam = document.getElementById('our-team');
//creo un ciclo for of per prendere l'oggetto dall'array
for(let person of team){
    console.log(person)
    //e uso il ciclo for in per farlo ciclare dentro l'oggetto
    for(let key in person) {
        console.log(person[key]);
    }
    //e attacco la funzione che stamperà tutto nella card
    generaCard(person);
}

//ora devo creare la funzione che crei la card in maniera dinamica
function generaCard(oggetto){
    // console.log('sono card');
    const row = document.createElement('div');
    //devo inserire più classi al div, quindi creo un array con le classi
    const rowClass = ['row', 'g-5'];
    //per inserire tutte le classi che ho scritto nell'array aggiungo '...'
    row.classList.add(...rowClass);
    //creo anche la col
    const col = document.createElement('div');
    const colClass = ['col-4', 'text-center' ];
    col.classList.add(...colClass);
    //creo la card
    const card = document.createElement('div');
    card.classList.add('card');
    //creo l'immagine
    const img = document.createElement('img');
    card.classList.add('card-img-top');
    img.src = './img/' + oggetto.image;
    //creo il body del testo
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body')
    //creo un h5 per il nome
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerHTML = oggetto.nome;
    //creo un p per la mansione
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.innerHTML = oggetto.role;
    //li appendo nel DOM
    cardBody.appendChild(h5)
    cardBody.appendChild(p);
    card.appendChild(cardBody)
    card.appendChild(img);
    col.appendChild(card);
    row.appendChild(col);
    ourTeam.appendChild(row);
}