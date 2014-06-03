var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports, Backbone) {
    var TestDataCollection = (function (_super) {
        __extends(TestDataCollection, _super);
        function TestDataCollection() {
            _super.call(this);
        }
        return TestDataCollection;
    })(Backbone.Collection);

    
    return TestDataCollection;
});
