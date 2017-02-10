// start slingin' some d3 here.
function initialize(){

}


function update(data){
  console.log("d3.select(\"svg\")", d3.select("svg").data(data).enter())
  var svg = d3.select("svg").data(data);

  //update
  //enter
  svg
    .enter()
    .append("circle");
  //exit
  svg
    .exit()
    .remove();
}
