// Récuperation des éléments
let div_photo = document.querySelector("#photo");
let div_detaile = document.querySelector("#detaile");
let bnt_modifier = document.querySelector("#bnt-modifier");
let bnt_supprimer = document.querySelector("#bnt-supprimer");
let tableau = document.querySelector("table");

// On récupere l'url et extraction de la valeur de l'index
let recuperation_url = location.search;
let urlSearchParams = new URLSearchParams(recuperation_url);
let index = urlSearchParams.get('index');

// On récupère les informations dans le local storage
let infos_etudiants = JSON.parse(localStorage.getItem("etudiants"));

let nom = infos_etudiants[index]["nom"];
let prenom = infos_etudiants[index]["prenom"];
let date_naissance = infos_etudiants[index]["date_naissance"];
let email = infos_etudiants[index]["email"];
let adresse = infos_etudiants[index]["adresse"];
let genre = infos_etudiants[index]["genre"];
let n_telephone = infos_etudiants[index]["numero_telephone"];
let parcour = infos_etudiants[index]["parcour"];
let matricule = infos_etudiants[index]["matricule"]

// On ajoute une image
div_photo.innerHTML = `<img src="/image_maquette/utilisateur(1).png" alt="photo de l'étudiant">`

tableau.innerHTML += `
    <tr>
        <th>Nom</th>
        <th class="cote-gauche">Prénom</th>
    </tr>
    <tr>
         <td> <p>${nom}</p></td> 

        <td class="cote-gauche"><p>${prenom}</p></td>        
    </tr>

    <tr>
        <th>Date de naissance</th>
        <th class="cote-gauche">Email</th>
    </tr>
    
    <tr>
        <td><p>${date_naissance}</p></td>
        <td class="cote-gauche"><p>${email}</p></td>
    </tr>

    <tr>
        <th>Lieu de résidance</th>
        <th class="cote-gauche">Numéro de téléphone</th>
    </tr> 
    <tr>
        <td><p>${adresse}</p></td>
        <td class="cote-gauche"><p>${n_telephone}</p></td>
    </tr>

    <tr>
        <th>Parcour</th>
        <th class="cote-gauche">Genre</th>
    </tr>
    <tr>
        <td><p>${parcour}</p></td>
        <td class="cote-gauche"><p>${genre}</p></td>
    </tr>
`
// On affiche les détaille sur l'étudians
div_detaile.innerHTML = `<h1>Information personnel</h1>`
div_detaile.append(tableau)

bnt_modifier.addEventListener("click", () => {
    location.href = `/fichier_html/enregistrement.html?matricule=${matricule}`
});

bnt_supprimer.addEventListener("click", () => {
    infos_etudiants.splice(index, 1)
    localStorage.setItem("etudiants", JSON.stringify(infos_etudiants))
    location.href = "/fichier_html/statistique.html"
})