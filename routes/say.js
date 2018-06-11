var express = require('express');
var router = express.Router();
var sayHandler  = require("../models/say")
var moment = require('moment')

/* GET sayList. */
router.get('/', function(req, res, next) {
    sayHandler.getSayList(function (err,docs) {
      if (err) {
        throw err;
        return
      }
      res.render('say', {
        sayList: docs
      });
    })
});

router.post('/',function (req,res) {
    var body = req.body;
    console.log(body);
    var time = moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss');
    console.log(time);
    var insertDoc = {
        name: 'xiao',
        content: body.content,
        create_time: time,
    };
    sayHandler.saveSay(insertDoc,function (err,result) {
        if (err) {
            throw err;
            return
        }
        res.send("<script charset='utf-8'  type='text/javascript' >alert('发表成功');window.location.href='/say';</script>")

    })
})
module.exports = router;

