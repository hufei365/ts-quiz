import { directive, stringLiteral } from "@babel/types"

abstract class Base{
    struct: Structs
    data:Question
    wrap:HTMLElement
    use(stage:string, fn: Function){}
    preparser: Function[]
    postparser: Function[]
    parser: Function
    beforeRender: Function
    afterRender: Function
    getHTML(): string{
        return ''
    } 
    
}
export default class QBase extends Base {    
    constructor(struct){
        super()
        this.struct = struct;
        this.setup(this.data.struct_id)
    }
}


function compose(...funcs: Function[]) {
    if (funcs.length === 0) {
        // infer the argument type so it is usable in inference down the line
        return <T>(arg: T) => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}


{
    name: 'q'
    children: [
        {
            name: 'q1'
        }
    ]
}

// <div name="q"> <span>boodk {{{q1}}}</span> bodk  </div>