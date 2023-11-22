function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Supposons que la connexion réussisse (vous devez ajouter votre propre logique ici)
    // Pour cet exemple, je vais simplement rediriger l'utilisateur vers une autre page
    if (username === "baptiste" && password === "test1") {
        window.location.href = "page-accueil.html"; // Redirection vers la page d'accueil
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect");
    }
}

function signup() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // TODO: Ajouter la logique d'inscription

    console.log("Inscription avec le nouveau nom d'utilisateur: " + newUsername + " et le mot de passe: " + newPassword);
}
