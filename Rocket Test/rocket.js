var timer = null;
var countdownNumber = 10
var changeState = function (){
   var flying = document.getClassName("rocket")
  clearInterval(timer);
  countdownNumber = 10;
  document.getElementById('countdown').
    innerHTML = countdownNumber;
  // countdown
  if (state == 2){


      if (countdownNumber <=0){
         changeState(3);
      };
  }, 500) ;
};
  // else if (state == 3) {
  // var sucess = setTimeout(function()
  //   {
  //     var randomNumber = Math.round
  //         (Math.random()*10);
  //       console.log('randomNumber',
  //         randomNumber)
  //       // sucess
  //     if (randomNumber > 5) {
  //       changeState(4);
  //     }else{
  //       changeState(5); // oh no!
  //     }
  //   },2000);
  };

// if (state==2){
//     timer = setInterval(function (){
//       document.getElementById('countdown').innerHTML =
//       countdownNumber;
//       countdownNumber = countdownNumber
//         -1;
//         if (countdownNumber <=0){
//           changeState(3);
//         };
//     }, 500)
// } else if (state == 3) {
//     Var success = setTimeout (function(){
//         var randomNumber = Math.round (Math.random()*10);
//          console.log('randomNumber:',randomNumber)
//         // sucess
//         if (randomNumber> 5){
//           changeState(4);
//         } else{
//            changeState(5);
//         }
//       }, 2000);
// };
