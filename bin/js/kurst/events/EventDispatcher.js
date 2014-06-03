define(["require", "exports"], function(require, exports) {
    var EventDispatcher = (function () {
        function EventDispatcher(target) {
            if (typeof target === "undefined") { target = null; }
            this.listeners = new Array();
            this._target = target || this;
        }
        EventDispatcher.prototype.addEventListener = function (type, listener) {
            if (this.listeners[type] === undefined)
                this.listeners[type] = new Array();

            if (this.getEventListenerIndex(type, listener) === -1)
                this.listeners[type].push(listener);
        };

        EventDispatcher.prototype.removeEventListener = function (type, listener) {
            var index = this.getEventListenerIndex(type, listener);

            if (index !== -1)
                this.listeners[type].splice(index, 1);
        };

        EventDispatcher.prototype.dispatchEvent = function (event) {
            var listenerArray = this.listeners[event.type];

            if (listenerArray !== undefined) {
                var l = listenerArray.length;

                event.target = this._target;

                for (var i = 0; i < l; i++)
                    listenerArray[i](event);
            }
        };

        EventDispatcher.prototype.getEventListenerIndex = function (type, listener) {
            if (this.listeners[type] !== undefined) {
                var a = this.listeners[type];
                var l = a.length;

                for (var i = 0; i < l; i++)
                    if (listener == a[i])
                        return i;
            }

            return -1;
        };

        EventDispatcher.prototype.hasEventListener = function (type, listener) {
            if (listener != null) {
                return (this.getEventListenerIndex(type, listener) !== -1);
            } else {
                if (this.listeners[type] !== undefined)
                    return (this.listeners[type].length > 0);

                return false;
            }

            return false;
        };
        return EventDispatcher;
    })();

    
    return EventDispatcher;
});
