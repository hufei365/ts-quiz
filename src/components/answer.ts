
const handlers = {
    struct2: (data:Question) => {
        data.question_answer_list = [['错误', '正确'][data.question_answer_list[0] || 0]];
    }
};


let caches = {};

export default function (struct: STRUCT): Function {
    return caches[struct] || (caches[struct] = function (data: Question, config: Config) {
        data.question_answer_list = Array.isArray(data.question_answer_list) ? data.question_answer_list : [data.question_answer_list];
        handlers['struct' + struct](data)
    })
}