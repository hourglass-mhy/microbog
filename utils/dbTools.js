/**
 * 查询所有符合条件的文档
 * @param collection
 * @param query
 * @param callback
 */
exports.find = function(collection, query, callback) {
    // Find some documents
    collection.find(query).toArray(function(err, docs) {
        if (err) {
            callback(err,null);
            return
        }
        callback(null,docs);
    });
}

/**
 * 查询单个符合条件的文档
 * @param collection
 * @param query
 * @param callback
 */
exports.findOne = function (collection,query,callback) {
    collection.findOne(query,function (err,docs) {
        if (err) {
            callback(err,null)
        }
        callback(null,docs);
    })
}

/**
 * 插入单个文档
 * @param collection
 * @param doc
 * @param callback
 */
exports.insertOne = function (collection,doc,callback) {
    collection.insertOne(doc,function (err,result) {
        if (err) {
            callback(err,null);
        }
        callback(null,result)
    })
}

/**
 * 插入多条多条文档
 * @param collection
 * @param docs
 * @param callback  err-- 错误信息  result--- 插入成功返回的信息
 */
exports.insertMany = function (collection,docs,callback) {

    collection.insertMany(docs,function (err,result) {
        if (err) {
            callback(err,null);
        }
        callback(null,result);
    })
}

/**
 * 更新单个文档
 * @param collection
 * @param query
 * @param update
 * @param callback
 */
exports.updateOne = function (collection,query,update,callback) {
    collection.updateOne(query,update,function (err,result) {
        if (err) {
            callback(err,null)
        }
        callback(null,result);
    })
}

/**
 * 更新满足条件的多个文档
 * @param collection
 * @param query
 * @param update
 * @param callback
 */
exports.updateMany = function (collection,query,update,callback) {
    collection.updateMany(query,update,function (err,result) {
        if (err) {
            callback(err,null);
        }
        callback(null,result)
    })
}

/**
 * 删除单个文档
 * @param collection
 * @param query
 * @param callback
 */
exports.deleteOne = function (collection,query,callback) {
    collection.deleteOne(query,function (err,result) {
        if (err) {
            callback(err,null)
        }
        callback(null,result);
    })
}

/**
 * 删除多个文档
 * @param collection
 * @param query
 * @param callback
 */
exports.deleteMany = function (collection,query,callback) {
    collection.deleteMany(query,function (err,result) {
        if (err) {
            callback(err,null);
        }
        callback(null,result)
    })
}



