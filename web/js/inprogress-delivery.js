(function (){

    var app = angular.module('inprogress-delivery', ['jumpva']);

    app.controller("InprogressController", function ($scope) {
      this.nuevoHito ={};

      this.addHito=function(delivery){
        console.log(this.nuevoHito.mensaje);
        this.nuevoHito.time = Date.now();
        delivery.hitos.push(this.nuevoHito);
        this.nuevoHito = {};
      };

    });
})();
