$(document).ready(function(){
  $("#iceCream").submit(function(event){
    event.preventDefault();
    var flavors = ["flavor1", "flavor2", "flavor3"];
    var newFlavors = [];
    for (var index=0; index<flavors.length; index++){
      var flavor = $("#"+flavors[index]).val();
      $("#list").append("<li>"+flavor+"</li>");
    }
  })

})
