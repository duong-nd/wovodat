/**
 * VolcanoList
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    tableName: 'vd',

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
