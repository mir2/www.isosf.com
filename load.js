function instance(d, p, h, c) {
	var me = this;

	this.p = p;
	this.h = h;
	this.c = c;
	this.H = h * c;

	this.d = [];
	this.v = [];
	this.t = [];
	this.w = $(window);

	this.initData = function(d) {
		var i, j, c, f, t;
		var ts, fs, fc, tfs;
		var r = Math.floor(Math.random() * 10000);

		ts = d[0];
		tfs = d[1];

		c = ts.length;

		for(i = 0; i < c; i++) {
			t = ts[i];
			fs = tfs[i];
			fc = fs.length;

			for(j = 0; j < fc; j++) {
				f = fs[(j + r) % fc];
				f.push(t);
				me.d.push(f);
			}
		}
	};

	this.initView = function() {
		var b = $('#contents');
		var i, e;
		var h = me.H;
		var c = me.d.length;

		for(i = 0; i < c; i += me.c) {
			if((c - i) < me.c) {
				h = (c - i) * me.h;
			}

			b.append(e = $('<div style="height:' + h + 'px"></div>'));
			me.v.push(e);
		}
	};

	this.loadTable = function(i) {
		var j, k, s, f;

		if(i >= 0 && i < me.v.length && !me.t[i]) {
			j = i * me.c;
			k = j + me.c;

			if(k > me.d.length) {
				k = me.d.length;
			}

			f = me.d[j];

			s = '<table cellpadding="0" cellspacing="0" border="0">';

			if(j > 0) {
				s += '<tr home="' + f[0] + '"><td style="width:107px;">';
				s += f[1] + '</td><td style="width:107px;">';
				s += f[2] + '</td><td style="width:131px;">';
				s += f[6] + '</td><td style="width:83px;">';
				s += f[3] + '</td><td style="width:251px;">';
				s += f[4] + '</td><td style="width:83px;">';
				s += f[5] + '</td></tr>';
				j++;
			} else {
				s += '<tr home="www.isosf.com"><th style="width:107px;">';
				s += '服务器名</th><th style="width:107px;">';
				s += '网络地址</th><th style="width:131px;">';
				s += '开放时间</th><th style="width:83px;">';
				s += '网络类型</th><th style="width:251px;">';
				s += '游戏版本介绍</th><th style="width:83px;">';
				s += '联系客服</th></tr>';
			}

			for(; j < k; j++) {
				f = me.d[j];
				s += '<tr home="' + f[0] + '"><td>';
				s += f[1] + '</td><td>';
				s += f[2] + '</td><td>';
				s += f[6] + '</td><td>';
				s += f[3] + '</td><td>';
				s += f[4] + '</td><td>';
				s += f[5] + '</td></tr>';
			}

			s += '</table>';

			me.t[i] = s = $(s);

			s = s.find('tr');
			s.click(function(){var h=$(this).attr('home');if(h){window.open('http://'+h);}});
			s.hover(function(){$(this).addClass("hover");},function(){$(this).removeClass("hover");});

			me.v[i].replaceWith(me.t[i]);
		}
	};

	this.scrollTable = function() {
		var i = Math.floor((me.w.scrollTop() - me.p) / me.H);
		me.loadTable(i++);
		me.loadTable(i);
	};

	this.initData(d);
	this.initView();
	this.scrollTable();

	this.w.scroll(me.scrollTable);
}

function load(data) {
	new instance(data, 68, 25, 50);
}

document.write('<script type="text/javascript" src="http://isosf.sinaapp.com/f.php" charset="gbk"></script>');
