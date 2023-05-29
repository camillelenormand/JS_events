// Feature #1 :

let footer = document.querySelector("footer");

footer.addEventListener("click", () => {
  alert("clique")
});

// Feature #1-bis :
let count = 0;

footer.addEventListener("click", () => {
  count++;
  alert(`clique numéro ${count}`);
});

// Feature #2 :

let navbar = document.getElementById("navbarHeader");

let burger = document.querySelector("button.navbar-toggler");

burger.addEventListener("click", () => {
  navbar.classList.toggle("collapse");
});

// Feature #3 :

let card = document.getElementsByClassName("card mb-4 box-shadow").item(0);
console.log(card);

let newButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary").item(0);
console.log(newButton);

newButton.addEventListener("click", () => {
  card.style.color = "red";
});

// Feature #4 :

let secondCard = document.getElementsByClassName("card mb-4 box-shadow").item(1);
console.log(secondCard);

let secondButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary").item(1);
console.log(secondButton);

secondButton.addEventListener("click", () => (secondCard.style.color === "green") ? secondCard.style.color = "" : secondCard.style.color = "green");

// Feature #5 :

let link = document.getElementsByTagName("link").item(0);

let navbarHeader = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow").item(0);
console.log(navbarHeader);

navbarHeader.addEventListener("dblclick", () => {
  switch (link.disabled) {
    case true:
      link.disabled = false;
      break;
    case false:
      link.disabled = true;
      break;
  }
});


// Feature #6 :

let viewButtons = document.getElementsByClassName("btn btn-sm btn-success");

for (let i = 0; i < viewButtons.length; i++) {
  let viewButton = viewButtons.item(i);
  let card = document.getElementsByClassName("card mb-4 box-shadow").item(i);
  let cardText = card.getElementsByClassName("card-text").item(0);
  let cardImage = card.getElementsByClassName("card-img-top").item(0);
  viewButton.addEventListener("mouseover", () => {
    if (cardText.style.display !== "none") {
      cardText.style.display = "none";
      cardImage.style.width = "20%";
    } else {
      cardText.style.display = "";
      cardImage.style.width = "";
    }
  });
}


// Feature #7 :

let greyButton = document.getElementsByClassName("btn btn-secondary my-2").item(0);

greyButton.addEventListener("click", () => {
  let cards = document.getElementsByClassName("col-md-4");
  let firstCard = cards.item(0);
  let lastCard = cards.item(cards.length - 1);
  let parent = firstCard.parentNode;
  parent.insertBefore(lastCard, firstCard);
});

// Feature #8 :

let blueButton = document.getElementsByClassName("btn btn-primary my-2").item(0);

blueButton.addEventListener("click", (e) => {
  e.preventDefault();
  let cards = document.getElementsByClassName("col-md-4");
  let firstCard = cards.item(0);
  let parent = firstCard.parentNode;
  parent.insertBefore(firstCard, cards.item(cards.length));
});



// Feature #9 :

let logo = document.getElementsByClassName("navbar-brand d-flex align-items-center").item(0);

logo.addEventListener('keydown', (event) => {
  let name = event.key;
  switch (event.ctrlKey) {
    // Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé 
    // sur 4 colonnes Bootstrap à gauche de l'écran.
    case name === "a":
      document.body.className = "";
      document.body.classList.add("col-4", "offset-md-4");
      break;

    // Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé 
    // sur 4 colonnes Bootstrap au centre de l'écran.
    case name === "y":
      document.body.className = "";
      document.body.classList.add("col-4");
      break;

    // Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé 
    // sur 4 colonnes Bootstrap à droite de l'écran.
    case name === "p":
      document.body.className = "";
      document.body.classList.add("col-4", "offset-md-8");
      break;
    
    // Si l'utilisateur presse la touche "b", tout redevient normal.
    case name === "b":
      document.body.className = "";
      break;
  } 
}, false);




