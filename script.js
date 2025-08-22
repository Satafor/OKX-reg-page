// FAQ 折叠交互：点击问题切换展开/收起
// - 使用按钮的 aria-expanded 与隐藏内容的 hidden 属性
// - 保持原生无依赖
(function () {
	var questions = document.querySelectorAll('.faq-question');
	if (questions && questions.length) {
		questions.forEach(function (btn) {
			btn.addEventListener('click', function () {
				var expanded = btn.getAttribute('aria-expanded') === 'true';
				var item = btn.closest('.faq-item');
				var answer = item && item.querySelector('.faq-answer');
				btn.setAttribute('aria-expanded', (!expanded).toString());
				if (answer) {
					answer.hidden = expanded;
				}
				// 切换图标 + / -
				var icon = btn.querySelector('.icon');
				if (icon) icon.textContent = expanded ? '+' : '−';
			});
		});
	}

	// 第三个视频懒播放：进入可视区域后才 autoplay
	var helperVideo = document.getElementById('helperVideo');
	if (helperVideo && 'IntersectionObserver' in window) {
		try {
			var played = false;
			var io = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (!played && entry.isIntersecting) {
						played = true;
						helperVideo.play().catch(function () { 
							console.log('自动播放被阻止'); 
						});
						io.disconnect();
					}
				});
			}, { threshold: 0.35 });
			io.observe(helperVideo);
		} catch (e) {
			// 兜底：如不支持或异常，保持静音但不自动播放
		}
	}

	// 邀请码复制按钮：点击后复制到剪贴板并弹出提示
	var copyBtn = document.getElementById('copy-invite');
	if (copyBtn) {
		copyBtn.addEventListener('click', function () {
			var code = '34308786';
			var copy = function (text) {
				if (navigator.clipboard && navigator.clipboard.writeText) {
					return navigator.clipboard.writeText(text);
				}
				// 兼容处理：创建临时 input
				return new Promise(function(resolve){
					var input = document.createElement('input');
					input.value = text;
					document.body.appendChild(input);
					input.select();
					try { document.execCommand('copy'); } catch (e) {}
					document.body.removeChild(input);
					resolve();
				});
			};
			copy(code).then(function(){
				alert('\u9080\u8bf7\u780134308786\u5df2\u590d\u5236');
			});
		});
	}
})();
