/**
 * Created by Anshi on 2017/6/15.
 */
let MongoClient = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;
let url = "mongodb://localhost:27017/lolita";
/*async function add1() {
 return await spider.getWebList();
 }*/



/*async function getDB() {
 let fn =  new Promise((resolve,reject)=> {
 MongoClient.connect(url, function(err, db) {
 if (err) {
 console.warn(err);
 return;
 }
 resolve(db.collection('lolita'))
 });
 });
 let db = await fn;
 console.log(db,'233')
 return db; //返回db
 }
 const db = getDB().then(db=>{
 module.exports = {
 getWeiboByTags:function () {
 return new Promise(
 db.
 )
 }
 }
 });*/
let db = {}, lo = {};
async function exp() {
    db = await MongoClient.connect(url);
    lo = db.collection('lolita')
    console.log('connected')
}
exp();
module.exports = {
    getListByTag(sp = {user: "Honey_honey_lolita"}, num = 5){
        return lo.find(sp).limit(num).toArray()/*.then((err, docs) => {
            console.log(err, docs, "errdoc")
        })*/
    },
    saveList(cls = "one", json){
        //验证，过滤
        switch (cls) {
            case 'one':
                return lo.insertOne(json)
            case 'many':
                return lo.insertMany(json)
        }
    }
}


/*let exp = async function () {
 let fn =  new Promise((resolve,reject)=> {
 MongoClient.connect(url, function(err, db) {
 if (err) {
 console.warn(err);
 reject(err)
 }
 resolve(db)
 });
 });
 await  fn();

 }
 module.exports = {
 getListByTags:async function(){
 }
 }*/



/*MongoClient.connect(url, function(err, db) {
 if (err) {
 console.warn(err);
 }
 //获取json
 add1().then(json => {
 db.collection('lolita').insertMany(json).then(res => {
 console.log("插入成功",res);
 db.close();
 });
 })
 //从db获取
 db.collection('lolita').find().limit(5)
 });*/


