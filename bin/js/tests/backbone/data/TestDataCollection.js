var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./TestData", "../../../kurst/backbone/LocalStorageCollection"], function(require, exports, TestData, LocalStorageCollection) {
    var TestDataCollection = (function (_super) {
        __extends(TestDataCollection, _super);
        function TestDataCollection() {
            _super.call(this, 'Test-Data-LocalStorage', TestData);
        }
        return TestDataCollection;
    })(LocalStorageCollection);

    
    return TestDataCollection;
});
