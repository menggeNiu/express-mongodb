window.onload = function() {
	var lunbo = document.getElementsByClassName('lunbo')[0];
	var lunbobox = document.getElementsByClassName('lunbobox')[0];
	var circlebtn = document.getElementsByClassName('circlebtn');
	var leftbtn = document.getElementsByClassName('btnleft')[0];
	var rightbtn = document.getElementsByClassName('btnright')[0];
	var lunbotimer = null;
	var lunboindex = 0;
	// 轮播图函数
	function bo() {
		lunbotimer = setInterval(function() {
			lunboindex++;
			if (lunboindex >= 3) {
				lunboindex = 0;
			}
			for (var i = 0; i < circlebtn.length; i++) {
				circlebtn[i].style.background = 'rgba(255,255,255,0.5)';
			}
			lunbobox.style.left = -1232 * lunboindex + 'px';
			circlebtn[lunboindex].style.background = '#fff';
		}, 3000);
	}
	bo();
	// circlebtn点击
	for (var i = 0; i < circlebtn.length; i++) {
		circlebtn[i].index = i;
		circlebtn[i].onclick = function() {
			console.log('a');
			for (var j = 0; j < circlebtn.length; j++) {
				circlebtn[j].style.background = 'rgba(255,255,255,0.5)';
			}
			this.style.background = '#fff';
			lunbobox.style.left = -this.index * 1232 + 'px';
			lunboindex = this.index;
		}
	}
	// 移入轮播图
	lunbo.onmouseenter = function() {
		clearInterval(lunbotimer);
		rightbtn.style.display = 'block';
		leftbtn.style.display = 'block';
		rightbtn.onclick = function() {
			lunboindex++;
			if (lunboindex >= 3) {
				lunboindex = 0;
			}
			for (var i = 0; i < circlebtn.length; i++) {
				circlebtn[i].style.background = 'rgba(255,255,255,0.5)';
			}
			lunbobox.style.left = -lunboindex * 1232 + 'px';
			circlebtn[lunboindex].style.background = '#fff';
		};
		leftbtn.onclick = function() {
			lunboindex--;
			if (lunboindex <= -1) {
				lunboindex = 2;
			}
			for (var i = 0; i < circlebtn.length; i++) {
				circlebtn[i].style.background = 'rgba(255,255,255,0.5)';
			}
			lunbobox.style.left = -lunboindex * 1232 + 'px';
			circlebtn[lunboindex].style.background = '#fff';
		};
		lunbo.onmouseleave = function() {
			rightbtn.style.display = 'none';
			leftbtn.style.display = 'none';
			bo();
		}
	};
}