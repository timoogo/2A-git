// ---- VARIABLES ----
const members = [
    {
        name: 'Thimothée "Timoogo" G.',
        profilePicture: { src: "img/timothee_g.jpg", alt: "Image profil Thimotée"},
        fullBio: "*Insert Timoogo's full-bio here*"
    },
    {
        name: 'Alexandre "ImWallAshing" V.',
        profilePicture: { src: "img/imagelove-lies-2-pika.png", alt: "Image de profil Alexandre (elle est meilleurs que les autres)"},
        fullBio: "*Insert ImWallAshing's full-bio here*"
    },
    {
        name: 'Maxime "SveRKeR" A.',
        profilePicture: { src: "img/sverker.png", alt: "Image profil Maxime"},
        fullBio: "*Insert SveRKeR's full-bio here*"
    },
    {
        name: 'Martin "MadSandman" B.',
        profilePicture: { src: "img/martin_b.png", alt: "Image de profil Martin"},
        fullBio: "*Insert MadSandman's full-bio here*"
    }
];

// ---- FUNCTIONS ----
function LoadMember(idMember) {
    let index = 0;

    switch (idMember) {
        case "Timoogo":
            index = 0;
            break;
        case "ImWallAshing":
            index = 1;
            break;
        case "SveRKeR":
            index = 2;
            break;
        case "MadSandman":
            index = 3;
            break;
        default:
            break;
    }

    document.getElementById('popupImage').src = members[index].profilePicture.src;
    document.getElementById('popupImage').alt = members[index].profilePicture.alt;
    document.getElementById("popupName").innerHTML = members[index].name;
    document.getElementById("popupFullBio").innerHTML = members[index].fullBio;
}

function OpenPopup(pseudo) {
    LoadMember(pseudo);
    document.getElementById("popup").style.display = "block";
}

function ClosePopup() {

}

// ---- EXEC ----
window.onload = function() {
    //Add a listener for each profile cards to open the corresponding popup
    Array.from(document.getElementsByClassName("profileCard")).forEach(function(element) {
        let id = element.id;
        element.addEventListener('click', function() {
            OpenPopup(id);
        })
    });

    //Add a listener for the close cross on the popup card
    document.getElementById('popupCloseBtn').addEventListener('click', function() { ClosePopup(); });

    //Add a listerner for closing the popup when clicking outside the card
    document.getElementById('popup').addEventListener('click', function() { ClosePopup(); });
};

//TODO Créer le listener pour appeler la fonction closePopup quand on clique sur le popupContainer ou la croix de fermeture