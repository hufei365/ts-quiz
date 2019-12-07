"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stage;
(function (stage) {
    stage[stage["preparser"] = 0] = "preparser";
    stage[stage["parser"] = 1] = "parser";
    stage[stage["postparser"] = 2] = "postparser";
})(stage || (stage = {}));
class Base {
    constructor(config) {
        this.config = config;
    }
    use(stage, fn) {
        this.middleware[stage].push(fn);
    }
}
class Q extends Base {
    constructor(config) {
        super(config);
        // this.middleware.parser.push( answer )
    }
    run() {
        let _m = this.middleware;
        return compose.apply(this, [..._m.preparser, ..._m.parser, ..._m.postparser]);
    }
    render() {
        return '';
    }
}
exports.default = Q;
function isExpire(expire) {
    return Date.now() - this.timeStamp > expire;
}
function compose(...funcs) {
    if (funcs.length === 0) {
        // infer the argument type so it is usable in inference down the line
        return (arg) => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
//# sourceMappingURL=index.js.map