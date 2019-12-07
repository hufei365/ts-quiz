const structs = {
    1: ['body', 'option', 'answer', 'analysis'],
    2: ['body', 'answer', 'analysis'],
    3: ['body', 'answer', 'analysis'],
    4: ['body', 'answer', 'analysis'],
    5: ['material', 'children'],
    6: ['material', 'translation', 'children'],
    7: ['material', 'audio', 'translation', 'children'],
    8: ['body', 'map', 'answer', 'analysis'],
    9: ['body', 'option', 'answer', 'analysis'],
    10: ['body'],
    11: ['body', 'prompt', 'answer', 'analysis'],
    12: ['body', 'option', 'answer', 'analysis']
}

abstract class Base {
    config: any
    middleware: Function[]
    constructor(config){
        this.config = config
        this.middleware = []
    }
    run():Function{
        return compose.apply(this, this.middleware )
    }
    use(fn:Function):void{
        this.middleware.push(fn)
    }
}

export default class Q extends Base {
    constructor(config) {
        super(config)
    }
    render():string{
        return ''
    }
}


function isExpire(expire:number):boolean{
    return Date.now() - this.timeStamp >  expire

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