(function (win) {
    const global = win;
    const doc = this.document;
    const dom = function (params, context) {
        return GetOrMakeDom(params, context);
    };
    const GetOrMakeDom = function (params, context) {

    };

    global.dom = dom;
    dom.fn = GetOrMakeDom.prototype;
})(window);
