///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import angular from 'angular';

import BaseController from './controller';
import Controller from './controller.public';
import routerEvents from './router-events';

import topSection from './topSection.html';

export default angular.module('views.employees.employee-view', [])
    .controller('EmployeesEmployeeViewCtrl', Controller)
    .factory('employeesEmployeeView', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.employees.employee-view.topSection.html', topSection);
    }])
    .name;