"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlers = {
    struct2: (data) => {
        data.question_answer_list = [['错误', '正确'][data.question_answer_list[0] || 0]];
    }
};
let caches = {};
function default_1(struct) {
    return caches[struct] || (caches[struct] = function (data, config) {
        data.question_answer_list = Array.isArray(data.question_answer_list) ? data.question_answer_list : [data.question_answer_list];
        handlers['struct' + struct](data);
    });
}
exports.default = default_1;
//# sourceMappingURL=answer.js.map