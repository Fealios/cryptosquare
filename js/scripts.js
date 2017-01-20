var race = function(string) {
  var d = new Date();
  var start = d.getTime();
  console.log(start);
  for (i=0; i<100000; i++) {
    meta(string);
  }
  var a = new Date();
  var end = a.getTime();
  console.log(end);
  var elapsed = end - start;
  console.log(elapsed);
}


function meta(string){
  var input;
  var clean;
  var splitStr = [];
  var grid;
  var output = [];
  var final;
  function cryptoSquare(string) {
    clean = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
    splitStr = clean.split('');
    gridSize(splitStr.length);
    putInGrid(splitStr, row, col);
    scramble(grid);
    // console.log(final);
  }
  var row;
  var col;
  function gridSize(length){
    if(Math.sqrt(length) % 1 === 0){
      row = Math.sqrt(length);
      col = Math.sqrt(length);
    } //end of if
    else {
      row = Math.round(Math.sqrt(length));
      col = Math.ceil(Math.sqrt(length));
    } //end of else
  }
  function putInGrid(arr, row, col){
    var gridi = [];
    for(i=0;i<row;i++){
      var gridj = [];
      for(j=0;j<col;j++){
        gridj[j] = (arr[0]);
        arr.shift();
      } //end of j loop
      gridi.push(gridj);
    } //end of i loop
    grid = gridi;
  }
  function scramble(arr){
    for(i=0;i<col;i++){
      for(j=0;j<row;j++){
        output.push(arr[j][i]);
      }
    }
    final = (output.join('').replace(/(.{5})/g, "$1 "));
  }
}
$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    input = $("input").val();
    // cryptoSquare(input);
    race(input);
    // $('#output').text(final);
  })
})
