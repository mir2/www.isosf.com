function Render(d, c) {
	var me = this;

	this.ts = d[0];
	this.fss = d[1];
	this.c = c;

	this.i = 0;
	this.j = 0;
	this.r = Math.floor(Math.random() * 10000);

	this.f = $('#f');

	this.load = function() {
		var ts = me.ts;
		var fss = me.fss;

		var i = me.i;
		var j = me.j;
		var r = me.r;
		var c = me.c;

		var k = 0;
		var s = ['<table cellpadding="0" cellspacing="0" border="0">'];
		var t = null;
		var f = null;
		var fs = null;
		var fc = 0;

		if (i < ts.length && j <= (fc = (fs = fss[i]).length)) {
			t = ts[i];
			for (; k < c; k++) {
				if (j >= fc) {
					i++;
					if (i < ts.length) {
						fc = (fs = fss[i]).length;
						t = ts[i];
						j = 0;
					} else {
						window.clearInterval(me.t);
						break;
					}
				}

				f = fs[(j + r) % fc];

				if (k > 0) {
					s.push('<tr home="', f[0], '"><td>', f[1], '</td><td>', f[2], '</td><td>', t, '</td><td>', f[3], '</td><td>', f[4], '</td><td>', f[5], '</td></tr>');
				} else {
					s.push('<tr home="', f[0], '"><td style="width:107px;">', f[1], '</td><td style="width:107px;">', f[2], '</td><td style="width:131px;">', t, '</td><td style="width:83px;">', f[3], '</td><td style="width:251px;">', f[4], '</td><td style="width:83px;">', f[5], '</td></tr>');
				}

				j++;
			}
		}

		s.push('</table>');

		me.i = i;
		me.j = j;

		if (k) {
			me.f.append(s = $(s.join("")));
			s = s.find('tr');

			s.click(function(){var h=$(this).attr('home');if(h){window.open('http://'+h);}});
			s.hover(function(){var t=$(this);t.css('background-color','orange');t.css('text-decoration','underline');},
				function(){var t=$(this);t.css('background-color','');t.css('text-decoration','');});
		}
	};

	this.t = window.setInterval(this.load, 1000);
	this.load();
}

function load(d) {
	new Render(d, 60);
}

document.write('<script type="text/javascript" src="http://isosf.sinaapp.com/f.php" charset="gbk"></script>');
