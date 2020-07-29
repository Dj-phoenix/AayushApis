
const SeqTask=require('../models/SeqTask');
const getSignInJwtDetails = function(req,res){
		SeqTask.getSignInJwtDetails(req.query,function(err,rows){
		res.json({ rows });
					});
	}

module.exports = {
	getSignInJwtDetails:getSignInJwtDetails
	}