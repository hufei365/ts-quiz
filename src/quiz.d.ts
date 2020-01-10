type SN = string|number
type HTMLString = string

export interface Quiz {
    id: SN
    struct_id: SN
    type_id: SN
    type_name: string
    type_alias?: string
    question_body?: HTMLString
    marterial?: HTMLString
    options?: HTMLString[]
    question_answer_list?: HTMLString[]|string|number
    analysis?: HTMLString
    children: Quiz[]
}


export interface Parser{
    (source: Quiz) : Quiz;
}

export enum STRUCT{
    CHOICE=1,
    JUDGE,
    SHORT,
    BLANK,
    COMPLEX,
    TRANSLATE,
    LISTENING,
    MAP,
    FIVEOFSEVEN,
    PHOTO,
    READATRICLE
}

export interface Render {
    (data: Quiz): HTMLElement
}