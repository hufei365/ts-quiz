import { directive, stringLiteral } from "@babel/types"

export default class QBase {
    struct: Structs
    data:Question
    wrap:HTMLElement
    preparser: Function[]
    postparser: Function[]
    parser: Function
    constructor(struct){
        this.struct = struct;
        this.setup(this.data.struct_id)
    }
    setup(struct:string|number){
        this.parser = compose.apply(this, [...this.preparser, ()=>{}, ...this.postparser]) 
    }
    render(arr){
        arr.map( v=>{
            if(typeof v === 'string'){
                return v;
            } else {
                return v.render()
            }
        })
    }
    getHtml(){
        return ''
    }
    bindEvents(){}
    compile(template:string){
        
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