/**
 * Volcano
 *
 * @module      :: Model
 * @description :: This models a Volcano from wovodat database
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	tableName: 'vd',
	adapter: 'mysql',
	migrate: 'safe',

	config: {
		host: 'wovodat.org',
		port: 3307,
		user: 'wovodat_view',
		password: '+00World',
		database: 'wovodat'
	},

	attributes: {
		vd_id : {
			type: 'INTEGER',
			required: true
		},
		vd_name : {
			type: 'STRING',
			required: true
		}
		/* e.g.
		nickname: 'string'
		*/
		
	}
};
