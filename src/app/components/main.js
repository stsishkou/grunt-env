(function(angular) {
    'use strict';
    angular.module('app')
        .component('main', {
            template: '<div class="main">Main Component Enabled {{$ctrl.smile}}</div>',
            controller: function() {
                this.smile = ':)';
            }
        });
} (window.angular));
