window.onload = function() {
	var logbtn = document.querySelector('.btn');
	var goreg = document.querySelector('.submit')
	var tips = document.querySelector('p');
	var loginbtn = document.getElementsByClassName('loginbtn')[0];
	var regbtn = document.getElementsByClassName('resbtn')[0];
	var log = document.getElementsByClassName('log')[0];
	var reg = document.getElementsByClassName('reg')[0];
	$('.login a').eq(1).addClass('onlink');
	loginbtn.onclick = function() {
		log.style.display = 'block';
		reg.style.display = 'none';
		$('.loginbtn').addClass('on');
		$('.resbtn').removeClass('on');
		logbtn.onclick = function() {
			var username = document.querySelector('.username');
			var password = document.querySelector('.password');
			if (!username.value || !password.value) {
				return;
			} else {
				var data = 'username=' + username.value + '&password=' + password.value;
				AJax('POST', '/login', data, function(data) {
					var data = JSON.parse(data.toString());
					if (data.success == 1) {
						window.location = data.redirect;
					}
				})
			}
		};
	};
	regbtn.onclick = function() {
		log.style.display = 'none';
		reg.style.display = 'block';
		$('.loginbtn').removeClass('on');
		$('.resbtn').addClass('on');
	};
	goreg.onclick = function() {
		var username = document.querySelector('.usernames');
		var password = document.querySelector('.passwords');
		var email = document.querySelector('.email');
		console.log('a');
		if (!username.value || !password.value || !email.value) {
			return;
		} else {
			var data = 'username=' + username.value + '&password=' + password.value + '&email=' + email.value;
			AJax('POST', '/reg', data, function(data) {
				var data = JSON.parse(data.toString());
				console.log(data);
				if (data.repeat) {
					tips.innerHTML = '用户名重复，请重新设置'
				}
				if (data.success == 1) {
					window.location = data.redirect;
				}
			})
		}
	}
}