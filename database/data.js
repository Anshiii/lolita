let test = require('../spider2/spider.js');

setTimeout(function () {
    console.log(test,"3000")
    console.log(test.getListByTag())
    // test.getListByTag().then(e =>{ console.log(e)})
    async function a() {
        var q = await test.getListByTag()
        return q
    }
    a().then(q =>{
        console.log(q)
    })
},3000)