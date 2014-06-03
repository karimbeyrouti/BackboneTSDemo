var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone", "../../../kurst/events/EventDispatcher"], function(require, exports, Backbone, EventDispatcher) {
    var RouterController = (function (_super) {
        __extends(RouterController, _super);
        function RouterController() {
            var _this = this;
            _super.call(this);

            this.routes = new Backbone.Router();
            this.routes.route("page/:number", "page", function (e) {
                return _this.onRoutePage(e);
            });
            this.routes.route("test", "test", function () {
                return _this.onRouteTest();
            });

            Backbone.history.start();
            this.routes.navigate("test/");
        }
        RouterController.prototype.onRoutePage = function (pageNumber) {
            console.log('pageNumber: ', pageNumber);
        };

        RouterController.prototype.onRouteTest = function () {
            console.log('onRouteTest');
        };
        return RouterController;
    })(EventDispatcher);

    
    return RouterController;
});
