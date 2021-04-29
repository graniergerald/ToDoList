// Crée un formulaire

// Récupérer ce qui est taper dans le formulaire

// Injecter sur le dom

// Possibilité de supprimer l'élément en cliquant dessus (MonElement.remove())

// Stocker les données

// retrouver les données quand on reviens sur la page

// InputList.addEventListener("KeyboardEvent");

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Les variables
const form = document.querySelector("form");
const UlToDo = document.querySelector("#ListToDo");

// Stocker les données
// const storage = () => {
//   window.localStorage.list = UlToDo.innerHTML;
// };

// (() => {
//   UlToDo.innerHTML = window.localStorage.list;
// })();

//Ajout de liste
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (InputList.value != 0) {
    UlToDo.innerHTML += "<li class='td'>" + InputList.value + "</li>";
    InputList.value = "";
  } else {
    window.alert("Veuillez écrire quelque chose svp :)");
  }
});

//Retirer la liste

UlToDo.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
});

//Keypress
// window.addEventListener("keypress", (e) => {
//   console.log(e);
// });
