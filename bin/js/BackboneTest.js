define(["require", "exports", "./tests/backbone/views/TestDataView", "./tests/backbone/views/AppView", './tests/backbone/views/NewUserView', "./tests/backbone/data/TestDataCollection", "./tests/backbone/data/TestData", "./kurst/utils/JSUtils"], function(require, exports, TestDataView, AppView, NewUserView, TestDataCollection, TestData, JSUtils) {
    var BackboneTest = (function () {
        function BackboneTest() {
            this.testDataCollection = new TestDataCollection();
            this.testDataView = new TestDataView();
            this.appView = new AppView(this.testDataCollection);

            var newUserViewOptions = new Object();
            newUserViewOptions.el = JSUtils.getId('new-user');
            this.newUserView = new NewUserView(this.testDataCollection, newUserViewOptions);

            this.testDataCollection.add(new TestData('Dave', 'Monpelier', 37));
            this.testDataCollection.add(new TestData('Juan', 'Carlos', 40));
            this.testDataCollection.add(new TestData('Edie', 'Vandervive', 37));
            this.testDataCollection.add(new TestData('Ben', 'Bennest', 25, true));
            this.testDataCollection.add(new TestData());
        }
        return BackboneTest;
    })();

    
    return BackboneTest;
});
