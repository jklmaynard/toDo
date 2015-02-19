describe("removeTask", function() {
  it("will remove a particular task from the newList.tasks array", function() {
    var testList = { listName: testList, tasks: [task1, task2] }
    testList.removeTask(task1);
    expect(testList.tasks).to.equal([task2]);
  });
});
