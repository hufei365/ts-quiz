export default class QBase implements Base{
    data:Question
    wrap:HTMLElement
    constructor(data){
        this.data = data;
    }
    preparser(){}
    parser(){}
    postparser(){}
    render(){
        this.wrap.innerHTML = this.getHtml()
    }
    getHtml(){
        return ''
    }
    bindEvents(){}
}

