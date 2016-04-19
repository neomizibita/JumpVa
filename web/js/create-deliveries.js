(function(){

    var app = angular.module('create-deliveries',[ ]);

    app.controller('ModalCreateDeliveriesController', function($scope, $uibModalInstance){
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };


    });
})();
