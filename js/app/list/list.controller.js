angular
    .module("todoApp")
    .controller("ListController", ListController)

function ListController() {
  var vm = this;

  //some flags
  var selectedId = -1;
  var addFlag = false;
  var editFlag = false;
  var removeFlag = false;

  //props and methods
  vm.currentTask = {};
  vm.add = add;
  vm.startAdd = startAdd;
  vm.startEdit = startEdit;
  vm.startRemove = startRemove;
  vm.isInAddMode = isInAddMode;
  vm.isInReadMode = isInReadMode;
  vm.isInEditMode = isInEditMode;
  vm.save = save;
  vm.cancel = reset;

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

  function reset() {
    selectedId = -1;
    addFlag = false;
    editFlag = false;
    removeFlag = false;
  }

  function startAdd() {
    reset();
    addFlag = true;
    vm.currentTask = {};
  }

  function startEdit(id) {
    reset();
    selectedId = id;
    editFlag = true;
    for (var i = 0; i < vm.list.tasks.length; i++) {
      var task = vm.list.tasks[i];
      if (task.id == id) {
        vm.currentTask.name = task.name
        vm.currentTask.completed = task.completed
      }
    }
  }

  function startRemove(id) {
    reset();
    selectedId = id;
    removeFlag = true;
  }

  function isInAddMode() {
    return addFlag;
  }

  function isInEditMode(id) {
    return selectedId == id && editFlag
  }

  function isInReadMode(id) {
    return selectedId < 0 || selectedId != id;
  }

  function add() {
    vm.currentTask.completed = false;
    vm.list.tasks.push(vm.currentTask);
    reset();
  }

  function save(id) {
    for (var i = 0; i < vm.list.tasks.length; i++) {
      var task = vm.list.tasks[i];
      if (task.id == selectedId) {
        task.name = vm.currentTask.name
        task.completed = vm.currentTask.completed
        reset()
      }
    }
  }

}
