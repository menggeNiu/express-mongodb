var express = require('express');
var router = express.Router();
var mongo = require(path + '/Model/users');
router.get('/config', function(req, res, next) {
	res.render('guanli', {
		title: '课程管理'
	})
})
router.post('/classlist', function(req, res, next) {
	var classname = req.body.classname;
	var des = req.body.des;
	var price = req.body.price;
	var oldprice = req.body.oldprice;
	var pic = req.body.pic;
	var type = req.body.type;
	var lingyu = req.body.lingyu;
	// mongo.classlist.find({}, function(err, data) {
	// 	console.log(data);
	// });
	mongo.classlist.create({
		classname: classname,
		des: des,
		price: price,
		oldprice: oldprice,
		pic: pic,
		type: type,
		lingyu: lingyu
	}, function(err, data) {
		if (err) {
			return res.send({
				success: 0,
			})
		}
		return res.send({
			success: 1
		})
	})
})

module.exports = router;