
const SeqTask=require('../models/SeqTask');
const getSignInJwtDetails = function(req,res){
		SeqTask.getSignInJwtDetails(req,function(err,rows){
		  res.json({ rows });
					});
	}

module.exports = {
	getSignInJwtDetails
	}