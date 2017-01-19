//business logic ================================
var input;
var clean;
var splitStr = [];
function cryptoSquare(string) {
  clean = string.replace(/[^a-z,[0-9]/gi, '').toLowerCase();
  // console.log(clean);
  splitStr = clean.split('');
  // console.log(splitStr);
  gridSize(splitStr.length);
}


var row;
var col;
function gridSize(length){
  if(Math.sqrt(length) % 1 === 0){
    console.log('whole number');
    row = Math.sqrt(length);
    col = Math.sqrt(length);
    console.log(row + 'row');
    console.log(col + 'col');
  } //end of if
  else {
    console.log("you're in the function");
    row = Math.round(Math.sqrt(length));
    col = Math.ceil(Math.sqrt(length));
    console.log(row +'row');
    console.log(col +'col');
  } //end of else
}


//user logic  ===================================
$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();

    input = $("input").val();
    cryptoSquare(input);
  })
})
