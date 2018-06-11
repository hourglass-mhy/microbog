var MongoClient = require('./db');
var settings = require("../settings");
var dbTools = require('../utils/dbTools')

//获取说说列表
exports.getSayList = function (callback) {
    MongoClient.connect(settings.url, function(err, client) {
        const db = client.db(settings.dbName);
        const collection = db.collection("sayList");
        dbTools.find(collection,{},function (err,docs) {
            if (err) {
                callback(err,null);
            }
            callback(null,docs)
        })
    });
}

//保存说说
exports.saveSay  = function (doc,callback) {
    MongoClient.connect(settings.url,function (err,client) {
        const db = client.db(settings.dbName);
        const collection = db.collection("sayList");
        dbTools.insertOne(collection,doc,function (err,result) {
            if (err) {
                callback(err,null)
            }
            callback(null,{message: '发表成功'})
        })
    })
}
