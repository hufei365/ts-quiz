
import answer from './components/answer'

enum stage {
    preparser,
    parser,
    postparser
}

interface middleware{
    preparser: Function[],
    parser: Function[],
    postparser: Function[]

}

abstract class Base {
    config: any
    middleware: middleware
    constructor(config){
        this.config = config
        this.middleware = {
            preparser: [],
            parser: [],
            postparser: []
        }
    }
    use(stage:stage, fn:Function):void{
        this.middleware[stage].push(fn)
    }
}


export default class Q extends Base {
    constructor(config) {
        super(config)
        // this.middleware.parser.push( answer )
    }

    run():Function{
        let _m = this.middleware;
        return compose.apply(this, [..._m.preparser, ..._m.parser, ..._m.postparser] )
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