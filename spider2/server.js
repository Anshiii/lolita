const request = require("request");
const cheerio = require("cheerio");
let targetList = [{
  uid: 5612214570,
  luicode: 10000011,
  lfid: 1076032854011612,
  type: 'uid',
  value: '5612214570',
  containerid: '1076035612214570',
  page: 1
}]
let options = {
  url: "https://m.weibo.cn/api/container/getIndex?uid=5612214570&type=uid&value=5612214570&containerid=1076035612214570&page=2",
  headers: {
    Cookie: '_T_WM=fb313c99f912659bc78436e2e5018444; ALF=1500098582; SCF=AnuBF0CUhIcA75-2MDDW3gv4Hvrs9y_Gb0e0TvCF9JFCE-XOlxsEcXdD8Wzry2NeEfQ5S535TH4zLy2b03CIUyc.; SUB=_2A250RlNGDeThGeRG7lYR8S_Kyj6IHXVXyX0OrDV6PUJbktBeLRn5kW0FZyBEeJflGTDZOD_RbuXqLRUdNg..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WF2RTmxiPbLgsPf_QD2CvIF5JpX5o2p5NHD95QE1h-Xeh2pSo2EWs4Dqcj_i--NiKnXi-2ci--Ri-zpiKnci--RiKnfiK.7i--Ni-z0iK.ci--RiKnXiK.p; SUHB=09Ps5rvOKleagN; SSOLoginState=1497506583; M_WEIBOCN_PARAMS=featurecode%3D20000180%26oid%3D4117846512430870%26luicode%3D10000011%26lfid%3D1005055612214570%26fid%3D1005055612214570%26uicode%3D10000011',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
  }
}

function getNewJson(json) {
  let newJson = [];
  if (json.ok === 1 && json.cards && json.cards.length > 0) {
    json.cards.forEach((item, idx) => {
      let newItem = {};
      newJson[idx] = newItem;
      if (item.card_type === 9) {
        item = item.mblog;
        newItem.created = item.created_at;
        newItem.idstr = item.idstr;
        newItem.text = item.text;
        newItem.tags = ['daily'];
        newItem.user = item.user.screen_name;
        newItem.ava = item.user.profile_image_url;
        newItem.pics = [];
        if (item.pics) {
          item.pics.forEach((i, idx) => {
            newItem.pics[idx] = {
              large: {
                url: i.large.url,
                size: [i.large.geo.width, i.large.geo.height]
              },
              pre: {
                url: i.url,
                size: [i.geo.width, i.geo.height]
              }
            }
          })
        }
      }
    })
  }
  return newJson;
}

/*request(options,function (err,res,body) {
    console.log(err,res,body)
})*/
module.exports = {
  getWebList() {
     return new Promise((resolve,reject) =>{
      request(options,function(err,res,body){
        if (res.statusCode == 200) {
          var info = JSON.parse(body);
          console.log("发送了请求");
          resolve(getNewJson(info))
        }
      })})
  }
}
