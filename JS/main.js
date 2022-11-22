// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: 
// nome, ruolo e foto.


const ourTeam = [
    {
        "nome": ["Wayne Barnett"],
        "ruolo": ["Founder & CEO"],
        "foto": ["wayne-barnett-founder-ceo.jpg"]    
    },
    {
        "nome": ["Angela Caroll"],
        "ruolo": ["Chief Editor"],
        "foto": ["angela-caroll-chief-editor.jpg"]    
    },
    {
        "nome": ["Walter Gordon"],
        "ruolo": ["Office Manager"],
        "foto": ["walter-gordon-office-manager.jpg"]    
    },
    {
        "nome": ["Angela Lopez"],
        "ruolo": ["Social Media Manager"],
        "foto": ["angela-lopez-social-media-manager.jpg"]    
    },
    {
        "nome": ["Scott Estrada"],
        "ruolo": ["Developer"],
        "foto": ["scott-estrada-developer.jpg"]    
    },
    {
        "nome": ["Barbara Ramos"],
        "ruolo": ["Graphic Designer"],
        "foto": ["barbara-ramos-graphic-designer.jpg"]    
    }
]

const container = document.querySelector(".container");



for(let i = 0; i < ourTeam.length; i++){

    // indico che numero di persona è, partendo da 1
    console.log("persona " + (i + 1));
    container.innerHTML += `Persona ${i + 1}`;
    for (let key in ourTeam[i]){
        console.log(`${key}: ${ourTeam[i][key]}`);
        container.innerHTML += `<div>${key}: ${ourTeam[i][key]}</div>`;
    } 


};















// ciclo for console esplicativo 
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo 
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// for(){};

// A = document.getElementById("B").value;


//``

// console.log("");
// for(let i = 0; i < 10; i++){

// }

// }