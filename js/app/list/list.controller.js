angular
    .module("todoApp")
    .controller("ListController", ListController)

function ListController() {
  var vm = this;

  vm.currentTask = {};
  vm.add = add;

  vm.list = {
    name: 'Todo List',
    tasks: [
      {
        id: 1,
        name: "Write blog article",
        completed: false
      },
      {
        id: 2,
        name: "Refresh JS for interviews",
        completed: false
      },
      {
        id: 3,
        name: "Study algorithm book",
        completed: false
      },
      {
        id: 4,
        name: "Keep building network",
        completed: false
      }
    ]
  }

  function add() {
    vm.currentTask.completed = false;
    vm.list.tasks.push(vm.currentTask);
  }

}
