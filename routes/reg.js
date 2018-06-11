var express = require('express');
var router = express.Router();
var regHandler = require("../models/reg")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('reg')
});

router.post('/',function (req,res,next) {
    var body = req.body;
    if (body.password !== body.password_repeat) {
        res.send("<script charset='utf-8'  type='text/javascript' >alert('两次密码输入不一致，请重新输入');window.location.href='/reg';</script>")
    } else  {
        var insertObj = {
            username: body.username,
            password: body.password
        }
        regHandler.saveUserInfo(insertObj,function (err,result) {
            res.send("<script charset='utf-8'  type='text/javascript' >alert('注册成功');window.location.href='/login';</script>")
        })
    }
})

module.exports = router;

