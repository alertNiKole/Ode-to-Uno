/*                           */

//Initialize Modal
/*
var elem = document.querySelector('.modal');
var instance = M.Modal.init(elem, options);

instance;
document.addEventListener("click", () => {
  instance;
}); */

// Or with jQuery
  /*
$(document).ready(function(){
  $('.modal').modal();
});
        */



  let rng =function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
/*
  - orange - #d26227;
  - pink    - #c71562;
  - red     - #c71515;
  - purple - #663399,
  - Black  - #000000 
    const orange = "#d26227";
    const pink = "#c71562";
    const red = "#c71515";
    const purple = "#663399";
    const black = "000000";*/

  colors = [
    "#d26227",
    "#c71562",
    "#c71515",
    "#663399",
    "#000000"
  ];

  let cards = [
      document.getElementById("one"),
      document.getElementById("two"),
      document.getElementById("three"),
      document.getElementById("four"),
      document.getElementById("five"),
      document.getElementById("six"),
      document.getElementById("seven")
  ];
 
  let type = [
    0,1,2,3,4,5,6,7,8,9,"S","R","W", "D2", "D4"
  ]
  let pick = rng(cards.length);
  let pickColor= colors[rng(colors.length)];
  let pickType = type[rng(type.length)];
  
  let cardNo =  document.getElementsByClassName("cardNo");
    
  let cardNo2 =  document.getElementsByClassName("cardNo2");

  //Deal Cards
  let deal = () =>{
    for(i = 0; i < cards.length; i++) {

      let pick = rng(cards.length);
      let pickColor= colors[rng(colors.length)];
      let pickType = type[rng(type.length)];

     pickColor;
     pickType;
     cards[i].style.backgroundColor = pickColor;
     cards[i].firstElementChild.innerText = pickType;
     cards[i].firstElementChild.nextElementSibling.innerText = pickType;
     console.log(pickColor, pickType);
    }
  }



  deal();
  let chooseCard = cards[0]

  // Add logic for Black Cards
  //suppress black unless
  // configure play button better
  //Create reset Buttons  

  /*
  let pressed = document.getElementById("play");
  let play = pressed.addEventListener("onclick",()  => {
    deal();
  })  */