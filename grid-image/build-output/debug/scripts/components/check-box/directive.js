'use strict';

angular.module('components')
    .directive('checkBox', function () {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                id: '@',
                model: '=',
                events: '=',
                title: '@',
                defaultValue: '@',
                disabled: '@'
            },
            controller: function() {
                var vm = this;

                vm.onChange = function() {
                    if (vm.events && vm.events.onChange) {
                        vm.events.onChange({ value: vm.model });
                    }
                };
            },
            controllerAs: 'vm',
            templateUrl: 'scripts/components/check-box/template.html'
        };
    });
