import { directive, stringLiteral } from "@babel/types"

type Component = {
    getHTML?(data: Question): string;
    preparser?:Function
    postparser?:Function
}
interface Config {
    wrap:HTMLElement
    components: Component[]
}

abstract class Base{
    struct: string[]
    data:Question
    wrap:HTMLElement

    constructor(config){
        this.wrap = config.wrap
        (config.preparser||[]).forEach(fn=>{
            this.preparser.push(fn)
        })
        config.components.forEach(component=>{
            component.preparser && this.preparser.push(component.preparser)
        })
    }
    protected setup(){
        this.parser = compose(...this.preparser, this.parser, ...this.postparser)
    }
    use(stage:string, fn: Function){}
    on(type:string, fn:Function){}
    private preparser: Function[]
    private postparser: Function[]
    private parser: Function
    private beforeRender: Function
    private afterRender: Function
    private bindEvents: Function
    render(wrap:HTMLElement, data:Question):void{
            this.data = data;
            this.beforeRender();
            // 1. 渲染到DOM上 
            wrap.innerHTML = this.template()
            this.afterRender();
            // 2. 事件绑定
            this.bindEvents();
    }
    template():string{
        let tplData = this.parser(this.data)
        return '';
    }
}
export default class QBase extends Base {    
    constructor(config){
        super(config)
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



({
    'wrap': document.body,
    'render': ()=>{},
    'getHTML':()=>{},
    'events':{
        'click': [],
        'dblclick':[]
    },
    'on':()=>{}
})