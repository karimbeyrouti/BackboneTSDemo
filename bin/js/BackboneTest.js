define(["require", "exports", "./tests/backbone/views/AppView", './tests/backbone/views/NewUserView', "./tests/backbone/data/TestDataCollection", "./kurst/utils/JSUtils"], function(require, exports, AppView, NewUserView, TestDataCollection, JSUtils) {
    var BackboneTest = (function () {
        function BackboneTest() {
            this.testDataCollection = new TestDataCollection();

            this.appView = new AppView(this.testDataCollection);

            var newUserViewOptions = new Object();
            newUserViewOptions.el = JSUtils.getId('new-user');
            this.newUserView = new NewUserView(this.testDataCollection, newUserViewOptions);
        }
        return BackboneTest;
    })();

    
    return BackboneTest;
});
