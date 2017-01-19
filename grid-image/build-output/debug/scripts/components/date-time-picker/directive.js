(function(angular) {

    'use strict';

    angular.module('components')
        .directive('dateTimePicker', function () {
            return {
                restrict: 'E',
                scope: true,
                bindToController: {
                    id: '@',
                    title: '@',
                    widget: '=',
                    model: '=',
                    options: '=',
                    events: '=',
                    validation: '=',
                    validator: '='
                },
                controller: function() {
                },
                link: function(scope, element, attrs, controller) {
                    if (controller.validator) {
                        controller.validator.options.rules.validdate = function (input) {
                            if (input.is("[data-validdate-msg]") && input.val() != "") {
                                var currentDate = Date.parse(input.val());
                                //Check if Date parse is successful
                                if (!currentDate) {
                                    return false;
                                }
                            }

                            return true;
                        }
                    }
                },
                controllerAs: 'vm',
                templateUrl: 'scripts/components/date-time-picker/template.html'
            };
        });
})(angular);