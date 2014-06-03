var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports, Backbone) {
    var TestData = (function (_super) {
        __extends(TestData, _super);
        function TestData(firstName, lastName, age, isTester) {
            if (typeof isTester === "undefined") { isTester = false; }
            this.defaults = {
                firstName: 'First name',
                lastName: 'Last name',
                age: 0,
                isTester: false
            };

            _super.call(this);

            if (firstName) {
                this.set('firstName', firstName);
            }

            if (lastName) {
                this.set('lastName', lastName);
            }

            if (age) {
                this.set('age', age);
            }

            if (isTester) {
                this.set('isTester', isTester);
            }
        }
        Object.defineProperty(TestData.prototype, "firstName", {
            get: function () {
                return this.get('firstName');
            },
            set: function (v) {
                this.set('firstName', v);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TestData.prototype, "lastName", {
            get: function () {
                return this.get('lastName');
            },
            set: function (v) {
                this.set('lastName', v);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TestData.prototype, "age", {
            get: function () {
                return this.get('age');
            },
            set: function (v) {
                this.set('age', v);
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(TestData.prototype, "isTester", {
            get: function () {
                return this.get('isTester');
            },
            set: function (v) {
                this.set('isTester', v);
            },
            enumerable: true,
            configurable: true
        });

        TestData.prototype.clear = function (options) {
            this.destroy();
        };

        TestData.prototype.setTester = function (bool) {
            this.isTester = bool;
            console.log(this.toJSON());
        };
        return TestData;
    })(Backbone.Model);

    
    return TestData;
});
