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
  vm.isInAddMode = isInAddMode;
  vm.isInEditMode = isInEditMode;
  vm.save = save;

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

  function isInAddMode() {
    return addFlag;
  }

  function startEdit() {

  }

  function isInEditMode() {
    
  }

  function add() {
    vm.currentTask.completed = false;
    vm.list.tasks.push(vm.currentTask);
    reset();
  }

  function save() {

  }

}
