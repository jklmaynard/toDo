var List = {

  tasks: [],
  addTask: function(name, dueDate) {
    task = { taskey: name, duedate: dueDate }
    List.tasks.push(task)
  },

  removeTask: function(taskey) {
    for(var i = List.tasks.length - 1; i >= 0; i--) {
      if(List.tasks[i] === this) {
         List.tasks.splice(i, 1);
      }
    }
  }
}

$(document).ready(function() {

  $("form#newList").submit(function(event) {
    event.preventDefault();
    var inputtedListName = $("input#listName").val();
    var newList = { listName: inputtedListName, tasks: [] };

    $("ul#listOfLists").append("<li style='list-style: none;'><span class='newestList'>" + newList.listName + "</span></li>")

    $("input#listName").val("");

    $(".newestList").last().click(function(event) {
      $("#listTitle").show();
      $("#listTitle h1").text(newList.listName);
    });

    $("form#newTask").submit(function(event) {
      event.preventDefault();
      $("#newTask").each(function(task) {
        var task = $(this).find("input.task").val();
        var dueDate = $(this).find("input.duedate").val();
        var newTask = { taskey: task, duedate: dueDate };
        newList.tasks.push(newTask);
      });

      $("input.task").val("");
      $("input.duedate").val("");
      newList.tasks.forEach(function(task) {
        $("#tasks").append("<li style='list-style: none;'>" + task.taskey + " " + task.duedate + "</li>");
      });


      $("#tasks li").last().click(function(event) {
        $(this).appendTo("#completed");
        newList.remove(this);
        $("#completed li").click(function(event){
          $(this).remove();
        });
      });

    });
  });
});
