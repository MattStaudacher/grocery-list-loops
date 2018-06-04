$(document).ready(function() {
  var items = [];
  $("#things").submit(function(event){
    debugger;
    var item = $("input#item1").val();
    items.push(item.toUpperCase());
    $("#groceryList").show();
    $("ul#list").empty();
    items.sort().forEach(function(grocery) {
      $("ul#list").append("<li>"+grocery+"</li>");
    })
  
    event.preventDefault();
  });
});
