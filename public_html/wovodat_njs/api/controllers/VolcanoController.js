/**
 * VolcanoController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var VolcanoController = {
	find: function (req, res, next) {
	var where = req.param('where');
	var options = {
		limit: req.param('limit') || undefined,
		skip: req.param('skip')  || undefined,
		sort: req.param('sort') || undefined,
		where: where || undefined
	};
	
	console.log(options);
	Volcano.find(options, function(err, Volcano) {

          if(Volcano === undefined) return res.notFound();

          if (err) return next(err);

          res.json(Volcano);

      });
	},
	
	create: function(req, res, next) {
		var params = req.params.all();
		Volcano.create(params, function(err, volcano) {

			if (err) return next(err);

			res.status(201);

			res.json(volcano);

		});
	}

};
 
module.exports = VolcanoController;