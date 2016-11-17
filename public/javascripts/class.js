window.onload = function() {
	var classname = document.querySelector('.classname');
	var des = document.querySelector('.des');
	var price = document.querySelector('.price');
	var oldprice = document.querySelector('.oldprice');
	var pic = document.querySelector('.pic');
	var type = document.querySelector('.type');
	var btn = document.querySelector('.btn');
	var tips = document.querySelector('p');
	var lingyu = document.querySelector('.lingyu');
	btn.onclick = function() {
		console.log('a');
		if (!classname.value || !des.value || !price.value || !pic.value || !type.value) {
			tips.innerHTML = '密码 用户名不能为空';
			return;
		} else {
			var data = 'classname=' + classname.value + '&des=' + des.value + '&price=' + price.value + '&oldprice=' + oldprice.value + '&pic=' + pic.value + '&type=' + type.value + '&lingyu=' + lingyu.value;
			console.log(data);
			AJax('POST', '/class/classlist', data, function(data) {
				console.log(data);
				// var data = JSON.parse(data.toString());
				// if (data.success == 1) {
				// 	window.location = data.redirect;

			})
		}
	}
}