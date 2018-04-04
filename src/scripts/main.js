let selectType =  numbers.type[rng(numbers.type.length)];

let turns = 0; // counts the gameplay
let playerScore = 0; //adds to the player score
let computerScore = 0; //adds to the computer score


function number () {
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
};

function special () {
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
            cards[i].style.backgroundColor = selectColor; 
};

function wild () {
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

let deal = () => {
    for(i = 0; i < cards.length; i++) { //each
        //choose card == 
        rng;
        //select type

    if (selectType === "X") { //numbers
        number()
       }   else if (selectType === "S") { //card is special
        special ()
} else {
    wild();
};
};
};



//scoring logic