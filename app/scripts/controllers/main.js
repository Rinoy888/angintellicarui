'use strict';
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */
angular.module('intellicarApp')
  .controller('MainCtrl', function ($scope, $timeout,$http,dataService,$interval) {

    var vm = this;
    var val = 1;


   function getData() {
            dataService.getCars(function (data) {
                vm.cardata = data;
            })
        }


    vm.init = function(){
            $interval(function () {
                getData();
            },60000)
            getData();
        }

    vm.init();




    // vm.GetAllData = function () {
    //   console.log("http");
    //   $http.post("http://localhost:10104/api/intellicar60/getnumvehicles")
    //    .then(
    //        function(res){
    //          vm.cars = res.data.data.count;
    //          console.log(vm.cars)
    //          return vm.cars;
    //        },
    //        function(err){
    //          console.log(err)
    //        }
    //      );
    //     return vm.cars;
    // };
    //
    //
    // cardata = vm.GetAllData();
    // console.log("cars " + vm.cars);
    // $scope.data = {
    //   model: null,
    //   availableOptions: [
    //     {id: '1', name: 'Option A'},
    //     {id: '2', name: 'Option B'},
    //     {id: '3', name: 'Option C'}
    //   ]
    // };
    //
    //
    // var vm = this;
    // console.log('angularr')
    // vm.refreshing = false;
    // vm.refresh = function() {
    //   console.log('im clicked');
    //   if(!vm.refreshing){
    //     vm.refreshing = true;
    //
    //     // do ome code to refresh data
    //
    //     $timeout(function () {
    //       vm.refreshing = false;
    //     },3000);
    //
    //   }
    // };

  });
