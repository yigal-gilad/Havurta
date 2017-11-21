'use strict';

import angular from 'angular';

export default angular.module('havrutaApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
