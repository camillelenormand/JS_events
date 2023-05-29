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

const logo = document.querySelector(".navbar-brand.d-flex.align-items-center");

logo.addEventListener("keydown", (event) => {
  const key = event.key;
  const body = document.body;

  switch (key) {
    case "a":
      body.className = "";
      body.classList.add("col-4");
      break;

    case "y":
      body.className = "";
      body.classList.add("col-md-4", "offset-md-4");
      break;

    case "p":
      body.className = "";
      body.classList.add("col-md-4", "offset-md-8");
      break;

    case "b":
      body.className = "";
      break;

    default:
      break;
  }
});
