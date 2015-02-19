$(document).ready(function() {

//Add a list object, including name an an array of tasks

  $("form#newList").submit(function(event) {
    event.preventDefault();
    var inputtedListName = $("input#listName").val();
    var newList = { listName: inputtedListName, tasks: [] };

    $("ul#listOfLists").append("<li><span class='newestList'>" + newList.listName + "</span></li>")

    $("input#listName").val("");

    $(".newestList").last().click(function(event) {
    $("#listTitle").show();
    $("#listTitle h1").text(newList.listName);

    });

    $("form#newTask").submit(function(event) {
      event.preventDefault();
      var task = $("input#task").val();
      var dueDate = $("input#duedate").val()
      var newTask = { taskey: task, duedate: dueDate };

      $("#tasks").append("<li>" + newList.tasks + "</li>");
      $("input#task").val("");
      $("input#duedate").val("");
      newList.tasks.push(newTask)

      $("#tasks li").last().click(function(event) {
        $(this).appendTo("#completed");

        $("#completed li").click(function(event){
          $(this).remove();
        });
      });
    });
  });



//for now, this should be in individual lists?
});
