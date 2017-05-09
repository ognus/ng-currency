import angular from 'angular';

const module = angular.module('app', [
  'ng-currency'
]);

class AppController {
  constructor() {
    this.value = 123456.78;
  }
}

module.controller('AppController', AppController);
