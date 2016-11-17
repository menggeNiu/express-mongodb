var express = require('express');
var router = express.Router();
// 前面设置过一个全局变量path 获取users的数据库
var mongo = require(path + '/Model/users');
/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.user == 1) {
		return res.render('index', {
			title: 'homeed',
			islogin: true
		});
	} else {
		return res.render('index', {
			title: 'home',
			islogin: false
		});
	}

});
// class列表
router.get('/list?*', function(req, res, next) {
	var selec = req.url.slice(-1);
	if (selec == 0) {
		mongo.classlist.find({}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('classall', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('classall', {
					data: data,
					islogin: false
				});
			}

		})
	} else if (selec == 1) {
		mongo.classlist.find({
			'lingyu': 'ios'
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('ios', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('ios', {
					data: data,
					islogin: false
				});
			}
		})
	} else if (selec == 2) {
		mongo.classlist.find({
			'lingyu': 'html'
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('html', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('html', {
					data: data,
					islogin: false
				});
			}

		})
	} else if (selec == 3) {
		mongo.classlist.find({
			'lingyu': 'unity'
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('unity', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('unity', {
					data: data,
					islogin: false
				});
			}
		})
	} else if (selec == 4) {
		mongo.classlist.find({
			'lingyu': 'reactnative'
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('reactnative', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('reactnative', {
					data: data,
					islogin: false
				});
			}
		})
	}
});
router.get('/login', function(req, res, next) {
	res.render('login', {
		title: 'login'
	});
});
router.get('/reg', function(req, res, next) {
	res.render('reg', {
		title: 'reg'
	});
});
router.get('/usercenter', function(req, res, next) {
	res.render('usercenter', {
		title: 'usercenter'
	});
});
// 注册 数据库操作
router.post('/reg', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	console.log(username, password, email);
	// // 现在数据库里进行查找看是否存在
	mongo.users.findOne({
		'username': username
	}, function(err, user) {
		if (err) {
			return res.send({
				success: 0,
				info: '注册失败'
			})
		};
		if (user) {
			return res.send({
				success: 0,
				info: '有重名',
				repeat: true
			})
		} else {
			mongo.users.create({
				username: username,
				password: password,
				email: email
			}, function(err, data) {
				if (err) {
					return res.send({
						success: 0,
						info: '注册失败'
					});
					return;
				}
				return res.send({
					success: 1,
					info: '注册成功',
					redirect: '/login'
				})
			})
		}
	});
});
// 登录 
router.post('/login', function(req, res, next) {
		var username = req.body.username;
		var password = req.body.password;
		mongo.users.findOne({
			'username': username
		}, function(err, user) {
			if (user) {
				// 保存状态
				req.session.user = 1;
				if (user.password == password) {
					console.log(password);
					// res.redirect('/')
					return res.send({
						success: 1,
						info: '登录成功',
						redirect: '/'
					})
				}
			}
		})
	})
	// 退出 注销
router.get('/loginout', function(req, res, next) {
	// 清除登录后设置的session
	req.session.user = null;
	res.redirect('/');
});
// 课程选择
router.get('/alltype?*', function(req, res, next) {
	var selec = req.url.slice(-1);
	if (selec == 0) {
		mongo.classlist.find({}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('classall', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('classall', {
					data: data,
					islogin: false
				});
			}
		})
	} else if (selec == 1) {
		mongo.classlist.find({
			"type": 1
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('classallzhi', {
					data: data,
					islogin: true,
					click1: true
				});
			} else {
				return res.render('classallzhi', {
					data: data,
					islogin: false,
					click1: true
				});
			}

		})
	} else if (selec == 2) {
		mongo.classlist.find({
			"type": 2
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('classalldian', {
					data: data,
					islogin: true,
					click2: true
				});
			} else {
				return res.render('classalldian', {
					data: data,
					islogin: false,
					click2: true
				});
			}
		})
	}
});
// ios
router.get('/iostype?*', function(req, res, next) {
	var selec = req.url.slice(-1);
	if (selec == 0) {
		mongo.classlist.find({
			"lingyu": "ios"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('ios', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('ios', {
					data: data,
					islogin: false,
				});
			}

		})
	} else if (selec == 1) {
		mongo.classlist.find({
			"type": 1,
			"lingyu": "ios"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('ioszhi', {
					data: data,
					islogin: true,
					click1: true
				});
			} else {
				return res.render('ioszhi', {
					data: data,
					islogin: true,
					click1: true
				});
			}

		})
	} else if (selec == 2) {
		mongo.classlist.find({
			"type": 2,
			"lingyu": "ios"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('iosdian', {
					data: data,
					islogin: true,
					click2: true
				});
			} else {
				return res.render('iosdian', {
					data: data,
					islogin: true,
					click2: true
				});
			}

		})
	}
});
// html
router.get('/htmltype?*', function(req, res, next) {
	var selec = req.url.slice(-1);
	if (selec == 0) {
		mongo.classlist.find({
			"lingyu": "html"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('html', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('html', {
					data: data,
					islogin: false
				});
			}

		})
	} else if (selec == 1) {
		mongo.classlist.find({
			"type": 1,
			"lingyu": "html"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('htmlzhi', {
					data: data,
					islogin: true,
					click1: true
				});
			} else {
				return res.render('htmlzhi', {
					data: data,
					islogin: false,
					click1: true
				});
			}

		})
	} else if (selec == 2) {
		mongo.classlist.find({
			"type": 2,
			"lingyu": "html"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('htmldian', {
					data: data,
					islogin: true,
					click2: true
				});
			} else {
				return res.render('htmldian', {
					data: data,
					islogin: false,
					click2: true
				});
			}
		})
	}
});
// unity
router.get('/unitytype?*', function(req, res, next) {
	var selec = req.url.slice(-1);
	if (selec == 0) {
		mongo.classlist.find({
			"lingyu": "unity"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('unity', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('unity', {
					data: data,
					islogin: true
				});
			}

		})
	} else if (selec == 1) {
		mongo.classlist.find({
			"type": 1,
			"lingyu": "unity"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('unityzhi', {
					data: data,
					islogin: true,
					click1: true
				});
			} else {
				return res.render('unityzhi', {
					data: data,
					islogin: false,
					click1: true
				});
			}

		})
	} else if (selec == 2) {
		mongo.classlist.find({
			"type": 2,
			"lingyu": "unity"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('unitydian', {
					data: data,
					islogin: true,
					click2: true
				});
			} else {
				return res.render('unitydian', {
					data: data,
					islogin: false,
					click2: true
				});
			}

		})
	}
});
// reactnative
router.get('/reactnativetype?*', function(req, res, next) {
	var selec = req.url.slice(-1);
	if (selec == 0) {
		mongo.classlist.find({
			"lingyu": "reactnative"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('reactnative', {
					data: data,
					islogin: true
				});
			} else {
				return res.render('reactnative', {
					data: data,
					islogin: false
				});
			}
		})
	} else if (selec == 1) {
		mongo.classlist.find({
			"type": 1,
			"lingyu": "reactnative"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('reactnativezhi', {
					data: data,
					islogin: true,
					click1: true
				});
			} else {
				return res.render('reactnativezhi', {
					data: data,
					islogin: false,
					click1: true
				});
			}
		})
	} else if (selec == 2) {
		mongo.classlist.find({
			"type": 2,
			"lingyu": "reactnative"
		}, function(err, data) {
			if (err) {
				return res.send({
					success: 0,
					info: '获取数据失败'
				})
			}
			console.log(data);
			if (req.session.user == 1) {
				return res.render('reactnativedian', {
					data: data,
					islogin: true,
					click2: true
				});
			} else {
				return res.render('reactnativedian', {
					data: data,
					islogin: false,
					click2: true
				});
			}
		})
	}
});
router.get('/centerclass', function(req, res, next) {
	mongo.classlist.find({}, function(err, data) {
		if (err) {
			return res.send({
				success: 0,
				info: '获取数据不成功，请重新获取'
			})
		}
		console.log(data);
		return res.render('centerclass', {
			data: data,
			islogin: true
		})
	})
});
router.get('/centerorder', function(req, res, next) {
	mongo.classlist.find({}, function(err, data) {
		if (err) {
			return res.send({
				success: 0,
				info: '获取数据不成功，请重新获取'
			})
		}
		console.log(data);
		return res.render('centerorder', {
			data: data,
			islogin: true
		})
	})
});
router.get('/centerpurse', function(req, res, next) {
	mongo.classlist.find({}, function(err, data) {
		if (err) {
			return res.send({
				success: 0,
				info: '获取数据不成功，请重新获取'
			})
		}
		console.log(data);
		return res.render('centerpurse', {
			data: data,
			islogin: true
		})
	})
});
router.get('/centeraccount', function(req, res, next) {
	mongo.classlist.find({}, function(err, data) {
		if (err) {
			return res.send({
				success: 0,
				info: '获取数据不成功，请重新获取'
			})
		}
		console.log(data);
		return res.render('centeraccount', {
			data: data,
			islogin: true
		})
	})
});

module.exports = router;