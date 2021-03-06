/*
 * Module dependencies
 */

var app = module.parent.exports,
	Joiner = require('../libs/joiner').Joiner;

/*
 * Middlewares
 */

function isAnotherFile (req, res, next) {
	var folder = req.params.version;
	if (folder === 'assets' || folder === 'vendor' || folder === 'test' || folder === 'libs') {
		next('route');
	} else {
		next();
	}
};

function isView (req, res, next) {
	if (req.params.type === undefined) {
		res.render(req.params.version + '.html');
	} else {
		next();
	}
};

/*
 * Views
 */
app.get('/:version/:type?', isAnotherFile, isView, function (req, res, next) {
	var name = req.params.version + req.params.type.toUpperCase(),
		min = ((req.query.min) ? req.query.min : false),
		joiner = new Joiner();

	joiner.on('joined', function (data) {
		res.set('Content-Type', 'text/' + (req.params.type === 'js' ? 'javascript' : 'css'));
		res.send(data.raw);
	});

	joiner.run(name, min);
});

/*
 * Index
 */
app.get('/', function (req, res, next) {
	res.redirect('/ui')
});