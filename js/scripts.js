$(document).ready(function() {
  $("form#new_task").submit(function(event) {
    event.preventDefault();
    var task = $("input#task").val();
    var dueDate = $("input#duedate").val()
    var newTask = { taskey: task, duedate: dueDate };

    $("#tasks").append("<li>" + newTask.taskey + " " + newTask.duedate + "</li>");
    $("input#task").val("");
    $("input#duedate").val("");

    $("#tasks li").last().click(function(event) {
      $(this).appendTo("#completed");

      $("#completed li").click(function(event){
        $(this).remove();
      });
    });
  });
});
