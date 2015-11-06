var rankingBoard = [];

var addGame = function() {
  var addNew = $("#newGame")
  $(addNew).append(
    '<div id="game">'
    + '<br>'
    + '<label for="username">name:</label>'
    + '<input type="text" placeholder="Winston Churchill" name="username">'
    + '<br>'
    + '<br>'
    + '<label for="score">score:</label>'
    + '<input type="number" placeholder="31" name="score">'
    + '<br>'
    + '</div>'
  );
};

var leaderBoard = function() {
  function sorted(array) {
    array.sort(function(a,b){
      return b.score-a.score
    });
  };
  sorted(rankingBoard);
  // good sorting so far
  
  function ranker(array) {
    var rankedArray = [];
    for (var i = 0; i < array.length; i++) { 
      if ( i < 2 ){
        array[1].rank = 1;
        rankedArray.push(array[1]);
      } else {
        if (array[i].score == rankedArray[i - 1].score) {
          array[i].rank = rankedArray[i -1 ].rank;
          rankedArray.push(array[i]);

        } else {
          array[i].rank = rankedArray[i - 1].rank + 1;
          rankedArray.push(array[i]);
        };
      };
    };
    return rankedArray;
  };
  // good ranking!


  ranker(rankingBoard);
  console.log(rankingBoard);
  console.log(rankingBoard[1]);

  $("#rankings").empty();

  for (var i = 1; i < rankingBoard.length; i++) { 
    $("#rankings").append(
      '<li id="listRanks">'
      + '<div id="playerRank"> rank: '
      + rankingBoard[i].rank
      + '</div>'
      + '<div id="playerName">'
      + rankingBoard[i].name
      + '</div>'
      + " "
      + '<div id="scoreChip">'
      +  rankingBoard[i].score
      + '</div>'
      + "</li>"
    );
  };
};

$("#addMultiplGames").click(function() {
  addGame();
});

$("#addToRankings").click(function() {
  var games = $("#newGame").find("input")
  var gameArray = [];
  var nameScoreObject = {};

  games.each(function(){
    gameArray.push($(this).val());
    nameScoreObject.name = gameArray[0];
    nameScoreObject.score = gameArray[1];
    nameScoreObject.rank = 0;
  });
  
  rankingBoard.push(nameScoreObject);

  $("div#newGame #game").remove();
  addGame();
  leaderBoard();
});

$("#clear").click(function() {
  rankingBoard = [0];
  $("#rankings").empty();
  // document.getElementById("newGame").remove();
  document.getElementById("game").remove();
  addGame();
});

