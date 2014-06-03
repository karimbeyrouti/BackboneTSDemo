require.config({
    baseUrl: 'js/',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        backbone: 'bower_components/backbone/backbone',
        localstorage: 'bower_components/Backbone.localStorage/backbone.localStorage',
        underscore: 'bower_components/underscore/underscore'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        }
    }
});
