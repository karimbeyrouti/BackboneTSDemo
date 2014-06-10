var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports, Backbone) {
    var TestDataView = (function (_super) {
        __extends(TestDataView, _super);
        function TestDataView(viewcollection, options) {
            var _this = this;
            _super.call(this, options);
            this.templateInitialised = false;

            this.viewcollection = viewcollection;
            this.events = {
                "click 		.toggle": 'toggleTester',
                "click 		button.destroy": 'clear',
                'dblclick 	label.firstName-content': 'editFirstName',
                'dblclick 	label.lastName-content': 'editLastName',
                'keypress 	.edit-input': 'updateOnEnter'
            };

            _super.call(this, options);

            this.template = _.template($('#item-template').html());

            if (options) {
                this.model.bind('change', function () {
                    return _this.render();
                });
                this.model.bind('destroy', function () {
                    return _this.remove();
                });
            }

            this.clickDocDelegate = function (e) {
                return _this.clickDocument(e);
            };
        }
        TestDataView.prototype.render = function () {
            if (this.templateInitialised) {
                this.firstNameElement.innerHTML = this.model.firstName;
                this.lastNameElement.innerHTML = this.model.lastName;
                this.isTesterToggle.checked = this.model.isTester;
            } else {
                this.$el.html(this.template(this.model.toJSON()));

                this.firstNameElement = this.$el.find('.firstName-content')[0];
                this.lastNameElement = this.$el.find('.lastName-content')[0];
                this.removeButton = this.$el.find('.destroy')[0];
                this.isTesterToggle = this.$el.find('.toggle')[0];
                this.input = this.$el.find('.edit-input')[0];
                this.input.style.visibility = 'hidden';
                this.templateInitialised = true;
            }

            return this;
        };

        TestDataView.prototype.updateOnEnter = function (e) {
            if (e.keyCode == 13) {
                this.close();
            }
        };

        TestDataView.prototype.toggleTester = function () {
            this.model.isTester = !this.model.isTester;
            this.viewcollection.save();
        };

        TestDataView.prototype.editFirstName = function () {
            TestDataView.EDIT_MODE = TestDataView.EDIT_FIRSTNAME;
            this.input.value = this.model.firstName;
            this.showInputField();
        };

        TestDataView.prototype.editLastName = function () {
            TestDataView.EDIT_MODE = TestDataView.EDIT_LASTNAME;
            this.input.value = this.model.lastName;
            this.showInputField();
        };

        TestDataView.prototype.showInputField = function () {
            document.addEventListener('click', this.clickDocDelegate);

            this.input.style.visibility = 'visible';
            this.input.focus();
        };

        TestDataView.prototype.clear = function () {
            this.model.clear();

            document.removeEventListener('click', this.clickDocDelegate);

            if (this.templateInitialised) {
                this.firstNameElement = null;
                this.lastNameElement = null;
                this.removeButton = null;
                this.isTesterToggle = null;
                this.input = null;
            }
        };

        TestDataView.prototype.close = function () {
            document.removeEventListener('click', this.clickDocDelegate);

            if (!this.input)
                return;

            switch (TestDataView.EDIT_MODE) {
                case TestDataView.EDIT_LASTNAME:
                    this.model.lastName = this.input.value;
                    break;
                case TestDataView.EDIT_FIRSTNAME:
                    this.model.firstName = this.input.value;
                    break;
            }

            this.input.style.visibility = 'hidden';

            if (TestDataView.EDIT_MODE != TestDataView.EDIT_NONE) {
                this.viewcollection.sync();
                this.render();
            }
        };

        TestDataView.prototype.clickDocument = function (e) {
            if (e.toElement != this.input) {
                TestDataView.EDIT_MODE = TestDataView.EDIT_NONE;
                this.close();
            }
        };
        TestDataView.EDIT_LASTNAME = 'lastName';
        TestDataView.EDIT_FIRSTNAME = 'firstName';
        TestDataView.EDIT_NONE = 'noEdit';
        return TestDataView;
    })(Backbone.View);

    
    return TestDataView;
});
