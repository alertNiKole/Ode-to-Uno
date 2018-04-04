//Play Scripts for Clush


//rng
 function rng(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

//cards
let cards = [
    document.getElementById("one"),
    document.getElementById("two"),
    document.getElementById("three"),
    document.getElementById("four"),
    document.getElementById("five"),
    document.getElementById("six"),
    document.getElementById("seven")
];


//numbers
let numbers = {
    type: ["X","S","W"],
    // 0-9
    X: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    Xvalue: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    //special
    S: [        "S", "R", "D2"     ],
    Svalue: [ 10, 10, 20],
    //wild
    W: [        "W", "D4"          ],
    Wvalue: [20, 25]
};

//numbers.w[2];
//select an rng number
//numbers.X[rng(numbers.X.length)];

//colors

colors = [
    "#191978",
    "#217819",
    "#781919",
    "#beb50c",

  ];

/*
  if (pick ==   numbers.w ) {
      then //set color innhtml to black
  } else //colors function
  */




  let deal = () => {
    for(i = 0; i < cards.length; i++) { //each
        //choose card == 
        rng;
        //select type
      let selectType =  numbers.type[rng(numbers.type.length)];
        //choose number
    /*  let selectNumber =  numbers.X[rng(numbers.X.length)];
      let selectSpecial = numbers.S[rng(numbers.S.length)]; */
    //if type is number
    if (selectType === "X") { //numbers
        //log
        console.log(numbers.X, "number was chosen");
        //choose a number
        let pickNo = numbers.X[rng(numbers.X.length)];
        //update card with number chosen
        cards[i].firstElementChild.innerText = pickNo;
        cards[i].firstElementChild.nextElementSibling.innerText = pickNo;
        //select color
        let selectColor =   colors[rng(colors.length)];
        //console log color selected
        console.log("color chosen", cards[i], selectColor);
        //update color
      if (selectColor != "#000000")  { 
            cards[i].style.backgroundColor = selectColor;
      } else      
        //card is wild
          console.log("color chosen", cards[i], selectColor, "Card is Wild");

    } else if (selectType === "S") { //card is special
         //log
         console.log(numbers.S, "This card is Special");
         //choose a number
         let pickSpecial = numbers.S[rng(numbers.S.length)];
         //update card with number chosen
         cards[i].firstElementChild.innerText = pickSpecial;
         cards[i].firstElementChild.nextElementSibling.innerText = pickSpecial;
         //select color
         let selectColor =  colors[rng(colors.length)];
         //console log color selected
         console.log("color chosen", cards[i], selectColor);
         cards[i].style.backgroundColor = selectColor; /*
         cards[i].firstElementChild.nextElementSibling.style.marginLeft = "1.5em";
         cards[i].firstElementChild.nextElementSibling.style.fontSize = "4em";
         cards[i].firstElementChild.nextElementSibling.style.paddingTop = ".2em"; */
    } else { //card is wild
        console.log ("Card is wild", numbers.W);
         
          //choose a number
          let pickWild = numbers.W[rng(numbers.W.length)];
          //update card with number chosen
          cards[i].firstElementChild.innerText = pickWild;
          cards[i].firstElementChild.nextElementSibling.innerText = pickWild;
          //select color
          //console log color selected
          console.log("color is Black", cards[i], "#1f1f1f");
          cards[i].style.backgroundColor = "#1f1f1f";
          console.log("The end");
    };
    };
};


//  Define active card logic
let activeCard = document.getElementById('activeDeck');

// first pull

function flip () {
   //log
   console.log(numbers.X, "number was chosen for the first card");
   //choose a number
   let pickFirst = numbers.X[rng(numbers.X.length)];
   //update card with number chosen
  activeCard.firstElementChild.innerText = pickFirst;
   activeCard.firstElementChild.nextElementSibling.innerText = pickFirst;
   //select color
   let selectColor =   colors[rng(colors.length)];
   //console log color selected
   console.log("color chosen for first Card", activeCard, selectColor);
   //update color
 if (selectColor != "#000000")  { 
       activeCard.style.backgroundColor = selectColor;
 } else      
   //card is wild
     console.log("color chosen", cards[i], selectColor, "Card is Wild");
}

let drawCard = document.getElementById('drawDeck');

drawFromPile( () => {
  let selectType =  numbers.type[rng(numbers.type.length)];
  if (selectType === "X") { //numbers
    //log
    console.log(numbers.X.arr, "this number was chosen")

  } else if () {

  } else

});