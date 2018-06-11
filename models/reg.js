var MongoClient = require('./db');
var settings = require("../settings");
var dbTools = require('../utils/dbTools');

exports.saveUserInfo = function (doc,callback) {
    MongoClient.connect(settings.url,function (err,client) {
        const db = client.db(settings.dbName);
        const collection = db.collection("userInfo");
        dbTools.insertOne(collection,doc,function (err,result) {
            if (err) {
                callback(err,null)
            }
            callback(null,{message: '注册成功'})
        })
    })
}