require([
    'jquery',
    'underscore',
    'BackboneTest',
    'backbone',
    'localstorage'
], function ($, _, BackboneTest) {
    'use strict';

    $(document).ready(function () {
        new BackboneTest();
    });
});
