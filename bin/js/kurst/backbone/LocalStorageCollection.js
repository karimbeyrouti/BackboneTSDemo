var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports, Backbone) {
    var LocalStorageCollection = (function (_super) {
        __extends(LocalStorageCollection, _super);
        function LocalStorageCollection(storageName, classTemplate, models, options) {
            var _this = this;
            _super.call(this, models, options);

            this.storageName = storageName;
            this.classTemplate = classTemplate;

            this.bind('change', function () {
                return _this.onChanged.apply(_this, arguments);
            });
            this.bind('remove', function () {
                return _this.onRemoved.apply(_this, arguments);
            });
            this.bind('add', function () {
                return _this.onAdded.apply(_this, arguments);
            });
            this.bind('all', function () {
                return _this.allEvents.apply(_this, arguments);
            });
        }
        LocalStorageCollection.prototype.save = function () {
            this.localStorage().setItem(this.storageName, JSON.stringify(this.toJSON()));
        };

        LocalStorageCollection.prototype.sync = function () {
            this.save();
            return;
        };

        LocalStorageCollection.prototype.fetch = function (options) {
            if (this.localStorage().getItem(this.storageName)) {
                this.localStorage().getItem(this.storageName);
                var result = JSON.parse(this.localStorage().getItem(this.storageName));

                for (var c = 0; c < result.length; c++) {
                    this.add(this.createModel(result[c]));
                }
            }

            return;
        };

        LocalStorageCollection.prototype.createModel = function (obj) {
            var result = new this.classTemplate();

            for (var p in obj) {
                result[p] = obj[p];
            }

            return result;
        };

        LocalStorageCollection.prototype.localStorage = function () {
            if (window.localStorage)
                return window.localStorage;

            return;
        };

        LocalStorageCollection.prototype.allEvents = function () {
        };

        LocalStorageCollection.prototype.onAdded = function () {
        };

        LocalStorageCollection.prototype.onChanged = function () {
        };

        LocalStorageCollection.prototype.onRemoved = function () {
        };
        return LocalStorageCollection;
    })(Backbone.Collection);

    
    return LocalStorageCollection;
});
