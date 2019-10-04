// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];



var i = 1;
questions.forEach(function(question) {

	var questionElt = document.createElement("strong");
	questionElt.textContent = "Question "+i+ " : ";

	var texteEnonceElt = document.createElement("span");
	texteEnonceElt.textContent = question.enonce;
	texteEnonceElt.style.fontStyle = "italic";

	var enonceElt = document.createElement("div");
	enonceElt.appendChild(questionElt);
	enonceElt.appendChild(texteEnonceElt);

	var zoneReponseElt = document.createElement("div");
	var boutonElt = document.createElement("button");
	boutonElt.textContent = "Afficher la réponse";
	zoneReponseElt.appendChild(boutonElt);

	boutonElt.addEventListener("click", function() {

		var reponseElt = document.createElement("div");
		reponseElt.textContent = question.reponse;
		zoneReponseElt.innerHTML = "";
		zoneReponseElt.appendChild(reponseElt);
	});

	var pElt = document.createElement("p");
	pElt.appendChild(enonceElt);
	pElt.appendChild(zoneReponseElt);

	document.getElementById("contenu").appendChild(pElt);
	i++;
});