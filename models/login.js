var MongoClient = require('./db');
var settings = require("../settings");
var dbTools = require('../utils/dbTools');

//获取用户信息
exports.getUserInfo = function (query,callback) {
    MongoClient.connect(settings.url, function(err, client) {
        const db = client.db(settings.dbName);
        const collection = db.collection("userInfo");
        dbTools.find(collection,query,function (err,docs) {
            if (err) {
                callback(err,null);
            }
            callback(null,docs)
        })
    });
}
