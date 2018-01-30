'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/private', {
      template: '<private></private>'
    });
}
