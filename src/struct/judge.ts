import QBase from './base'

class Judge extends QBase{
    constructor(){
        super()
    }
    toText(){
        return ['错误', '正确'][this.data.question_answer_list[0]]
    }
}