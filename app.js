/**
 * Created by Anshi on 2017/6/14.
 */
let express = require('express');
let app = express();
let handler = require('./router/handler.js')


app.get('/',function (req,res) {
    res.send('hello world')
});

app.get('/index',function (req,res) {
    handler.pageIdx(req,res);
    //服务器拿数据

});

app.listen(55555,function () {
    console.log("29292")
})
