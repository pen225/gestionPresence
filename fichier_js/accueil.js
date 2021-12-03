//Selectionner mes elements
let list = document.querySelector(".list");
const bnt_pointer = document.querySelector("button");
let input = document.querySelector("input");
let droite = document.querySelector(".droite");
let alerte = document.querySelector(".alerte");
let userList = document.querySelector(".userList");

//addEventListener
bnt_pointer.addEventListener('click',pointer);


const user = JSON.parse(localStorage.getItem("etudiants"));
console.log(input.value);
//fonction
function pointer() {
    console.log("pointer");
    let valeur = input.value;
    const date = new Date();
    if (valeur === "") {
        alerte.classList.add("alerteStyle");
        alerte.innerHTML = "Veuilez entrer votre nom";
    }else {
        for(let etudiant of user){
            etudiant.date = date.toLocaleDateString();
            etudiant.heure = date.toLocaleTimeString();
            if (valeur === etudiant.nom) {
                const etud = {
                    nomEtud: nomEtud = etudiant.nom,
                    datEtud: datEtud = etudiant.date,
                    heureEtud: heureEtud = etudiant.heure
                }
                //Stocker les données du pointeur
                let etudN = JSON.parse(localStorage.getItem("etudiants"));

                if (etudN) {
                    etudN.push(etud);
                    localStorage.setItem("etudUser", JSON.stringify(etudN));
                }else{
                    etudN = [];
                    etudN.push(etud);
                    localStorage.setItem("etudUser", JSON.stringify(etudN));
                }

                const getUser = JSON.parse(localStorage.getItem("etudUser"));
                
                if (valeur === getUser.nomEtud) {
                    
                }else
                
                list.innerHTML += `
                <li class="userList"><img src="/projetNan/images/icons8-invité-homme-50.png" alt="">
                    <p>
                        ${etudiant.nom} <br> 
                        ${etudiant.prenom} 
                    </p> 
                    <p>
                        Spécialité:<br> ${etudiant.parcour}
                    </p>
                    <p>
                        ${etudiant.date} <br>
                        ${etudiant.heure} 
                    </p>
                </li>`;
                console.log(getUser[0].heureEtud);
                console.log(getUser.indexO);
                
                alerte.innerHTML="";
                input.value="";
                alerte.classList.remove("alerteStyle");
                localStorage.setItem('student', JSON.stringify(user));
                break;

            }
            else {
                alerte.classList.add("alerteStyle");
                alerte.innerHTML = "Veuilez vous enregistrer";
            }


            //parcourir pointage

        }

    }

    
}

/* 
1- Je veux que quand un etudiants poin pour ça deuxiéme fois on enregistre cette fois dans l'heure de depart
2- j'ai les differentes information qui von me permetre d'y arrivver

3-
    - 

*/



/*

    bnt_pointer.addEventListener('click', () => {

    let date = new Date();
    let date_jour = date.toLocaleDateString("fr");

    let matricule = input.value;

    // On récupére la liste des étudiants et l'historiques
    let liste_etudiants = JSON.parse(localStorage.getItem("etudiants"));
    let historiques = JSON.parse(localStorage.getItem("historiques"))

    


       

});


let instance = {
        "date": date.toLocaleDateString("fr"), 
        "matricule": matricule, 
        "heure_arrive": date.toLocaleTimeString(), 
        "heure_depart": undefined
    }

    // On vérifie que l'historiques existe
    if (historiques) {

        for (let i = 0; i < historiques.length; i++) {  

            if (matricule === historiques[i]["matricule"]) {
                // On ajoute l'heure de depart
                if (historiques[i]["heure_depart"] == undefined) {
                    historiques[i]["heure_depart"] = date.toLocaleTimeString();
                }
                else {
                    alert("Vous avez attein le nombre de pointage de la journée")
                }

                
                
            }
            else {
                historiques.push(instance)
            }
        }

        localStorage.setItem("historiques", JSON.stringify(historiques)) 
    }
    else if (!matricule) {
        alert("veuillez entrez un matricule");
    }
    else {

        // Création e l'objet qui va contenir l'historique des etudiants
        let historiques = []
        historiques.push(instance)
        localStorage.setItem("historiques", JSON.stringify(historiques)) 
    }

*/