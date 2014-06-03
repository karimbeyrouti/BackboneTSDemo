define(["require", "exports"], function(require, exports) {
    var Event = (function () {
        function Event(type) {
            this.type = undefined;
            this.target = undefined;
            this.type = type;
        }
        Event.prototype.clone = function () {
            return new Event(this.type);
        };
        Event.COMPLETE = 'complete';
        Event.OPEN = 'open';

        Event.ENTER_FRAME = 'enterFrame';
        Event.EXIT_FRAME = 'exitFrame';

        Event.RESIZE = "resize";
        Event.ERROR = "error";
        Event.CHANGE = "change";
        return Event;
    })();

    
    return Event;
});
