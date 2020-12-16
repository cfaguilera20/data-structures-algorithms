(function (win) {
    const global = win;
    const doc = this.document;
    const dom = function (params, context) {
        return new GetOrMakeDom(params, context);
    };
    const regXContainsTag = /^\s*<(\w+|!)[^>]*>/;
    const GetOrMakeDom = function (params, context) {
        let currentContext = doc;
        if (context) {
            if (context.nodeType) {
                currentContext = context;
            } else {
                currentContext = doc.querySelector(context);
            }
        }

        if (!params || params === '' || typeof params === 'string' && params.trim() === '') {
            this.length = 0;
            return this;
        }

        if (typeof params === 'string' && regXContainsTag.test(params)) {
            const divElem = currentContext.createElement('div');
            divElem.className = 'hippo-doc-frag-wrapper';
            const docFrag = currentContext.createDocumentFragment();
            docFrag.appendChild(divElem);
            const queryDiv = docFrag.querySelector('div');
            queryDiv.innerHTML = params;
            const numberOfChildren = queryDiv.children.length;
            for (let z = 0; z < numberOfChildren; z++) {
                this[z] = queryDiv.children[z];
            }
            this.length = numberOfChildren;
            return this;
        }

        if (typeof params === 'object' && params.nodeName) {
            this.length = 1;
            this[0] = params;
            return this;
        }

        let nodes;
        if (typeof params !== 'string') {
            nodes = params;
        } else {
            nodes = currentContext.querySelectorAll(params.trim());
        }

        const nodeLength = nodes.length;
        for (let i = 0; i < nodeLength; i++) {
            this[i] = nodes[i];
        }
        this.length = nodeLength;
        return this;
    };

    global.dom = dom;
    dom.fn = GetOrMakeDom.prototype
})(window);

dom.fn.each = function (callback) {
    const len = this.length;
    for (let i = 0; i < len; i++) {
        callback.call(this[i], i, this[i]);
    }
    return this;
};

dom.fn.html = function (htmlString) {
    if (htmlString) {
        return this.each(function () {
            this.innerHTML = htmlString;
        });
    } else {
        return this[0].innerHTML;
    }
}

dom.fn.text = function (textString) {
    if (htmlString) {
        return this.each(function () {
            this.textContext = textString;
        });
    } else {
        return this[0].textContent.trim();
    }
}

dom.fn.append = function (stringObject) {
    return this.each(function () {
        if (typeof stringObject === 'string') {
            this.insertAdjacentHTML('beforeend', stringObject);
        } else {
            const that = this;
            dom(stringObject).each(function (name, value) {
                that.insertAdjacentHTML('beforeend', value.outerHTML);
            });
        }
    });
}
