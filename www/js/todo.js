myapp.controller('TodoController', ["$scope", function($scope){
$scope.titleText = localStorage.getItem('user')+"'s TODO List";
$scope.saved = localStorage.getItem('todos');
$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [{text: "Sample 1" , done: false , created: Date.now(), completed: null}, {text: "Sample 2", done:false, created: Date.now(), completed:null}];
$scope.oldsaved = localStorage.getItem('oldtodos');
$scope.archivetodos = (localStorage.getItem('oldtodos')!==null) ? JSON.parse($scope.oldsaved) : [];


$scope.addTodo =function() {
  $scope.todos.push({text: $scope.todoText, done:false, created: Date.now(), completed:null});
  $scope.todoText='';
  localStorage.setItem('todos',JSON.stringify($scope.todos));
};
/*
$scope.clearLocalStorage = function(){
  localStorage.setItem('todos',JSON.stringify([{text: "Sample 1" , done: false , created: Date.now(), completed: null}, {text: "Sample 2", done:false, created: Date.now(), completed:null}]));
  localStorage.setItem('oldtodos',JSON.stringify([]));
};
*/

$scope.completeTodo = function() {
  var oldTodo = $scope.todos;
  var archiveTodo = $scope.archivetodos;
  $scope.todos = [];
  $scope.archivetodos=[];
  angular.forEach(oldTodo,function(todo){
    if(!todo.done){
      $scope.todos.push(todo);
    }
    else {
      todo.completed=Date.now();
      archiveTodo.push(todo);
    }
  });
  $scope.archivetodos.push(archiveTodo);
  localStorage.setItem('todos',JSON.stringify($scope.todos));
  localStorage.setItem('oldtodos',JSON.stringify($scope.archivetodos));
};

}]);
