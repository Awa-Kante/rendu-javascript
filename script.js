
fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json")
.then(function (response) {
    return response.json();

})

.then(function (data) {
    const divContenu = document.getElementById("contenuPrincipal");

const blocPrincipal = document.createElement("div");

const nomEntreprise = document.createElement("h2");

nomEntreprise.textContent = data.nomCommercial;

const phraseAccroche = document.createElement("p");
phraseAccroche.textContent = data.phraseAccroche;

const boutonAction = document.createElement("button");
boutonAction.textContent = data.texteAppelAction;

blocPrincipal.appendChild(nomEntreprise);
blocPrincipal.appendChild(phraseAccroche);
blocPrincipal.appendChild(boutonAction);

divContenu.appendChild(blocPrincipal);

const listeProduits = document.getElementById("listeSneakers");
data.produits.forEach(function(produit) {
    const elementListe = document.createElement("li");
elementListe.textContent = produit.nom;
listeProduits.appendChild(elementListe);    
});

const cardproduits = document.getElementById("listeCard");
data.services.forEach(function (service) {
    const card = document.createElement("div");
   card.classList.add("classCards");

   const titre = document.createElement("h2");
   titre.textContent = service.nom;

   const description = document.createElement("p");
description.textContent = service.description;

card.appendChild(titre);
card.appendChild(description);


cardproduits.appendChild(card)
})

})