'use strict';

angular.module('components')
    .directive('urlTextBox', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/url-text-box/template.html',
            controller: function() {
                var vm = this;

                vm.onChange = function() {
                    if (vm.events && vm.events.onChange) {
                        vm.events.onChange({ value: vm.model });
                    }
                };
            },
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                id: '@',
                title: '@',
                model: '=',
                options: '=',
                events: '=',
                validation: '='
            }
        };
    });