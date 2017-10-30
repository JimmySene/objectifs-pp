angular.module('objectifs-pp').component('objectifsPp', {
  templateUrl: 'objectifs.template.html',
  controller: ['$http', function objectifsPp($http) {
    this.objectifs = [{nom:'Jimmy', obj:'Salut'}, {nom:'Vincent', obj:'Ca va ?'}];



  }]
});
