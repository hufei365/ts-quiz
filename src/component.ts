import {Render } from './quiz.d.ts'

interface Unit {
    render:Render
}

export class Component  {
    name: string,
    constructor(name:string, config){
        this.name = name
    }

    render(){
        return 
    }
}

