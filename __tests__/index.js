console.log('start test ......')

const Q = require("../dist/index").default;

const msg = "test use succes"
let q = new Q({})
q.use('parser',function(){
    return msg;
})

describe('q.run', ()=>{
    it(`it should print message: ${msg}`, ()=>{
        const msg = q.run()();
        expect(msg).toMatchSnapshot()
    })
})

console.log('end test !!!')

