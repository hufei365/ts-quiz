console.log('start test ......')

const Q = require("../dist/index").default;
let q = new Q({})
q.use(function(){
    console.log('test use success')
})

console.log(q.middleware)
let fn = q.run();
fn()


console.log('end test !!!')

