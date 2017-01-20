'use strict';

angular.module('components')
    .directive('grid', function () {
        return {
            restrict: 'E',
            scope: true,
            bindToController: {
                id: '@',
                widget: '=',
                model: '=?',
                options: '=',
                events: '=',
                domReady: '=?'
            },
            controller: ['$scope', function ($scope) {
                var vm = this;

                if (vm.domReady === undefined) {
                    vm.domReady = true;
                }

                var rowSelectHandler = function (e) {
                    vm.model = kendo.proxyModelSetters(vm.widget.dataItem(vm.widget.select()));
                    vm.events.onRowSelect(e);
                };

                vm.onRowSelect = rowSelectHandler;
                vm.onDataBound = function (e) {
                    vm.restoreSelection();

                    if (vm.events.onDataBound) {
                        vm.events.onDataBound(e);
                    }
                };
                vm.restoreSelection = function (newModel, oldModel) {
                    if (newModel && vm.widget && vm.widget.selectable) {
                        var row = vm.widget.element.find("[data-uid='" + vm.model.uid + "']");
                        if (row.length) {
                            //detach rowSelect handler in order to prevent recursion
                            vm.onRowSelect = angular.noop;
                            vm.widget.select(row);
                            // attach rowSelect handler again
                            vm.onRowSelect = rowSelectHandler;
                        } else {
                            vm.widget.selectable.clear();
                        }
                    } else if (vm.widget && vm.widget.selectable && vm.widget.select().length) {
                        vm.widget.selectable.clear();
                    }
                };

                var widgetCreatedHandler = $scope.$on("kendoWidgetCreated", function(event, widget) {
                    $scope.$watch('vm.model', vm.restoreSelection);
                    widgetCreatedHandler();
                });
            }],
            controllerAs: 'vm',
            templateUrl: 'scripts/components/grid/template.html'
        };
    });
