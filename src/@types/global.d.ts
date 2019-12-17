
declare enum STRUCT {
    XUANZE = 1,
    JUDGE,
    SHORT,
    BLANK,
    MATERIAL,
    TRANSLATION,
    LISTENING,
    MAP,
    FIVEOFSEVEN,
    PHOTO,
    READARTICAL
}


// declare   interface structs {
//     // 1: ['body', 'option', 'answer', 'analysis'],
//          2: []
//     // 3: ['body', 'answer', 'analysis'],
//     // 4: ['body', 'answer', 'analysis'],
//     // 5: ['material', 'children'],
//     // 6: ['material', 'translation', 'children'],
//     // 7: ['material', 'audio', 'translation', 'children'],
//     // 8: ['body', 'map', 'answer', 'analysis'],
//     // 9: ['body', 'option', 'answer', 'analysis'],
//     // 10: ['body'],
//     // 11: ['body', 'prompt', 'answer', 'analysis'],
//     // 12: ['body', 'option', 'answer', 'analysis']
// }
/* Indexable Types */
declare interface Structs {
    [x: number]: string[]
    [x: string]: string[]
}

declare interface Question {
    readonly struct_id: STRUCT
    readonly type_id: number | string
    type_name: string
    question_body?: string
    option_list?: string[]
    question_answer_list?: string[]
    analysis?: string
    material?: string
    children?: Question[]
}