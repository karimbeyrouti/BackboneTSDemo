var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone", '../data/TestData'], function(require, exports, Backbone, TestData) {
    var NewUserView = (function (_super) {
        __extends(NewUserView, _super);
        function NewUserView(testDataColleaction, options) {
            var _this = this;
            _super.call(this, options);

            this.testDataColleaction = testDataColleaction;
            this.firstNameInput = $(this.$el).find('#firstName-input')[0];
            this.lastNameInput = $(this.$el).find('#lastName-input')[0];
            this.ageInput = $(this.$el).find('#age-input')[0];
            this.addUser = $(this.$el).find('#adduser-button')[0];

            this.addUser.addEventListener('click', function () {
                return _this.addUserHandler();
            });
        }
        NewUserView.prototype.addUserHandler = function () {
            this.testDataColleaction.add(new TestData(this.firstNameInput.value, this.lastNameInput.value, parseInt(this.ageInput.value)));

            this.firstNameInput.value = '';
            this.lastNameInput.value = '';
            this.ageInput.value = '';

            this.testDataColleaction.save();
        };
        return NewUserView;
    })(Backbone.View);

    
    return NewUserView;
});
