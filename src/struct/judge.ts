import QBase from './base'

export default class Judge extends QBase{

    constructor(config){
        super(config)
        this.struct
    }
    setup(){
        super.use('preparser', ()=>{
            this.toText()
        })
        super.setup();
    }
    toText(){
        return ['错误', '正确'][this.data.question_answer_list[0]]
    }
}

