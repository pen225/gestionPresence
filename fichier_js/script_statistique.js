// Récuperation des éléments
let formulaire = document.querySelector("form");
let search = document.querySelector("#search");
let div = document.querySelector("#conteneurs-info");
let tableau = document.querySelector("table");
let recuperation_menu = document.querySelector("#menu");
let affiche_erreur = document.querySelector(".saisir-vide");
let bnt_recherche = document.querySelector(".box-recherche");

// On recupére la liste de tout les étudiants
let listes_etudiants = JSON.parse(localStorage.getItem("etudiants"))

bnt_recherche.addEventListener("click", (e) => {
    e.preventDefault()
    let valeur_rechercher = search.value

    for (let i = 0; i < listes_etudiants.length; i++) {
        if (listes_etudiants[i]["matricule"] === valeur_rechercher) {
            location.href = `/fichier_html/infos_etudians.html?index=${i}`
            console.log(i);

        }   
    }
})

// Cette fonction a pour bute d'afficher tous les étudiants
for (let i = 0; i < listes_etudiants.length; i++) {

    let nom = listes_etudiants[i]["nom"];
    let prenom = listes_etudiants[i]["prenom"];

    // On verifie si l'étudiant a été present lors des jour de cours
    //if (listes_etudiants[i]["historique"][])
    tableau.innerHTML +=  `
        <tr>
            <td class="numero">${i+1} </td>
            <td><a href="/fichier_html/infos_etudians.html?index=${i}" target="_blank">${nom} ${prenom}</a></td>
            <td>
                <div class="presence">
                    present 
                </div>
            </td>

            <td>
                <div class="presence">
                    present
                </div>
            </td>
            <td>
                <div class="presence">
                    present
                </div>
            </td>
            <td>
                <div class="presence">
                    present
                </div>
            </td>
            <td>
                <div class="presence">
                    present
                </div>
            </td>
        </tr>        
        `
}


