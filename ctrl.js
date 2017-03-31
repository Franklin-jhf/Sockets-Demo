angular.module("app").controller("ctrl", function($scope, $timeout){
	var socket = io();
	$scope.messages = []

	$scope.submit = function() {
		socket.emit('chat message', $scope.inputMessage);
		$scope.inputMessage = ""
	}
	socket.on('chat message', function(msg){
		$timeout(function(){
			$scope.messages.push(msg)
		})
	})
})
