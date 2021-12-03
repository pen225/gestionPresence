let formulaire = document.querySelector("form");
let nom = document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let adresse = document.querySelector("#adresse");
let genres = document.getElementsByName("sex");
let select = document.querySelector("select");
let numero_telephone = document.querySelector("#tel");
let email = document.querySelector("#email");
let bnt_enregistrer = document.querySelector("#enregistrer");
let date_naissance = document.querySelector("#date-naissance")
let date = new Date()
let aujoudhuil = date.toLocaleDateString()

let lien = location.search
let urlSearchParams = new URLSearchParams(lien);

// On récupére le matricule de l'étudiant
let matricule = urlSearchParams.get("matricule");
let recup_etudiants = JSON.parse(localStorage.getItem("etudiants"));

if (recup_etudiants) {
	for (let i = 0; i < recup_etudiants.length; i++) {
		if (recup_etudiants[i]["matricule"] === matricule) {
			
			formulaire.addEventListener("submit", () => {
	
				//Récuperation des valeurs par defaud
				let valeur_defaud_nom = recup_etudiants[i]["nom"];
				let valeur_defaud_prenom = recup_etudiants[i]["prenom"];
				let valeur_defaud_adresse = recup_etudiants[i]["adresse"];
				let valeur_defaud_genres = recup_etudiants[i]["genre"];
				let valeur_defaud_select = recup_etudiants[i]["parcour"];
				let valeur_defaud_numero_telephone = recup_etudiants[i]["numero_telephone"];
				let valeur_defaud_email = recup_etudiants[i]["email"];
				let valeur_defaud_date_naissance = recup_etudiants[i]["date_naissance"];
	
				// Récuperation des valeurs des inputs
				let valeur_inputs_nom = nom.value;
				let valeur_inputs_prenom = prenom.value;
				let valeur_inputs_adresse = adresse.value;
				let valeur_inputs_genres = genres.value;
				let valeur_inputs_select = select.value;
				let valeur_inputs_numero_telephone = numero_telephone.value;
				let valeur_inputs_email = email.value;
				let valeur_inputs_date_naissance = date_naissance.value;
	
				if (valeur_inputs_nom) {
					recup_etudiants[i]["nom"] = valeur_inputs_nom
	
				}
				else {
					recup_etudiants[i]["nom"] = valeur_defaud_nom
				}
	
				if (valeur_inputs_prenom) {
					recup_etudiants[i]["prenom"] = valeur_inputs_prenom
	
				}
				else {
					recup_etudiants[i]["prenom"] = valeur_defaud_prenom
				}
	
				if (valeur_inputs_adresse) {
					recup_etudiants[i]["adresse"] = valeur_inputs_adresse
	
				}
				else {
					recup_etudiants[i]["adresse"] = valeur_defaud_adresse
				}
	
				if (valeur_inputs_genres) {
					recup_etudiants[i]["genre"] = valeur_inputs_genres
	
				}
				else {
					recup_etudiants[i]["adresse"] = valeur_defaud_genres
				}
	
				if (valeur_inputs_select ){
					recup_etudiants[i]["adresse"] = valeur_inputs_adresse
	
				}
				else {
					recup_etudiants[i]["adresse"] = valeur_defaud_adresse
				}
	
			})
	
	
			break
		}
 }

}

else {
	console.log("condition 2");
	
	// Recuperation des éléments
	let formulaire = document.querySelector("form");
	let nom = document.querySelector("#nom");
	let prenom = document.querySelector("#prenom");
	let adresse = document.querySelector("#adresse");
	let genres = document.getElementsByName("sex");
	let select = document.querySelector("select");
	let numero_telephone = document.querySelector("#tel");
	let email = document.querySelector("#email");
	let bnt_enregistrer = document.querySelector("#enregistrer");
	let date_naissance = document.querySelector("#date-naissance")
	let date = new Date()
	let aujoudhuil = date.toLocaleDateString()

	formulaire.addEventListener("submit", (e) => {
		e.preventDefault();

		let id = localStorage.getItem("id");
		if (id) {
			id++
		}
		else {
			id = 0
			id++
		}

		localStorage.setItem("id", JSON.stringify(id))

		// let date = new Date();
		// let aujoudhuil = date.toLocaleDateString()

		// on vérifie quel genre a été choisit
		let valeur_radio;

		genres.forEach(genre => {
			if (genre.checked) {
				valeur_radio = genre.value
			}
		});

		// Objet qui va contenir les informations de l'étudiant
		let etudiant = {
			"nom": nom.value,
			"prenom": prenom.value,
			"adresse": adresse.value,
			"genre": valeur_radio,
			"parcour": select.value,
			"numero_telephone": numero_telephone.value,
			"email": email.value,
			"date_naissance": date_naissance.value,
			"matricule": `Nan-${id}`
		}

		

		let liste_etudiants = JSON.parse(localStorage.getItem("etudiants"));
		let liste_dates = JSON.parse(localStorage.getItem("dates"))

		// On verifie si des données existe déja dans le local storage
		if (liste_etudiants) {
			liste_etudiants.push(etudiant);
			liste_dates.push(aujoudhuil)

			localStorage.setItem("etudiants", JSON.stringify(liste_etudiants))
			localStorage.setItem("dates", JSON.stringify(liste_dates))
		}
		else {
			let liste_etudiants2 = [];
			let liste_dates2 = []

			liste_etudiants2.push(etudiant);
			liste_dates2.push(aujoudhuil)

			localStorage.setItem("etudiants", JSON.stringify(liste_etudiants2))
			localStorage.setItem("dates", JSON.stringify(liste_dates2))
		}

		// On vide les champs aprés inscription d'un étudiants
		nom.value = ""
		prenom.value = ""
		adresse.value = ""
		genres.value = ""
		select.value = ""
		numero_telephone.value = ""
		email.value = ""

	})
}


