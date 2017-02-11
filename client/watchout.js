// start slingin' some d3 here.
function init(){
  var gameOptions = {
    height: 450,
    width: 700,
    nEnemies: 30,
    padding: 20
  };
  var gameStats = {
    score: 0,
    bestScore: 0
  };
  var axes = {
    x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
    y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
  };
}
var gameBoard = d3.select(".board")
      .append("svg")
      .attr("height", "750")
      .attr("width", "1300");
function update(){
  //array of objects with x and y
  var newCoordinates = [];
  for(var i = 0; i < 30; i++){
    newCoordinates.push(createEnemies());
  }
  console.log("newCoordinates", newCoordinates);
  var circle = gameBoard.selectAll("svg").data(newCoordinates);
  //update
  //enter
  circle
    .enter()
    .append("circle")
    .attr("class", "enemy")
    .attr("r", 10)
    .attr("cy", function(d){return d.y})
    .attr("cx", function(d){return d.x})
    //.attr("style", 'fill: red'); we dont seem do need this. doing it in the CSS
  //exit
  circle
    .exit()
    .remove();
    function run(){
        var tempCoordinates = [];
        //console.log(circle);
        for(var x = 0; x < 30; x++){
          tempCoordinates.push(createEnemies());
        }
        console.log("CIRCLE: ", circle);
        //circle = gameBoard.selectAll("svg").data(tempCoordinates);
        var j = 0;
          circle
            .each(function(d){
              d3.select(this)
              .transition()
              .duration(1500)
              .attr("cy", tempCoordinates[j++].y)
              .attr("cx", tempCoordinates[j].x);
              console.log("JJJJ: ", j);
            });
    }
    setInterval(function(){
      run();
    }, 2000);
}
function createEnemies (){
 return { x: Math.random()*750, y: Math.random()*750 };
}

init();
update();
