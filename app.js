document.addEventListener("DOMContentLoaded", () => {
  //card options
  //make 2 of each for matching
  const cardArray = [
    //block A
    {
      name: "blockA",
      img: "Images/A.jpg",
    },
    {
      name: "blockA",
      img: "Images/A.jpg",
    },
    //block B
    {
      name: "blockB",
      img: "Images/B.jpg",
    },
    {
      name: "blockB",
      img: "Images/B.jpg",
    },
    //block C
    {
      name: "blockC",
      img: "Images/C.jpg",
    },
    {
      name: "blockC",
      img: "Images/C.jpg",
    },
    //block D
    {
      name: "blockD",
      img: "Images/D.jpg",
    },
    {
      name: "blockD",
      img: "Images/D.jpg",
    },
    //block E
    {
      name: "blockE",
      img: "Images/E.jpg",
    },
    {
      name: "blockE",
      img: "Images/E.jpg",
    },
    //block F
    {
      name: "blockF",
      img: "Images/F.jpg",
    },
    {
      name: "blockF",
      img: "Images/F.jpg",
    },
    //block G
    {
      name: "blockG",
      img: "Images/G.jpg",
    },
    {
      name: "blockG",
      img: "Images/G.jpg",
    },
    //block H
    {
      name: "blockH",
      img: "Images/H.jpg",
    },
    {
      name: "blockH",
      img: "Images/H.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  let cardsSelected = [];
  let cardsSelectedID = [];
  let cardsWinning = [];

  let displayResult = document.querySelector("#result");

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "Images/Blank.jpg");
      card.setAttribute("date-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check match
  function checkMatch() {
    var cards = document.querySelectorAll("img");
    const optionOne = cardsSelectedID[0];
    const optionTwo = cardsSelectedID[1];

    if (cardsSelected[0] === cardsSelected[1]) {
      alert("Match");
      cards[optionOne].setAttribute("src", "Images/Clear.jpg");
      cards[optionTwo].setAttribute("src", "Images/Clear.jpg");
      cardsWinning.push(cardsSelected);
    } else {
      cards[optionOne].setAttribute("src", "Images/Blank.jpg");
      cards[optionTwo].setAttribute("src", "Images/Blank.jpg");
      alert("No Match");
    }
    // Reset game cards array

    cardsSelected = [];
    cardsSelectedID = [];
    displayResult.textContent = cardsWinning.length;

    if (cardsWinning.length === cardArray.length / 2) {
      displayResult.textContent = "You Won";
    }
  }

  //flip card
  function flipCard() {
    var cardID = this.getAttribute("date-id");
    cardsSelected.push(cardArray[cardID].name);
    cardsSelectedID.push(cardID);
    this.setAttribute("src", cardArray[cardID].img);

    if (cardsSelected.length == 2) {
      setTimeout(checkMatch, 500);
    }
  }

  createBoard();
});
