'use strict';
/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
x Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
x Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
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
const teamHtml = document.getElementById('our-team');
console.log(teamHtml)
for(let person of team){
    const card = document.createElement('div');

    card.append(person.nome);
    card.append(person.role);
    card.append(person.image);
    teamHtml.append(card);
}