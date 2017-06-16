/**
 * Created by Anshi on 2017/6/16.
 */
let database = require('../spider2/spider.js');
//json其余内容生成。 json其余内容几种模式？几种返回码
let jsonPoduce = {msg:"",statusCode:true};



 let api = {
    getList: async function (req,res) {
        let a = await database.getListByTag()
        jsonPoduce.data = a;
        res.send(a)
    }
}
module.exports = api
