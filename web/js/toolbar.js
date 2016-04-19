(function (){

    var app = angular.module('toolbar', [ ]);


    app.controller("SearchController", function($scope,logedUser){
        this.search = function(text){
            console.log(logedUser);
            console.log(text);
        };
    });


    app.controller("NewDeliveryController", function($scope,$uibModal, logedUser){
        var newDeliveryCtrl =this;
        newDeliveryCtrl.logedUser = logedUser;

        newDeliveryCtrl.searchDeliveries = function(){
            $uibModal.open({
                templateUrl: 'includes/search-deliveries.html',
                controller: 'SearchDeliveriesController',
                resolve: {
                    logedUser: function () {
                        return newDeliveryCtrl.logedUser;
                    }
                }
            });
        };

    });

    app.controller("CreateDeliveriesController", function($scope, $uibModal,logedUser){
        var CreateDeliveryCtrl = this;
        CreateDeliveryCtrl.logedUser = logedUser;

        CreateDeliveryCtrl.createDeliveries = function(){
            $uibModal.open({
                templateUrl: 'includes/create-deliveries.html',
                controller: 'ModalCreateDeliveriesController',
                resolve: {
                    logedUser: function(){
                        return CreateDeliveryCtrl.logedUser;
                    }
                }
            });
        }
    });

    app.controller("UserDataController", function($scope,$location, logedUser){

        this.username = function(){
            return logedUser.username;
        };

        this.toggleCarrier = function(){
            logedUser.carrier = !logedUser.carrier;
        }

        this.logout = function(){
            logedUser = {};
            console.log("Logout");
            $location.path('/login');
        };

        this.carrier = function(){
            if (logedUser.carrier){
                return "Transportista";
            } else {
                return "Cliente";
            }
        };
    });
})();
