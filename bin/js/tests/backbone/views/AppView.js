var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone", './TestDataView'], function(require, exports, Backbone, TestDataView) {
    var AppView = (function (_super) {
        __extends(AppView, _super);
        function AppView(testDataColleaction) {
            var _this = this;
            this.setElement($('#app-container'), true);
            this.mainElement = this.$('#main')[0];

            _super.call(this);

            testDataColleaction.bind('add', function (testData) {
                return _this.addOne(testData);
            });
            testDataColleaction.bind('reset', function () {
                return _this.addAll();
            });
            testDataColleaction.bind('remove', function () {
                return _this.removeModel();
            });
            testDataColleaction.bind('all', function () {
                return _this.render();
            });

            this.testDataColleaction = testDataColleaction;
            this.testDataColleaction.fetch();
        }
        AppView.prototype.removeModel = function () {
            this.testDataColleaction.save();
        };

        AppView.prototype.addOne = function (testData) {
            var viewOptions = new Object();
            viewOptions.model = testData;
            viewOptions.tagName = 'li';

            var view = new TestDataView(this.testDataColleaction, viewOptions);

            $('#user-list').append(view.render().el);
        };

        AppView.prototype.addAll = function () {
            var _this = this;
            this.testDataColleaction.each(function (e) {
                return _this.addOne(e);
            });
        };
        return AppView;
    })(Backbone.View);

    
    return AppView;
});
