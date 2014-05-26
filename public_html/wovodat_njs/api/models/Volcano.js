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
